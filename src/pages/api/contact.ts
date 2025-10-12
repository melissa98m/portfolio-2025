
import type { APIRoute } from "astro";
import { Resend } from "resend";

export const prerender = false; // s'assure que la route reste SSR

const isDev = import.meta.env.DEV === true;
const j = (s: number, b: unknown) =>
  new Response(JSON.stringify(b), { status: s, headers: { "content-type": "application/json" } });

const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

async function parsePayload(req: Request) {
  // try all: formData -> json -> text/urlencoded -> querystring (fallback ultime)
  let from_name = "", reply_to = "", message = "", company = "";

  // querystring
  const url = new URL(req.url);
  const qp = url.searchParams;

  //formData (navigateur or fetch without headers)
  try {
    const fd = await req.clone().formData();
    if (fd && (fd.has("from_name") || fd.has("reply_to") || fd.has("message"))) {
      from_name = String(fd.get("from_name") ?? "").trim();
      reply_to  = String(fd.get("reply_to")  ?? "").trim();
      message   = String(fd.get("message")   ?? "").trim();
      company   = String(fd.get("company")   ?? "").trim();
      return { from_name, reply_to, message, company };
    }
  } catch { /* ignore */ }

  //JSON explicit
  try {
    const body = await req.clone().json();
    if (body && (body.from_name || body.reply_to || body.message)) {
      from_name = String(body.from_name ?? "").trim();
      reply_to  = String(body.reply_to  ?? "").trim();
      message   = String(body.message   ?? "").trim();
      company   = String(body.company   ?? "").trim();
      return { from_name, reply_to, message, company };
    }
  } catch { /* ignore */ }

  // text -> urlencoded best-effort
  try {
    const raw = await req.clone().text();
    if (raw) {
      if (/^[\s]*[{\[]/.test(raw)) {
        // jSON
        try {
          const body = JSON.parse(raw);
          from_name = String(body?.from_name ?? "").trim();
          reply_to  = String(body?.reply_to  ?? "").trim();
          message   = String(body?.message   ?? "").trim();
          company   = String(body?.company   ?? "").trim();
          if (from_name || reply_to || message) return { from_name, reply_to, message, company };
        } catch { /* ignore */ }
      }
      // urlencoded
      const sp = new URLSearchParams(raw);
      from_name = String(sp.get("from_name") ?? "").trim();
      reply_to  = String(sp.get("reply_to")  ?? "").trim();
      message   = String(sp.get("message")   ?? "").trim();
      company   = String(sp.get("company")   ?? "").trim();
      if (from_name || reply_to || message) return { from_name, reply_to, message, company };
    }
  } catch { /* ignore */ }

  // fallback: querystring
  from_name = String(qp.get("from_name") ?? "").trim();
  reply_to  = String(qp.get("reply_to")  ?? "").trim();
  message   = String(qp.get("message")   ?? "").trim();
  company   = String(qp.get("company")   ?? "").trim();

  return { from_name, reply_to, message, company };
}

export const POST: APIRoute = async ({ request }) => {
  const RESEND_API_KEY = import.meta.env.RESEND_API_KEY;
  const CONTACT_TO     = import.meta.env.CONTACT_TO;
  const CONTACT_FROM   = import.meta.env.CONTACT_FROM;

  if (!RESEND_API_KEY || !CONTACT_TO || !CONTACT_FROM) {
    if (isDev) console.error("[contact] ENV", { RESEND_API_KEY: !!RESEND_API_KEY, CONTACT_TO: !!CONTACT_TO, CONTACT_FROM: !!CONTACT_FROM });
    return j(500, { ok: false, code: "ENV_MISSING" });
  }

  const { from_name, reply_to, message, company } = await parsePayload(request);

  if (!from_name && !reply_to && !message) {
    if (isDev) {
      const ct = request.headers.get("content-type") || "";
      const raw = await request.clone().text().catch(() => "");
      console.error("[contact] BAD_PAYLOAD", { ct, rawLen: raw.length });
    }
    return j(400, { ok: false, code: "BAD_PAYLOAD" });
  }

  // Honeypot
  if (company) return j(200, { ok: true, spam: true });

  // Validations
  const errors: Record<string, string> = {};
  if (!from_name || from_name.length < 2) errors.from_name = "Au moins 2 caractères.";
  if (!reply_to) errors.reply_to = "Email requis.";
  else if (!isEmail(reply_to)) errors.reply_to = "Email invalide.";
  if (!message || message.length < 10) errors.message = "Au moins 10 caractères.";
  if (Object.keys(errors).length) return j(400, { ok: false, errors });

  try {
    const resend = new Resend(RESEND_API_KEY);
    const subject = `📨 Nouveau message de ${from_name}`;
    const text = `Nom: ${from_name}\nEmail: ${reply_to}\n\nMessage:\n${message}`;

    const { error, data } = await resend.emails.send({
      from: CONTACT_FROM,
      to: CONTACT_TO,
      subject,
      text,
      replyTo: reply_to,
    });

    if (error) {
      if (isDev) console.error("[contact] PROVIDER_ERROR", error);
      return j(502, { ok: false, code: "PROVIDER_ERROR" });
    }

    if (isDev) console.log("[contact] Sent", data?.id);
    return j(200, { ok: true });
  } catch (e) {
    if (isDev) console.error("[contact] SERVER_EXCEPTION", e);
    return j(500, { ok: false, code: "SERVER_EXCEPTION" });
  }
};

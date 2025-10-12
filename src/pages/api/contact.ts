import type { APIRoute } from "astro";
import { Resend } from "resend";

const RESEND_API_KEY = import.meta.env.RESEND_API_KEY;
const CONTACT_TO = import.meta.env.CONTACT_TO;         
const CONTACT_FROM = import.meta.env.CONTACT_FROM;     

function isEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

export const POST: APIRoute = async ({ request }) => {
  try {
    if (!RESEND_API_KEY || !CONTACT_TO || !CONTACT_FROM) {
      return new Response("Email config missing", { status: 500 });
    }

    // support formData (POST classic)
    const ct = request.headers.get("content-type") || "";
    let name = "", email = "", message = "", honeypot = "";
    if (ct.includes("application/json")) {
      const body = await request.json().catch(() => ({}));
      name = String(body.from_name || "").trim();
      email = String(body.reply_to || "").trim();
      message = String(body.message || "").trim();
      honeypot = String(body.company || "").trim();
    } else {
      const fd = await request.formData();
      name = String(fd.get("from_name") || "").trim();
      email = String(fd.get("reply_to") || "").trim();
      message = String(fd.get("message") || "").trim();
      honeypot = String(fd.get("company") || "").trim(); // honeypot
    }

    // honeypot anti-bot
    if (honeypot) {
      return new Response(JSON.stringify({ ok: true }), {
        status: 200,
        headers: { "content-type": "application/json" },
      });
    }

    // validations server
    const errors: Record<string, string> = {};
    if (!name || name.length < 2) errors.from_name = "Nom trop court.";
    if (!email || !isEmail(email)) errors.reply_to = "Email invalide.";
    if (!message || message.length < 10) errors.message = "Message trop court.";
    if (Object.keys(errors).length) {
      return new Response(JSON.stringify({ ok: false, errors }), {
        status: 400,
        headers: { "content-type": "application/json" },
      });
    }

    const resend = new Resend(RESEND_API_KEY);

    const subject = `📨 Nouveau message de ${name}`;
    const text = [
      `Nom: ${name}`,
      `Email: ${email}`,
      "",
      "Message:",
      message,
    ].join("\n");

    const { error } = await resend.emails.send({
      from: CONTACT_FROM,
      to: CONTACT_TO,
      subject,
      text,
      replyTo: email,
    });

    if (error) {
      return new Response("Mail provider error", { status: 502 });
    }

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { "content-type": "application/json" },
    });
  } catch (e) {
    return new Response("Server error", { status: 500 });
  }
};

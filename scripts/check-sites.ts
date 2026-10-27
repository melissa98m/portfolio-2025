// Vérifie chaque projet "deployed" ayant une URL de preview et écrit la liste des sites en erreur
// dans src/data/site-status.json. Lancé chaque jour par .github/workflows/check-sites.yml.
// Usage : node scripts/check-sites.ts
import { writeFileSync } from "node:fs";
import { projectsData } from "../src/data/projects.ts";

const OUTPUT = new URL("../src/data/site-status.json", import.meta.url);
const TIMEOUT_MS = 15_000;
const ATTEMPTS = 3;
const RETRY_DELAY_MS = 10_000;

async function fetchStatus(url: string): Promise<number | string> {
  try {
    const res = await fetch(url, {
      redirect: "follow",
      signal: AbortSignal.timeout(TIMEOUT_MS),
      headers: { "User-Agent": "Mozilla/5.0 (compatible; portfolio-status-check)" },
    });
    return res.status;
  } catch (err) {
    return err instanceof Error ? err.message : String(err);
  }
}

// Plusieurs tentatives espacées : une seule erreur passagère ne doit pas passer un site en maintenance.
async function checkSite(url: string): Promise<{ ok: boolean; result: number | string }> {
  let result: number | string = "";
  for (let attempt = 1; attempt <= ATTEMPTS; attempt++) {
    result = await fetchStatus(url);
    if (typeof result === "number" && result < 400) return { ok: true, result };
    if (attempt < ATTEMPTS) await new Promise((r) => setTimeout(r, RETRY_DELAY_MS));
  }
  return { ok: false, result };
}

const sites = projectsData.filter((p) => p.status === "deployed" && p.preview);

const results = await Promise.all(
  sites.map(async (p) => ({ id: p.id, url: p.preview!, ...(await checkSite(p.preview!)) })),
);

for (const r of results) {
  console.log(`${r.ok ? "OK  " : "DOWN"} ${r.id.padEnd(16)} ${String(r.result).padEnd(4)} ${r.url}`);
}

const maintenance = results.filter((r) => !r.ok).map((r) => r.id).sort();
writeFileSync(OUTPUT, JSON.stringify({ maintenance }, null, 2) + "\n");

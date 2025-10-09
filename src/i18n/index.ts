import type { Locale } from "./config";
import fr from "./fr";
import en from "./en";

const DICTS: Record<Locale, any> = { fr, en };

export function getI18n(lang: string | undefined) {
  const locale = (lang === "en" ? "en" : "fr") as Locale;
  const dict = DICTS[locale];

  const t = (path: string): string => {
    const parts = path.split(".");
    let cur: any = dict;
    for (const p of parts) cur = cur?.[p];
    return typeof cur === "string" ? cur : path;
  };

  return { t, dict, lang: locale };
}

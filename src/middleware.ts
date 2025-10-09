import type { MiddlewareHandler } from "astro";
import { DEFAULT_LOCALE } from "@/i18n/config";

export const onRequest: MiddlewareHandler = async (ctx, next) => {
  const url = new URL(ctx.request.url);
  if (url.pathname === "/") {
    url.pathname = `/${DEFAULT_LOCALE}`;
    return Response.redirect(url, 307);
  }
  return next();
};

import createMiddleware from "next-intl/middleware";
import { pathnames, locales, defaultLocale } from "../locales/routes";
import { NextResponse } from "next/server";

const intlMiddleware = createMiddleware({
  locales,
  defaultLocale,
  localePrefix: "always",
  pathnames,
});

export async function middleware(request: any) {
  let response = intlMiddleware(request);

  const { pathname } = request.nextUrl;

  const locale = pathname.split("/")[1];

  const finalLocale = locales.includes(locale) ? locale : defaultLocale;

  response.cookies.set("locale", finalLocale, {
    maxAge: 60 * 60 * 24 * 7,
    path: "/",
    sameSite: "strict",
  });

  return response;
}

export const config = {
  matcher: ["/", "/(en|es)/:path*"],
};

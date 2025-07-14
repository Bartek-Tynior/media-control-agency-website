// src/middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ["en", "nl"];
const defaultLocale = "en";

function getLocale(request: NextRequest): string {
  const acceptLang = request.headers.get("accept-language") || "";
  const preferredLang = acceptLang.split(",")[0].split("-")[0];
  return locales.includes(preferredLang) ? preferredLang : defaultLocale;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip static and API paths
  if (
    pathname.startsWith("/_next") ||
    pathname.includes(".") ||
    locales.some((locale) => pathname.startsWith(`/${locale}`))
  ) {
    return;
  }

  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};

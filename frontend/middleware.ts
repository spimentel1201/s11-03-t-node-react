import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  const pathName = request.nextUrl.pathname;

  if (pathName.match(/^\/historial(\/[^/]{0,23}|\/[^/]{25,})?$/)) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return response;

}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|icons).*)"],
};

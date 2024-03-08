import { type NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  let res = NextResponse.next({
    request: {
      headers: req.headers,
    },
  });

  return res;
}

export const config = {
  matcher:
    "/((?!api|assets|_next/static|_next/image|favicon.ico|sw.js|icons|images|site.webmanifest|manifest.json).*)",
};

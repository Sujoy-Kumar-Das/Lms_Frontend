/* eslint-disable @typescript-eslint/no-explicit-any */
import { jwtDecode } from "jwt-decode";
import { NextResponse, type NextRequest } from "next/server";

type Role = keyof typeof roleBasedPrivateRoutes;

const AuthRoutes = ["/login", "/register"];

const commonPrivateRoutes = ["/dashboard"];

const roleBasedPrivateRoutes = {
  STUDENT: [/^\/dashboard\/student/],
  ADMIN: [/^\/dashboard\/admin/],
};

const authKey = "accessToken";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const accessToken = request.cookies.get(authKey)?.value;

  if (!accessToken) {
    if (AuthRoutes.includes(pathname)) {
      return NextResponse.next();
    }
    const redirectUrl = new URL("/login", request.url);
    redirectUrl.searchParams.set("redirect", pathname);
    return NextResponse.redirect(redirectUrl);
  }

  if (accessToken && AuthRoutes.includes(pathname)) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  let decodedData: any = null;
  try {
    decodedData = jwtDecode(accessToken);
  } catch {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  const role = decodedData?.role
    ? (decodedData.role as string).toUpperCase()
    : null;

  if (commonPrivateRoutes.includes(pathname)) {
    return NextResponse.next();
  }

  if (role && roleBasedPrivateRoutes[role as Role]) {
    const routes = roleBasedPrivateRoutes[role as Role];
    if (routes.some((route) => pathname.match(route))) {
      return NextResponse.next();
    }
  }

  return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
  matcher: ["/login", "/register", "/dashboard/:path*"],
};

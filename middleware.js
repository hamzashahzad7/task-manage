import { NextRequest, NextResponse } from "next/server";

export function middleware(request) {
  const token = request.cookies.get("authToken")?.value;
  const role = request.cookies.get("role")?.value;
  const { pathname } = request.nextUrl;

  // Redirect to login if no token and trying to access dashboard
  if (!token && pathname.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/login", request.url)); // Redirect to login if no token
  }

  // Redirect authenticated users to their dashboard if they try to visit login/register
  if (token && (pathname === "/login" || pathname === "/register")) {
    if (role === "admin") {
      return NextResponse.redirect(new URL("/dashboard/admin", request.url)); // Redirect admin to admin dashboard
    } else if (role === "user") {
      return NextResponse.redirect(new URL("/dashboard/user", request.url)); // Redirect user to user dashboard
    }
  }

  return NextResponse.next(); // Allow normal flow for other routes
}

export const config = {
  matcher: ["/login", "/register", "/dashboard/:path*"], // Apply middleware to login, register, and dashboard routes
};

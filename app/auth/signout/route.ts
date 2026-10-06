import { NextResponse, type NextRequest } from "next/server";

// Sign-out is handled client-side via Firebase Auth's signOut().
// This route only redirects to the admin login on the current domain.
export async function POST(request: NextRequest) {
  return NextResponse.redirect(new URL("/admin/login", request.url), 303);
}

export async function GET(request: NextRequest) {
  return NextResponse.redirect(new URL("/admin/login", request.url));
}

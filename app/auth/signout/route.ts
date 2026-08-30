import { NextResponse } from "next/server";

// Sign-out is now handled client-side via Firebase Auth's signOut().
// This route is kept as a fallback redirect only.
export async function POST() {
  return NextResponse.redirect(new URL("/admin/login", process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "http://localhost:3000"));
}

export async function GET() {
  return NextResponse.redirect("http://localhost:3000/admin/login");
}

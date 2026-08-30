import { NextResponse } from "next/server";

// OAuth callback is no longer used — Firebase handles auth client-side.
// This route is kept as a safe fallback to avoid 404s on any stale links.
export async function GET() {
  return NextResponse.redirect("http://localhost:3000/admin/login");
}

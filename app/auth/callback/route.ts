import { NextResponse, type NextRequest } from "next/server";

// OAuth callback is no longer used — Firebase handles auth client-side.
// Kept so stale links land on the admin login of whichever domain is serving the site.
export async function GET(request: NextRequest) {
  return NextResponse.redirect(new URL("/admin/login", request.url));
}

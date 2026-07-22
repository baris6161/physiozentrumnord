import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Alte, grossgeschriebene Duda-URLs -> neue Kleinschreibung (301, Ranking-Erhalt).
// Exakter, case-sensitiver Abgleich, damit die Kleinschreibung NICHT auf sich
// selbst umgeleitet wird (das waere eine Redirect-Schleife).
const REDIRECTS: Record<string, string> = {
  "/Jobs": "/jobs",
  "/Krankengymnastik": "/krankengymnastik",
};

export function middleware(req: NextRequest) {
  const dest = REDIRECTS[req.nextUrl.pathname];
  if (dest) {
    const url = req.nextUrl.clone();
    url.pathname = dest;
    return NextResponse.redirect(url, 301);
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/Jobs", "/Krankengymnastik"],
};

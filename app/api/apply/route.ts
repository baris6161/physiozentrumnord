import { NextResponse } from "next/server";
import { brandedHtml, sendMail } from "@/lib/mail";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}));
    const {
      firstName,
      lastName,
      phone,
      availableFrom,
      consent,
      jobTitle,
      company,
    } = body ?? {};

    if (company) return NextResponse.json({ ok: true });

    if (!firstName || !lastName || !phone || !availableFrom || !consent) {
      return NextResponse.json(
        { ok: false, error: "Bitte fuellen Sie alle Pflichtfelder aus." },
        { status: 400 },
      );
    }

    const rows: Array<[string, string]> = [
      ["Stelle", jobTitle ? String(jobTitle) : "Initiativbewerbung"],
      ["Vorname", String(firstName)],
      ["Nachname", String(lastName)],
      ["Telefon", String(phone)],
      ["Verfügbar ab", String(availableFrom)],
    ];

    await sendMail({
      subject: `Neue Bewerbung: ${firstName} ${lastName}`,
      html: brandedHtml(
        "Neue Bewerbung über die Website",
        "Über das Bewerbungsformular ist eine neue Bewerbung eingegangen:",
        rows,
      ),
      text: `Neue Bewerbung\n\nStelle: ${
        jobTitle || "Initiativbewerbung"
      }\nName: ${firstName} ${lastName}\nTelefon: ${phone}\nVerfügbar ab: ${availableFrom}`,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("apply route error", err);
    return NextResponse.json(
      { ok: false, error: "Interner Fehler beim Versand." },
      { status: 500 },
    );
  }
}

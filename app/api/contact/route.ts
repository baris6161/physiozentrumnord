import { NextResponse } from "next/server";
import { brandedHtml, sendMail } from "@/lib/mail";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}));
    const { name, email, phone, message, consent, company } = body ?? {};

    // Honeypot: Bots fuellen dieses Feld aus
    if (company) return NextResponse.json({ ok: true });

    if (!name || !email || !message || !consent) {
      return NextResponse.json(
        { ok: false, error: "Bitte fuellen Sie alle Pflichtfelder aus." },
        { status: 400 },
      );
    }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(String(email))) {
      return NextResponse.json(
        { ok: false, error: "Bitte geben Sie eine gueltige E-Mail-Adresse an." },
        { status: 400 },
      );
    }

    const rows: Array<[string, string]> = [
      ["Name", String(name)],
      ["E-Mail", String(email)],
      ["Telefon", phone ? String(phone) : "nicht angegeben"],
      ["Nachricht", String(message)],
    ];

    await sendMail({
      subject: `Neue Terminanfrage von ${name}`,
      html: brandedHtml(
        "Neue Terminanfrage über das Kontaktformular",
        "Über das Kontaktformular ist eine neue Anfrage eingegangen:",
        rows,
      ),
      text: `Neue Terminanfrage\n\nName: ${name}\nE-Mail: ${email}\nTelefon: ${
        phone || "nicht angegeben"
      }\nNachricht:\n${message}`,
      replyTo: String(email),
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("contact route error", err);
    return NextResponse.json(
      { ok: false, error: "Interner Fehler beim Versand." },
      { status: 500 },
    );
  }
}

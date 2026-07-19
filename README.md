# Physiotherapie Zentrum Nord

Neue Website (Next.js App Router, TypeScript, Tailwind), direkt auf Vercel deploybar.
Ersetzt die alte Duda-Seite unter krankengymnastik-in-hannover.de. Slugs bleiben 1:1
erhalten, alte groß geschriebene URLs werden per 301 umgeleitet.

## Entwicklung

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # Produktionsbuild
npm run start    # Produktionsserver
```

## Umgebungsvariablen (Vercel)

Das Kontakt- und Bewerbungsformular versendet per SMTP über das Kundenpostfach
(Nodemailer). In Vercel unter **Settings → Environment Variables** setzen
(siehe `.env.example`):

| Variable | Beschreibung |
|----------|--------------|
| `SMTP_HOST` | SMTP-Server des Postfachs (z. B. `smtp.ionos.de`) |
| `SMTP_PORT` | `465` (SSL) oder `587` (STARTTLS) |
| `SMTP_SECURE` | `true` bei Port 465, `false` bei 587 |
| `SMTP_USER` | Postfach-Adresse, z. B. `info@krankengymnastik-in-hannover.de` |
| `SMTP_PASS` | Postfach-Passwort |
| `CONTACT_TO` | Empfänger der Formular-Mails (Standard: `SMTP_USER`) |
| `CONTACT_FROM` | Absender (Standard: `SMTP_USER`) |
| `NEXT_PUBLIC_SITE_URL` | `https://www.krankengymnastik-in-hannover.de` |

Ohne gesetzte SMTP-Variablen liefert das Formular eine saubere Fehlermeldung, statt
zu senden.

## Inhalte pflegen

- **Leistungen, Geräte, Öffnungszeiten, Jobs, Patienteninfos:** `lib/content.ts`
- **Kontaktdaten, Navigation, Social-Links:** `lib/site.ts`
- **Impressum, Datenschutz:** `lib/legal.ts`
- **Bilder:** `public/images/` (aus der Original-Sicherung, höchste Auflösung je Motiv)

## Struktur

- `app/` – Seiten (Home, 8 Leistungen, Patienteninfo, Jobs, Kontakt, Impressum,
  Datenschutz), API-Routen (`/api/contact`, `/api/apply`), `sitemap.ts`, `robots.ts`
- `components/` – Header, Footer, Formulare, Galerie, Karten, Reveal-Animationen usw.
- `lib/` – Inhalte, Konfiguration, Mail-Versand
- `reference/` – lokale Sicherung der alten Seite (nicht Teil des Deployments)

## Hinweise

- **Logo:** Aktuell wird ein sauberes typografisches Marken-Lockup verwendet
  (`components/Brand.tsx`). Die gelieferte Logo-Datei war eine weiße Wortmarke auf
  hellem Grund (auf weißem Header unsichtbar). Sobald eine saubere Logo-Datei
  vorliegt (idealerweise SVG oder freigestelltes PNG mit dunklen/farbigen Konturen),
  kann sie dort eingesetzt werden.
- **Datenschutz:** Der Text stammt aus der alten Seite und nennt Cookies, Google
  Analytics und extern geladene Google Web Fonts. Die neue Seite ist cookielos
  (Vercel Web Analytics), hostet Schriften selbst und schaltet keine Werbung. Der Text
  sollte durch die Praxis bzw. deren Datenschutzbeauftragten an das neue Setup
  angepasst werden.

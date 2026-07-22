import { site, hours } from "@/lib/site";
import { container, eyebrow } from "@/lib/ui";
import Reveal from "./Reveal";
import ContactForm from "./ContactForm";
import OsmMap from "./OsmMap";
import { Pin, Phone, Mail } from "./Icons";

/**
 * Kontaktblock (Infos, Oeffnungszeiten, Formular, Karte).
 * variant "section" = als Abschnitt unten auf der Startseite (H2, Anker #kontakt),
 * variant "page"    = als eigenstaendige /kontakt-Seite (H1).
 */
export default function ContactSection({
  id,
  variant = "section",
}: {
  id?: string;
  variant?: "page" | "section";
}) {
  const Title = variant === "page" ? "h1" : "h2";
  const titleClass =
    variant === "page"
      ? "text-[clamp(2.2rem,4vw,3.2rem)] font-extrabold"
      : "text-[clamp(2rem,3.6vw,3rem)]";

  return (
    <section id={id} className="bg-paper">
      <div className={`${container} py-16 md:py-24`}>
        <Reveal>
          <span className={eyebrow}>Kontakt</span>
          <Title className={titleClass}>Ihr Kontakt zu uns</Title>
          <p className="mt-4 max-w-[46ch] text-[1.08rem] text-muted">
            Haben Sie Fragen oder möchten Sie einen Termin vereinbaren? Unser Team ist
            gerne für Sie da.
          </p>
        </Reveal>

        <div className="mt-9 flex flex-wrap gap-9 md:gap-14">
          {/* Kontaktdaten */}
          <div className="min-w-[290px] flex-1 basis-[340px]">
            <Reveal>
              <div className="flex flex-col">
                <a
                  href={site.mapsHref}
                  target="_blank"
                  rel="noopener"
                  className="flex gap-3.5 border-b border-line py-4"
                >
                  <Pin className="h-6 w-6 flex-shrink-0 text-greenDark" />
                  <span>
                    <span className="block font-bold text-ink">
                      {site.address.street}, {site.address.zip} {site.address.city}
                    </span>
                    <span className="text-[14.5px] text-muted">
                      Hannover / {site.address.district}
                    </span>
                  </span>
                </a>
                <a href={site.phoneHref} className="flex gap-3.5 border-b border-line py-4">
                  <Phone className="h-6 w-6 flex-shrink-0 text-greenDark" />
                  <span>
                    <span className="block font-bold text-ink">{site.phoneFormal}</span>
                    <span className="text-[14.5px] text-muted">
                      Mo bis Do 8 bis 20, Fr 8 bis 14 Uhr
                    </span>
                  </span>
                </a>
                <a href={site.emailHref} className="flex gap-3.5 py-4">
                  <Mail className="h-6 w-6 flex-shrink-0 text-greenDark" />
                  <span className="break-words font-bold text-ink">{site.email}</span>
                </a>
              </div>

              <div className="mt-5 rounded-2xl border border-line bg-sand p-5">
                <div className="mb-3 font-bold">Öffnungszeiten</div>
                {hours.map((h) => (
                  <div
                    key={h.d}
                    className="flex justify-between border-b border-line py-1.5 text-[15px] text-ink2 last:border-0"
                  >
                    <span className="text-muted">{h.d}</span>
                    <span className="font-semibold">{h.t}</span>
                  </div>
                ))}
              </div>

              <div className="mt-5">
                <OsmMap />
              </div>
            </Reveal>
          </div>

          {/* Formular */}
          <div className="min-w-[290px] flex-1 basis-[360px]">
            <Reveal delay={80}>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

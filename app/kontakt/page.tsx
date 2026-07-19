import type { Metadata } from "next";
import { site, hours } from "@/lib/site";
import { container, eyebrow } from "@/lib/ui";
import Reveal from "@/components/Reveal";
import BackToHome from "@/components/BackToHome";
import ContactForm from "@/components/ContactForm";
import OsmMap from "@/components/OsmMap";
import { Pin, Phone, Mail } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Kontakt | Physiotherapie Zentrum Nord Hannover",
  description:
    "So erreichen Sie das Physiotherapie Zentrum Nord in der Voßstr. 1 in Hannover List. Termine nach Vereinbarung unter 0511 713 03 044.",
  alternates: { canonical: "/kontakt" },
};

export default function Page() {
  return (
    <div className="bg-paper">
      <div className="pt-1">
        <BackToHome />
      </div>
      <div className={`${container} py-6 md:py-10`}>
        <Reveal>
          <span className={eyebrow}>Kontakt</span>
          <h1 className="text-[clamp(2.2rem,4vw,3.2rem)] font-extrabold">
            Ihr Kontakt zu uns
          </h1>
          <p className="mt-4 max-w-[46ch] text-[1.08rem] text-muted">
            Haben Sie Fragen oder möchten Sie einen Termin vereinbaren? Unser Team ist
            gerne für Sie da.
          </p>
        </Reveal>

        <div className="mt-9 flex flex-wrap gap-9 pb-16 md:gap-14 md:pb-24">
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
    </div>
  );
}

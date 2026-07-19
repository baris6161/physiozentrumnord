import type { Metadata } from "next";
import { site } from "@/lib/site";
import { impressum } from "@/lib/legal";
import { container, eyebrow } from "@/lib/ui";
import Reveal from "@/components/Reveal";
import BackToHome from "@/components/BackToHome";

export const metadata: Metadata = {
  title: "Impressum | Physiotherapie Zentrum Nord",
  description:
    "Impressum des Physiotherapie Zentrum Nord, Inhaber Tareck Fares, Voßstr. 1, 30161 Hannover.",
  alternates: { canonical: "/impressum" },
};

export default function Page() {
  return (
    <div className="bg-paper">
      <div className="pt-1">
        <BackToHome />
      </div>
      <div className={`${container} max-w-[820px] pb-16 pt-4 md:pb-24`}>
        <Reveal>
          <span className={eyebrow}>Rechtliches</span>
          <h1 className="text-[clamp(2.2rem,4vw,3.2rem)] font-extrabold">Impressum</h1>
          <p className="mt-3 text-muted">{impressum.intro}</p>
        </Reveal>

        <Reveal delay={60}>
          <div className="mt-8 rounded-card border border-line bg-sand p-6 md:p-8">
            <dl className="grid gap-5 sm:grid-cols-2">
              <div>
                <dt className="text-[13px] font-bold uppercase tracking-[0.06em] text-greenDark">
                  Verantwortlich
                </dt>
                <dd className="mt-1.5 font-semibold text-ink">{impressum.responsible}</dd>
              </div>
              <div>
                <dt className="text-[13px] font-bold uppercase tracking-[0.06em] text-greenDark">
                  Kontakt
                </dt>
                <dd className="mt-1.5 text-ink">
                  {impressum.contactLines.map((l) => (
                    <span key={l} className="block">
                      {l}
                    </span>
                  ))}
                  <a href={site.phoneHref} className="mt-1 block font-semibold hover:text-greenDark">
                    {site.phoneFormal}
                  </a>
                  <a href={site.emailHref} className="block break-words font-semibold hover:text-greenDark">
                    {site.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-[13px] font-bold uppercase tracking-[0.06em] text-greenDark">
                  Steuernummer
                </dt>
                <dd className="mt-1.5 font-semibold text-ink">{impressum.taxId}</dd>
              </div>
            </dl>
          </div>
        </Reveal>

        <div className="mt-10 flex flex-col gap-6">
          {impressum.liability.map((b, i) => (
            <Reveal key={b.h} delay={i * 50}>
              <div>
                <h2 className="text-[1.25rem]">{b.h}</h2>
                <p className="mt-2 text-[16px] leading-[1.7] text-ink2">{b.p}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}

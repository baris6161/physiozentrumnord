import Link from "next/link";
import Image from "next/image";
import { services, devices, steps, heroImage } from "@/lib/content";
import { site } from "@/lib/site";
import { container, eyebrow, btnPrimary, btnSecondary, focusClass } from "@/lib/ui";
import Reveal from "@/components/Reveal";
import HashScroll from "@/components/HashScroll";
import ServiceCard from "@/components/ServiceCard";
import DeviceCard from "@/components/DeviceCard";
import Gallery from "@/components/Gallery";
import ContactSection from "@/components/ContactSection";
import { ArrowRight, Phone, Spark } from "@/components/Icons";

export default function Home() {
  return (
    <>
      <HashScroll />

      {/* HERO */}
      <section className="overflow-hidden bg-gradient-to-b from-paper to-sand">
        <div
          className={`${container} flex flex-wrap items-center gap-7 py-8 md:gap-16 md:py-20`}
        >
          <div className="min-w-[280px] flex-1 basis-[440px]">
            <Reveal>
              <div className="mb-4 inline-flex items-center gap-2.5 rounded-full border border-greenLine bg-greenTint px-3.5 py-1.5 text-[13px] font-bold tracking-[0.02em] text-greenDark">
                <span className="h-2 w-2 animate-pulseDot rounded-full bg-green" />
                Praxis in Hannover List
              </div>
              <h1 className="text-[clamp(2.15rem,8vw,4.6rem)] font-extrabold text-ink">
                Beweglich bleiben,
                <br />
                <span className="text-green">schmerzfrei leben.</span>
              </h1>
              <p className="mt-4 max-w-[42ch] text-[clamp(1rem,1.4vw,1.3rem)] text-muted">
                Physiotherapie, Krankengymnastik und Reha in Hannover. Mit
                Spezialgeräten wie Hochleistungslaser, Stoßwelle und HydroJet, die Sie
                in dieser Kombination sonst kaum in Hannover finden.
              </p>
              {/* Auf Mobile uebernimmt die feste Anrufen/Termin-Leiste unten,
                  daher die Hero-CTAs erst ab Desktop (lg) zeigen. */}
              <div className="mt-6 hidden flex-wrap items-center gap-3 lg:flex">
                <Link href="/#kontakt" className={btnPrimary}>
                  Termin vereinbaren <ArrowRight className="h-4 w-4" />
                </Link>
                <a href={site.phoneHref} className={btnSecondary}>
                  <Phone className="h-5 w-5 text-green" /> {site.phoneDisplay}
                </a>
              </div>
              <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-[14px] font-semibold text-muted">
                <span>Kasse und Selbstzahler</span>
                <span className="text-line">|</span>
                <span>Mo bis Do 8 bis 20 Uhr</span>
                <span className="text-line">|</span>
                <span>Terminpraxis</span>
              </div>
            </Reveal>
          </div>

          <div className="min-w-[300px] flex-1 basis-[420px]">
            <Reveal delay={90}>
              <div className="relative">
                <div className="relative aspect-[4/3.1] overflow-hidden rounded-card bg-sand2 shadow-lg2">
                  <Image
                    src={heroImage.img}
                    alt={heroImage.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 560px"
                    priority
                    className="object-cover object-left-top"
                  />
                </div>
                <div className="absolute -bottom-5 left-2 flex max-w-[270px] items-center gap-3.5 rounded-2xl border border-line bg-white p-4 shadow-md2">
                  <span className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-xl bg-greenTint text-greenDark">
                    <Spark className="h-5 w-5" />
                  </span>
                  <span className="text-[14px] font-semibold leading-[1.35]">
                    Laser, Stoßwelle und HydroJet.{" "}
                    <span className="text-greenDark">Exklusiv in Hannover.</span>
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* USP-STRIP */}
      <section className="bg-ink text-white">
        <div
          className={`${container} flex flex-wrap items-center justify-between gap-7 py-8 md:py-11`}
        >
          <p className="max-w-[60ch] font-heading text-[clamp(1.15rem,2vw,1.6rem)] font-semibold leading-tight">
            Spezialgeräte, die es in Hannover sonst kaum gibt.{" "}
            <span className="text-[#8fd6a3]">
              Medizinisch führend, viele davon als Selbstzahler Leistung.
            </span>
          </p>
          <Link
            href="/#spezialgeraete"
            className="inline-flex flex-shrink-0 items-center gap-2 rounded-btn bg-white px-5 py-3.5 text-[15px] font-bold text-ink transition-colors hover:bg-green hover:text-white"
          >
            Geräte entdecken <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* LEISTUNGEN */}
      <section id="leistungen" className="bg-paper">
        <div className={`${container} py-16 md:py-24`}>
          <Reveal>
            <div className="mb-9 max-w-[640px] md:mb-[52px]">
              <span className={eyebrow}>Unsere Leistungen</span>
              <h2 className="text-[clamp(2rem,3.6vw,3rem)]">
                Das gesamte Spektrum moderner Physiotherapie
              </h2>
              <p className="mt-4 text-[1.1rem] text-muted">
                Von der klassischen Krankengymnastik bis zur gerätegestützten
                Spezialtherapie. Auf Rezept und als Selbstzahler.
              </p>
            </div>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 4) * 70} className="h-full">
                <ServiceCard service={s} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SPEZIALGERÄTE */}
      <section id="spezialgeraete" className="bg-sand">
        <div className={`${container} py-16 md:py-24`}>
          <Reveal>
            <div className="mb-9 max-w-[640px] md:mb-[52px]">
              <span className={eyebrow}>Spezialgeräte und Selbstzahler</span>
              <h2 className="text-[clamp(2rem,3.6vw,3rem)]">
                Ausstattung auf Klinik-Niveau
              </h2>
              <p className="mt-4 text-[1.1rem] text-muted">
                Hochwertige Therapiegeräte, viele davon als Selbstzahler Leistung. Für
                Behandlungen, die anderswo in Hannover kaum verfügbar sind.
              </p>
            </div>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {devices.map((d, i) => (
              <Reveal key={d.name} delay={(i % 4) * 70} className="h-full">
                <DeviceCard device={d} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PRAXIS-GALERIE */}
      <section className="bg-paper">
        <div className={`${container} py-16 md:py-24`}>
          <Reveal>
            <div className="mb-8 max-w-[640px]">
              <span className={eyebrow}>Praxis-Einblick</span>
              <h2 className="text-[clamp(2rem,3.6vw,3rem)]">
                Helle Räume, moderne Technik
              </h2>
            </div>
          </Reveal>
          <Reveal delay={60}>
            <Gallery />
          </Reveal>
        </div>
      </section>

      {/* ABLAUF + CTA */}
      <section className="bg-sand">
        <div className={`${container} py-16 md:py-[88px]`}>
          <Reveal>
            <div className="mb-10 max-w-[640px]">
              <span className={eyebrow}>So einfach geht es</span>
              <h2 className="text-[clamp(2rem,3.6vw,3rem)]">
                In drei Schritten zum Termin
              </h2>
            </div>
          </Reveal>
          <div className="mb-11 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {steps.map((st, i) => (
              <Reveal key={st.n} delay={i * 80} className="h-full">
                <div className="h-full rounded-card border border-line bg-white p-6 shadow-sm2">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-green font-heading text-[19px] font-extrabold text-white">
                    {st.n}
                  </div>
                  <h3 className="mt-[18px] text-[1.25rem]">{st.t}</h3>
                  <p className="mt-2.5 text-[15px] leading-[1.55] text-muted">
                    {st.d}
                    {st.n === "1" && (
                      <>
                        {" "}
                        <Link
                          href="/#kontakt"
                          className="font-semibold text-greenDark underline underline-offset-2 hover:text-ink"
                        >
                          über das Formular
                        </Link>
                        .
                      </>
                    )}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={60}>
            <div className="flex flex-wrap items-center justify-between gap-6 rounded-card bg-ink p-8 text-white md:p-12">
              <div className="max-w-[44ch]">
                <h3 className="text-[clamp(1.5rem,2.4vw,2rem)] text-white">
                  Rufen Sie uns an oder schreiben Sie uns.
                </h3>
                <p className="mt-2.5 text-[1.05rem] text-white/70">
                  Wir sind eine Terminpraxis. So vermeiden Sie lange Wartezeiten.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href={site.phoneHref}
                  className="inline-flex items-center gap-2 rounded-btn bg-green px-6 py-3.5 text-[16px] font-bold text-white transition-colors hover:bg-greenDark"
                >
                  <Phone className="h-5 w-5" /> {site.phoneDisplay}
                </a>
                <Link
                  href="/#kontakt"
                  className="inline-flex items-center gap-2 rounded-btn border border-white/30 px-6 py-3.5 text-[16px] font-bold text-white transition-colors hover:border-white"
                >
                  Kontaktformular
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* KONTAKT (Section unten auf der Startseite, wie im Design) */}
      <ContactSection id="kontakt" />
    </>
  );
}

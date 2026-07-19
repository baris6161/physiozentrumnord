import Link from "next/link";
import Image from "next/image";
import { type Service, serviceBySlug } from "@/lib/content";
import { site } from "@/lib/site";
import { container, eyebrow, btnPrimary, btnSecondary, focusClass } from "@/lib/ui";
import Reveal from "./Reveal";
import { ArrowRight, Check, Spark } from "./Icons";

export default function ServiceDetail({ service }: { service: Service }) {
  const heroImg =
    service.fit === "contain"
      ? "object-contain bg-white p-4"
      : `object-cover ${focusClass(service.focus)}`;
  const related = service.related
    .map((slug) => serviceBySlug(slug))
    .filter((s): s is Service => Boolean(s));

  return (
    <>
      {/* Hero */}
      <section className="bg-sand">
        <div className={`${container} pt-2`}>
          <nav className="flex items-center gap-2 py-3 text-[14px] text-muted">
            <Link href="/" className="hover:text-greenDark">
              Home
            </Link>
            <span className="opacity-60">/</span>
            <Link href="/#leistungen" className="hover:text-greenDark">
              Leistungen
            </Link>
            <span className="opacity-60">/</span>
            <span className="font-semibold text-ink">{service.name}</span>
          </nav>
        </div>
        <div
          className={`${container} flex flex-wrap items-center gap-8 pb-12 pt-4 md:gap-14 md:pb-16`}
        >
          <div className="min-w-[290px] flex-1 basis-[380px]">
            <Reveal>
              <span className="mb-4 inline-block rounded-full border border-greenLine bg-greenTint px-3 py-1.5 text-[13px] font-bold text-greenDark">
                {service.cat}
              </span>
              <h1 className="text-[clamp(2.3rem,4.6vw,3.6rem)] font-extrabold">
                {service.name}
              </h1>
              <p className="mt-5 max-w-[42ch] text-[clamp(1.1rem,1.6vw,1.3rem)] text-ink2">
                {service.lead}
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link href="/kontakt" className={btnPrimary}>
                  Termin vereinbaren <ArrowRight className="h-4 w-4" />
                </Link>
                <a href={site.phoneHref} className={btnSecondary}>
                  {site.phoneDisplay}
                </a>
              </div>
            </Reveal>
          </div>
          <div className="min-w-[290px] flex-1 basis-[360px]">
            <Reveal delay={80}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-card bg-sand2 shadow-lg2">
                <Image
                  src={service.img}
                  alt={service.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 560px"
                  className={heroImg}
                  priority
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Behandlung + Nutzen */}
      <section className="bg-paper">
        <div className={`${container} flex flex-wrap gap-8 py-14 md:gap-16 md:py-20`}>
          <div className="min-w-[300px] flex-[2] basis-[440px]">
            <Reveal>
              <h2 className="mb-5 text-[clamp(1.6rem,2.6vw,2.1rem)]">
                Behandlung und Wirkung
              </h2>
              <div className="flex flex-col gap-4 text-[1.08rem] leading-[1.72] text-ink2">
                {service.body.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </Reveal>
            {service.device && (
              <Reveal delay={60}>
                <div className="mt-7 flex items-start gap-4 rounded-card border border-greenLine bg-greenTint px-6 py-5">
                  <span className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-xl bg-green text-white">
                    <Spark className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="text-[13px] font-bold uppercase tracking-[0.05em] text-greenDark">
                      Eingesetztes Spezialgerät
                    </div>
                    <p className="mt-1.5 font-semibold text-ink">{service.device}</p>
                  </div>
                </div>
              </Reveal>
            )}
          </div>

          <aside className="min-w-[260px] flex-1 basis-[280px]">
            <Reveal delay={80}>
              <div className="rounded-card border border-line bg-sand p-6">
                <h3 className="mb-4 text-[1.15rem]">Nutzen und Indikationen</h3>
                <div className="flex flex-col gap-3">
                  {service.benefits.map((b, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-[15px] leading-[1.45]">
                      <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-green" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </aside>
        </div>
      </section>

      {/* Verwandte Leistungen */}
      <section className="bg-sand">
        <div className={`${container} py-14 md:py-16`}>
          <Reveal>
            <h2 className="mb-7 text-[clamp(1.5rem,2.4vw,2rem)]">Verwandte Leistungen</h2>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((r, i) => (
              <Reveal key={r.slug} delay={i * 70}>
                <Link
                  href={`/${r.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-card border border-line bg-white shadow-sm2 transition duration-200 hover:-translate-y-1 hover:shadow-md2"
                >
                  <div className="relative aspect-[16/9] overflow-hidden bg-sand2">
                    <Image
                      src={r.img}
                      alt={r.name}
                      fill
                      sizes="(max-width: 640px) 100vw, 33vw"
                      className={
                        r.fit === "contain"
                          ? "object-contain bg-white p-3"
                          : `object-cover ${focusClass(r.focus)} transition-transform duration-300 group-hover:scale-[1.04]`
                      }
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-[1.15rem]">{r.name}</h3>
                    <span className="mt-2.5 inline-flex items-center gap-1 text-[14px] font-bold text-greenDark">
                      Ansehen <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

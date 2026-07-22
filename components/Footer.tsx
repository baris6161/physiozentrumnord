import Link from "next/link";
import { site } from "@/lib/site";
import { services } from "@/lib/content";
import Brand from "./Brand";

const col1 = services.slice(0, 4);
const col2 = services.slice(4);

export default function Footer() {
  return (
    <footer className="bg-ink text-white/70">
      <div className="mx-auto flex max-w-container flex-wrap justify-between gap-9 px-6 pb-8 pt-14">
        {/* Marke + Kontakt */}
        <div className="min-w-[230px] flex-1 basis-[260px]">
          <Link href="/" className="mb-4 inline-flex">
            <Brand variant="dark" className="h-9" />
          </Link>
          <p className="text-[15px] leading-7">
            <a
              href={site.mapsHref}
              target="_blank"
              rel="noopener"
              className="text-white/70 transition-colors hover:text-white"
            >
              {site.address.street}
              <br />
              {site.address.zip} {site.address.city} / {site.address.district}
            </a>
            <br />
            <a href={site.phoneHref} className="text-white transition-colors hover:text-green">
              {site.phoneFormal}
            </a>
            <br />
            <a
              href={site.emailHref}
              className="break-words text-white transition-colors hover:text-green"
            >
              {site.email}
            </a>
          </p>
        </div>

        {/* Leistungen */}
        <div>
          <div className="mb-3.5 text-[14px] font-bold text-white">Leistungen</div>
          <div className="flex flex-col gap-2.5 text-[14.5px]">
            {col1.map((s) => (
              <Link
                key={s.slug}
                href={`/${s.slug}`}
                className="text-white/70 transition-colors hover:text-white"
              >
                {s.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Weitere Leistungen */}
        <div>
          <div className="mb-3.5 text-[14px] font-bold text-white">Weitere</div>
          <div className="flex flex-col gap-2.5 text-[14.5px]">
            {col2.map((s) => (
              <Link
                key={s.slug}
                href={`/${s.slug}`}
                className="text-white/70 transition-colors hover:text-white"
              >
                {s.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Praxis */}
        <div>
          <div className="mb-3.5 text-[14px] font-bold text-white">Praxis</div>
          <div className="flex flex-col gap-2.5 text-[14.5px]">
            <Link href="/kontakt" className="text-white/70 transition-colors hover:text-white">
              Kontakt
            </Link>
            <Link
              href="/patienteninformation"
              className="text-white/70 transition-colors hover:text-white"
            >
              Patienteninfo
            </Link>
            <Link href="/jobs" className="text-white/70 transition-colors hover:text-white">
              Jobs
            </Link>
            <Link href="/impressum" className="text-white/70 transition-colors hover:text-white">
              Impressum
            </Link>
            <Link
              href="/datenschutzbestimmungen-nach-dsgvo1"
              className="text-white/70 transition-colors hover:text-white"
            >
              Datenschutz
            </Link>
          </div>
        </div>

        {/* Social */}
        <div>
          <div className="mb-3.5 text-[14px] font-bold text-white">Folgen</div>
          <div className="flex flex-col gap-2.5 text-[14.5px]">
            <a
              href={site.social.facebook}
              target="_blank"
              rel="noopener"
              className="text-white/70 transition-colors hover:text-white"
            >
              Facebook
            </a>
            <a
              href={site.social.instagram}
              target="_blank"
              rel="noopener"
              className="text-white/70 transition-colors hover:text-white"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-container px-6 text-[13px] text-white/50 [padding-block:1.1rem]">
          © {site.name}. Alle Rechte vorbehalten. Inhaber: {site.owner}.
        </div>
      </div>
    </footer>
  );
}

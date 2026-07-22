"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/lib/site";
import { ArrowRight } from "./Icons";
import Brand from "./Brand";

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  // Menue bei Routenwechsel schliessen
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Body-Scroll sperren, wenn das Mobilmenue offen ist
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  function scrollToId(id: string) {
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - 88;
    window.scrollTo({ top: y, behavior: "smooth" });
  }

  function handleNav(href: string, e: React.MouseEvent) {
    setMenuOpen(false);
    if (href === "/") {
      if (pathname === "/") {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      return;
    }
    if (href.startsWith("/#")) {
      const id = href.slice(2);
      if (pathname === "/") {
        e.preventDefault();
        history.replaceState(null, "", href);
        scrollToId(id);
      }
      // von Unterseiten: Link navigiert zu /#id, HashScroll uebernimmt
    }
  }

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/90 backdrop-blur-md backdrop-saturate-150">
      {/* Recruiting-Banner */}
      <div className="bg-green text-white">
        <div className="mx-auto flex max-w-container flex-wrap items-center justify-center gap-x-4 gap-y-1 px-6 py-2 text-center text-[13.5px] font-semibold">
          <span className="opacity-95">
            Wir suchen Verstärkung. Werde Teil unseres Teams.
          </span>
          <Link
            href="/jobs"
            className="font-bold underline underline-offset-[3px]"
          >
            Jetzt bewerben <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>

      <div className="mx-auto flex max-w-container items-center gap-5 px-6 py-3">
        <Link
          href="/"
          onClick={(e) => handleNav("/", e)}
          aria-label={site.name}
          className="flex flex-shrink-0 items-center"
        >
          <Brand className="h-9 sm:h-10" />
        </Link>

        {/* Desktop-Navigation */}
        <nav className="ml-auto hidden items-center gap-1 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={(e) => handleNav(item.href, e)}
              className="rounded-lg px-3 py-2.5 text-[15px] font-semibold text-ink transition-colors hover:bg-sand"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/#kontakt"
            onClick={(e) => handleNav("/#kontakt", e)}
            className="ml-2 inline-flex items-center gap-2 rounded-btn bg-green px-4 py-2.5 text-[14.5px] font-bold text-white shadow-sm2 transition-colors hover:bg-greenDark animate-ctaGlow"
          >
            Termin vereinbaren <ArrowRight className="h-4 w-4" />
          </Link>
        </nav>

        {/* Mobile-Hamburger */}
        <button
          type="button"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}
          aria-expanded={menuOpen}
          className="relative ml-auto h-11 w-11 rounded-xl border border-line bg-white lg:hidden"
        >
          <span
            className="absolute left-1/2 top-1/2 block h-[2.5px] w-[22px] rounded bg-ink transition-all duration-300"
            style={{
              transform: menuOpen
                ? "translate(-50%,-50%) rotate(45deg)"
                : "translate(-50%,-8px)",
            }}
          />
          <span
            className="absolute left-1/2 top-1/2 block h-[2.5px] w-[22px] -translate-x-1/2 -translate-y-1/2 rounded bg-ink transition-all duration-200"
            style={{ opacity: menuOpen ? 0 : 1 }}
          />
          <span
            className="absolute left-1/2 top-1/2 block h-[2.5px] w-[22px] rounded bg-ink transition-all duration-300"
            style={{
              transform: menuOpen
                ? "translate(-50%,-50%) rotate(-45deg)"
                : "translate(-50%,6px)",
            }}
          />
        </button>
      </div>

      {/* Mobile-Menue */}
      {menuOpen && (
        <div className="menu-panel border-t border-line bg-white px-6 pb-6 pt-2 lg:hidden">
          <nav className="flex flex-col">
            {nav.map((item, i) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={(e) => handleNav(item.href, e)}
                className="menu-item border-b border-line py-3.5 text-[18px] font-semibold text-ink"
                style={{ animationDelay: `${i * 45}ms` }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <a
            href={site.phoneHref}
            className="menu-item mt-4 flex items-center justify-center gap-2 rounded-btn bg-green px-4 py-4 text-[16px] font-bold text-white"
            style={{ animationDelay: `${nav.length * 45}ms` }}
          >
            Termin vereinbaren · {site.phoneDisplay}
          </a>
        </div>
      )}
    </header>
  );
}

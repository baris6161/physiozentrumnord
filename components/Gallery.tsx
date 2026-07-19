"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { gallery } from "@/lib/content";

export default function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setActive(null);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = active !== null ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [active]);

  return (
    <>
      <div className="grid grid-cols-2 gap-3.5 sm:grid-cols-3 lg:grid-cols-4">
        {gallery.map((g, i) => (
          <button
            key={g.img}
            type="button"
            onClick={() => setActive(i)}
            aria-label={`${g.alt} vergrößern`}
            className="group relative aspect-[4/3] cursor-zoom-in overflow-hidden rounded-2xl bg-sand2 shadow-sm2"
          >
            <Image
              src={g.img}
              alt={g.alt}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 280px"
              className="object-cover object-left-top transition-transform duration-300 group-hover:scale-105"
            />
          </button>
        ))}
      </div>

      {active !== null && (
        <div
          onClick={() => setActive(null)}
          className="fixed inset-0 z-[90] grid cursor-zoom-out place-items-center bg-ink/90 p-6"
          role="dialog"
          aria-modal="true"
          aria-label={gallery[active].alt}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={gallery[active].img}
            alt={gallery[active].alt}
            className="max-h-[88vh] max-w-full rounded-xl shadow-lg2"
          />
        </div>
      )}
    </>
  );
}

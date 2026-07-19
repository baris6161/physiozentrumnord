"use client";

import { useEffect } from "react";

const OFFSET = 88;

/**
 * Sorgt dafuer, dass ein Anker (z. B. /#leistungen) auch nach einem
 * Seitenwechsel von einer Unterseite sanft und mit Header-Offset angesprungen wird.
 */
export default function HashScroll() {
  useEffect(() => {
    function scrollToHash() {
      const id = window.location.hash.slice(1);
      if (!id) return;
      const el = document.getElementById(id);
      if (!el) return;
      const run = () => {
        const y = el.getBoundingClientRect().top + window.scrollY - OFFSET;
        window.scrollTo({ top: y, behavior: "smooth" });
      };
      // kurze Verzoegerung, damit das Layout nach der Navigation steht
      requestAnimationFrame(() => setTimeout(run, 60));
    }
    scrollToHash();
    window.addEventListener("hashchange", scrollToHash);
    return () => window.removeEventListener("hashchange", scrollToHash);
  }, []);

  return null;
}

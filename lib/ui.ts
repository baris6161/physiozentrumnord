// Gemeinsame, wiederkehrende Klassenbausteine.

export const container = "mx-auto w-full max-w-container px-6";

export const eyebrow =
  "mb-3 inline-block text-[13px] font-bold uppercase tracking-[0.14em] text-green";

export const btnPrimary =
  "inline-flex items-center justify-center gap-2 rounded-btn bg-green px-6 py-4 text-[16px] font-bold text-white shadow-md2 transition-colors hover:bg-greenDark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-greenDark";

export const btnSecondary =
  "inline-flex items-center justify-center gap-2 rounded-btn border border-line bg-white px-5 py-4 text-[16px] font-bold text-ink transition-colors hover:border-green hover:text-greenDark";

// Fokus-Position fuer Fotos mit Logo oben links (Wasserzeichen nie anschneiden)
export const focusClass = (focus: "left-top" | "center") =>
  focus === "left-top" ? "object-left-top" : "object-center";

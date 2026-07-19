/**
 * Marken-Lockup (Wortmarke + Kreuz-Signet) in Marken-Typo und -Farben.
 * Rendert gestochen scharf auf hellen und dunklen Flaechen.
 * Hinweis: ersetzt die gelieferte Logo-Datei, die als weisse Wortmarke auf
 * hellem Grund unsichtbar und beim Transfer beschaedigt war. Sobald eine
 * saubere Logo-Datei (idealerweise SVG oder freigestelltes PNG) vorliegt,
 * kann sie hier eingesetzt werden.
 */
export default function Brand({
  variant = "light",
  className = "",
}: {
  variant?: "light" | "dark";
  className?: string;
}) {
  const main = variant === "dark" ? "text-white" : "text-ink";
  const eyebrow = variant === "dark" ? "text-white/55" : "text-muted";

  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <span className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-[11px] bg-green shadow-sm2">
        <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
          <rect x="10" y="4" width="4" height="16" rx="1.4" fill="#fff" />
          <rect x="4" y="10" width="16" height="4" rx="1.4" fill="#fff" />
        </svg>
      </span>
      <span className="leading-none">
        <span
          className={`block font-heading text-[10.5px] font-semibold uppercase tracking-[0.22em] ${eyebrow}`}
        >
          Physiotherapie
        </span>
        <span
          className={`mt-1 block font-heading text-[17px] font-extrabold leading-none tracking-tight ${main}`}
        >
          Zentrum <span className="text-green">Nord</span>
        </span>
      </span>
    </span>
  );
}

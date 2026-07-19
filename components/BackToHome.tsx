import Link from "next/link";
import { container } from "@/lib/ui";

/** "Zurueck zur Startseite" oben links auf allen Unterseiten. */
export default function BackToHome({ light = false }: { light?: boolean }) {
  return (
    <div className={container}>
      <Link
        href="/"
        className={`inline-flex items-center gap-2 py-4 text-[14.5px] font-semibold transition-colors ${
          light
            ? "text-white/75 hover:text-white"
            : "text-muted hover:text-greenDark"
        }`}
      >
        <span aria-hidden="true">&larr;</span> Zurück zur Startseite
      </Link>
    </div>
  );
}

import Link from "next/link";
import { site } from "@/lib/site";
import { Phone } from "./Icons";

/** Feste Aktionsleiste am unteren Rand, nur auf Mobilgeraeten sichtbar. */
export default function MobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex gap-2.5 border-t border-line bg-white/95 p-2.5 backdrop-blur lg:hidden [box-shadow:0_-8px_24px_-12px_rgba(26,26,26,.25)] pb-[calc(0.625rem+env(safe-area-inset-bottom))]">
      <a
        href={site.phoneHref}
        className="flex flex-1 items-center justify-center gap-2 rounded-btn border border-line bg-white py-3.5 text-[15px] font-bold text-ink"
      >
        <Phone className="h-5 w-5 text-green" /> Anrufen
      </a>
      <Link
        href="/kontakt"
        className="flex flex-1 items-center justify-center rounded-btn bg-green py-3.5 text-[15px] font-bold text-white"
      >
        Termin
      </Link>
    </div>
  );
}

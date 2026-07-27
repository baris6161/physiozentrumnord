import Link from "next/link";
import Image from "next/image";
import type { Device } from "@/lib/content";
import { ArrowRight } from "./Icons";

/** Spezialgeraete-Karte. Einheitliche Bildbox (contain auf Weiss) => alle Karten gleich hoch. */
export default function DeviceCard({ device }: { device: Device }) {
  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-card border border-line bg-white shadow-sm2 transition duration-200 hover:-translate-y-1 hover:border-greenLine hover:shadow-md2">
      <Link
        href={`/${device.slug}`}
        aria-label={`${device.name} ansehen`}
        className="relative block aspect-[4/3] border-b border-line bg-white"
      >
        <Image
          src={device.img}
          alt={device.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 300px"
          className="object-contain p-4 transition-transform duration-300 group-hover:scale-[1.03]"
        />
        <span className="absolute right-3 top-3 rounded-full bg-ink px-2.5 py-1 text-[11px] font-bold tracking-[0.05em] text-white">
          EXKLUSIV IN HANNOVER
        </span>
      </Link>
      <div className="flex flex-1 flex-col p-6">
        <div className="text-[12.5px] font-bold uppercase tracking-[0.06em] text-greenDark">
          {device.tag}
        </div>
        <h3 className="mt-2 text-[1.45rem]">{device.name}</h3>
        <p className="mt-2.5 flex-1 text-[15px] leading-[1.55] text-muted">
          {device.desc}
        </p>
        <Link
          href={`/${device.slug}`}
          className="mt-4 inline-flex items-center gap-1 text-[14.5px] font-bold text-greenDark hover:text-ink"
        >
          Zur Behandlung <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}

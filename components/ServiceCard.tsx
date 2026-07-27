import Link from "next/link";
import Image from "next/image";
import type { Service } from "@/lib/content";
import { focusClass } from "@/lib/ui";
import { ArrowRight } from "./Icons";

export default function ServiceCard({ service }: { service: Service }) {
  const imgClass =
    service.fit === "contain"
      ? "object-contain bg-white p-4"
      : `object-cover ${focusClass(service.focus)}`;

  return (
    <Link
      href={`/${service.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-card border border-line bg-white shadow-sm2 transition duration-200 hover:-translate-y-1 hover:border-greenLine hover:shadow-md2"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-sand2">
        <Image
          src={service.img}
          alt={service.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 300px"
          className={`transition-transform duration-300 group-hover:scale-[1.04] ${imgClass}`}
        />
        <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[11.5px] font-bold text-greenDark shadow-sm2">
          {service.cat}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-[1.28rem]">{service.name}</h3>
        <p className="mt-2 flex-1 text-[14.8px] leading-[1.55] text-muted">
          {service.card}
        </p>
        <span className="mt-4 inline-flex items-center gap-1 text-[14.5px] font-bold text-greenDark">
          Mehr erfahren <ArrowRight className="h-4 w-4" />
        </span>
      </div>
    </Link>
  );
}

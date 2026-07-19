import type { Metadata } from "next";
import { datenschutz } from "@/lib/legal";
import { container, eyebrow } from "@/lib/ui";
import Reveal from "@/components/Reveal";
import BackToHome from "@/components/BackToHome";

export const metadata: Metadata = {
  title: "Datenschutz | Physiotherapie Zentrum Nord",
  description:
    "Datenschutzerklärung des Physiotherapie Zentrum Nord nach DSGVO. So gehen wir mit Ihren personenbezogenen Daten um.",
  alternates: { canonical: "/datenschutzbestimmungen-nach-dsgvo1" },
};

export default function Page() {
  return (
    <div className="bg-paper">
      <div className="pt-1">
        <BackToHome />
      </div>
      <div className={`${container} max-w-[820px] pb-16 pt-4 md:pb-24`}>
        <Reveal>
          <span className={eyebrow}>Rechtliches</span>
          <h1 className="text-[clamp(2.2rem,4vw,3.2rem)] font-extrabold">
            Datenschutzerklärung
          </h1>
          <p className="mt-3 text-muted">Nach DSGVO. Physiotherapie Zentrum Nord.</p>
        </Reveal>

        <div className="mt-8 flex flex-col gap-4">
          {datenschutz.map((block, i) => {
            if (block.type === "h") {
              return (
                <h2 key={i} className="mt-6 text-[1.35rem]">
                  {block.text}
                </h2>
              );
            }
            if (block.type === "list") {
              return (
                <ul key={i} className="flex list-disc flex-col gap-2 pl-5 text-[16px] leading-[1.7] text-ink2">
                  {block.items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
              );
            }
            return (
              <p key={i} className="text-[16px] leading-[1.7] text-ink2">
                {block.text}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
}

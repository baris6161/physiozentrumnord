import type { Metadata } from "next";
import Link from "next/link";
import { patient } from "@/lib/content";
import { container, eyebrow, btnPrimary } from "@/lib/ui";
import Reveal from "@/components/Reveal";
import BackToHome from "@/components/BackToHome";
import { ArrowRight } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Patienteninformation | Physiotherapie Zentrum Nord",
  description:
    "Wichtige Hinweise zu Terminen, Rezepten und Zuzahlung für Ihren Besuch im Physiotherapie Zentrum Nord in Hannover List.",
  alternates: { canonical: "/patienteninformation" },
};

export default function Page() {
  return (
    <div className="bg-paper">
      <div className="pt-1">
        <BackToHome />
      </div>
      <div className={`${container} max-w-[900px] pb-16 pt-4 md:pb-24`}>
        <Reveal>
          <span className={eyebrow}>Für Patienten</span>
          <h1 className="text-[clamp(2.2rem,4vw,3.2rem)] font-extrabold">
            Patienteninformation
          </h1>
          <p className="mt-4 max-w-[60ch] text-[1.12rem] text-muted">
            Ein paar Hinweise, die uns helfen, Ihren Besuch und den Behandlungsverlauf
            gut zu gestalten. Wir freuen uns auf eine angenehme Zusammenarbeit.
          </p>
        </Reveal>

        <div className="mt-9 flex flex-col gap-4">
          {patient.map((p, i) => (
            <Reveal key={p.t} delay={i * 60}>
              <div className="rounded-card border border-line bg-white p-6 shadow-sm2 md:px-7">
                <h2 className="text-[1.2rem] text-greenDark">{p.t}</h2>
                <p className="mt-2.5 text-[16px] leading-[1.65] text-ink2">{p.d}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={80}>
          <div className="mt-9">
            <Link href="/#kontakt" className={btnPrimary}>
              Termin vereinbaren <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </div>
  );
}

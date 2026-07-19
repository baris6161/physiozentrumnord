import type { Metadata } from "next";
import { container, eyebrow } from "@/lib/ui";
import BackToHome from "@/components/BackToHome";
import JobsView from "@/components/JobsView";

export const metadata: Metadata = {
  title: "Jobs | Physiotherapeut in Hannover werden",
  description:
    "Wir suchen Physiotherapeuten in Hannover, in Vollzeit oder als Minijob. Kleines herzliches Team, moderne Ausstattung. Jetzt bewerben.",
  alternates: { canonical: "/jobs" },
};

export default function Page() {
  return (
    <>
      <section className="bg-ink text-white">
        <div className="pt-1">
          <BackToHome light />
        </div>
        <div className={`${container} pb-14 pt-4 md:pb-20`}>
          <span className="mb-3 inline-block text-[13px] font-bold uppercase tracking-[0.14em] text-[#8fd6a3]">
            Karriere
          </span>
          <h1 className="text-[clamp(2.4rem,5vw,4rem)] font-extrabold text-white">
            Wir suchen Sie
          </h1>
          <p className="mt-5 max-w-[52ch] text-[1.15rem] text-white/75">
            Ein kleines, persönliches Team im Herzen von Hannover List, mit moderner
            Ausstattung und einem breiten Leistungsspektrum. Kommen Sie dazu.
          </p>
        </div>
      </section>

      <section className="bg-paper">
        <div className={`${container} py-14 md:py-20`}>
          <JobsView />
        </div>
      </section>
    </>
  );
}

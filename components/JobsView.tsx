"use client";

import { useState } from "react";
import { jobs } from "@/lib/content";
import Reveal from "./Reveal";
import ApplyModal from "./ApplyModal";
import { Check } from "./Icons";

export default function JobsView() {
  const [openJob, setOpenJob] = useState<string | null>(null);

  return (
    <>
      <div className="grid gap-6 md:grid-cols-2">
        {jobs.map((j, i) => (
          <Reveal key={j.title} delay={i * 80} className="h-full">
            <div className="flex h-full flex-col rounded-card border border-line bg-white p-7 shadow-sm2 md:p-8">
              <span className="self-start rounded-full bg-greenTint px-3 py-1.5 text-[13px] font-bold text-greenDark">
                {j.type}
              </span>
              <h2 className="mt-4 text-[1.6rem]">{j.title}</h2>
              <p className="mt-3.5 text-[16px] leading-[1.65] text-ink2">{j.desc}</p>
              <ul className="mt-5 flex flex-col gap-2.5">
                {j.points.map((p) => (
                  <li key={p} className="flex items-start gap-2.5 text-[15px] leading-[1.5]">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-green" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
              <button
                type="button"
                onClick={() => setOpenJob(j.title)}
                className="mt-6 self-start rounded-btn bg-green px-6 py-3.5 text-[15px] font-bold text-white transition-colors hover:bg-greenDark"
              >
                Jetzt bewerben
              </button>
            </div>
          </Reveal>
        ))}
      </div>

      <ApplyModal
        open={openJob !== null}
        onClose={() => setOpenJob(null)}
        jobTitle={openJob ?? ""}
      />
    </>
  );
}

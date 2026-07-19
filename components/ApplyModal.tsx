"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type Status = "idle" | "sending" | "success" | "error";

const inputClass =
  "w-full rounded-sm2 border border-line bg-sand px-3.5 py-3 text-[16px] text-ink outline-none transition focus:border-green focus:bg-white";
const labelClass = "flex flex-col gap-1.5 text-[14px] font-semibold";

export default function ApplyModal({
  open,
  onClose,
  jobTitle,
}: {
  open: boolean;
  onClose: () => void;
  jobTitle: string;
}) {
  const router = useRouter();
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape" && status !== "success") onClose();
    }
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, status, onClose]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) {
      setStatus("idle");
      setError("");
    }
  }, [open]);

  // Nach Erfolg: Meldung 10 s zeigen, dann zur Startseite
  useEffect(() => {
    if (status !== "success") return;
    const t = setTimeout(() => router.push("/"), 10000);
    return () => clearTimeout(t);
  }, [status, router]);

  if (!open) return null;

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, jobTitle }),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
    } catch {
      setStatus("error");
      setError(
        "Das hat leider nicht geklappt. Bitte rufen Sie uns an oder versuchen Sie es später erneut.",
      );
    }
  }

  return (
    <div
      className="fixed inset-0 z-[80] grid place-items-center bg-ink/50 p-4"
      onClick={() => status !== "success" && onClose()}
      role="dialog"
      aria-modal="true"
      aria-label={`Bewerbung ${jobTitle}`}
    >
      <div
        className="max-h-[90vh] w-full max-w-[560px] overflow-auto rounded-card bg-white p-6 shadow-lg2 md:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {status === "success" ? (
          <div className="py-4 text-center">
            <div className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-full bg-green text-[26px] text-white">
              ✓
            </div>
            <h3 className="text-[1.5rem]">Bewerbung ist eingegangen</h3>
            <p className="mx-auto mt-3 max-w-[42ch] text-[15.5px] leading-[1.6] text-ink2">
              Vielen Dank für Ihr Interesse. Wir sehen uns Ihre Unterlagen an und
              melden uns schnellstmöglich bei Ihnen. Sie werden gleich automatisch zur
              Startseite weitergeleitet.
            </p>
            <Link
              href="/"
              className="mt-6 inline-flex items-center justify-center rounded-btn bg-green px-6 py-3.5 text-[15px] font-bold text-white hover:bg-greenDark"
            >
              Zur Startseite
            </Link>
          </div>
        ) : (
          <form onSubmit={onSubmit}>
            <div className="mb-1 flex items-start justify-between gap-4">
              <h3 className="text-[1.5rem]">Jetzt bewerben</h3>
              <button
                type="button"
                onClick={onClose}
                aria-label="Schließen"
                className="grid h-9 w-9 flex-shrink-0 place-items-center rounded-lg border border-line text-muted hover:bg-sand"
              >
                ✕
              </button>
            </div>
            <p className="mb-5 text-[14.5px] text-muted">{jobTitle}</p>

            {/* Honeypot */}
            <div className="absolute left-[-9999px]" aria-hidden="true">
              <label>
                Firma
                <input name="company" tabIndex={-1} autoComplete="off" />
              </label>
            </div>

            <div className="flex flex-col gap-3.5">
              <div className="flex flex-wrap gap-3.5">
                <label className={`${labelClass} flex-1 basis-[160px]`}>
                  Vorname
                  <input name="firstName" type="text" required className={inputClass} />
                </label>
                <label className={`${labelClass} flex-1 basis-[160px]`}>
                  Nachname
                  <input name="lastName" type="text" required className={inputClass} />
                </label>
              </div>
              <label className={labelClass}>
                Telefonnummer
                <input name="phone" type="tel" required className={inputClass} />
              </label>
              <label className={labelClass}>
                Verfügbar ab
                <input name="availableFrom" type="date" required className={inputClass} />
              </label>

              <label className="flex items-start gap-2.5 text-[13.5px] leading-[1.5] text-muted">
                <input
                  name="consent"
                  type="checkbox"
                  required
                  className="mt-0.5 h-4 w-4 flex-shrink-0 accent-green"
                />
                <span>
                  Ich bin einverstanden, dass meine Daten gespeichert werden, damit das
                  Physiotherapie Zentrum Nord mich zu meiner Bewerbung kontaktieren kann.
                  Mehr dazu in der{" "}
                  <Link
                    href="/datenschutzbestimmungen-nach-dsgvo1"
                    className="font-semibold text-greenDark underline underline-offset-2"
                  >
                    Datenschutzerklärung
                  </Link>
                  .
                </span>
              </label>

              <button
                type="submit"
                disabled={status === "sending"}
                className="mt-1 rounded-btn bg-green px-4 py-4 text-[16px] font-bold text-white shadow-sm2 transition-colors hover:bg-greenDark disabled:opacity-70"
              >
                {status === "sending" ? "Wird gesendet …" : "Bewerbung absenden"}
              </button>

              {status === "error" && (
                <p
                  className="text-center text-[14px] font-semibold text-red-600"
                  role="alert"
                >
                  {error}
                </p>
              )}
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

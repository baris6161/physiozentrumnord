"use client";

import Link from "next/link";
import { useState } from "react";

type Status = "idle" | "sending" | "success" | "error";

const inputClass =
  "w-full rounded-sm2 border border-line bg-sand px-3.5 py-3 text-[16px] text-ink outline-none transition focus:border-green focus:bg-white";
const labelClass = "flex flex-col gap-1.5 text-[14px] font-semibold";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setError(
        "Das hat leider nicht geklappt. Bitte rufen Sie uns an oder versuchen Sie es später erneut.",
      );
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-card border border-greenLine bg-greenTint p-8 text-center">
        <div className="mx-auto mb-3 grid h-12 w-12 place-items-center rounded-full bg-green text-[22px] text-white">
          ✓
        </div>
        <h3 className="text-[1.35rem]">Vielen Dank für Ihre Nachricht</h3>
        <p className="mt-2 text-[15px] text-ink2">
          Wir haben Ihre Anfrage erhalten und melden uns zeitnah bei Ihnen zurück.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-card border border-line bg-white p-6 shadow-sm2 md:p-8"
    >
      <h3 className="mb-1.5 text-[1.35rem]">Terminanfrage senden</h3>
      <p className="mb-5 text-[14.5px] text-muted">
        Wir melden uns zeitnah bei Ihnen zurück.
      </p>

      {/* Honeypot (fuer Menschen unsichtbar) */}
      <div className="absolute left-[-9999px]" aria-hidden="true">
        <label>
          Firma
          <input name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="flex flex-col gap-3.5">
        <label className={labelClass}>
          Name
          <input name="name" type="text" required placeholder="Ihr Name" className={inputClass} />
        </label>
        <div className="flex flex-wrap gap-3.5">
          <label className={`${labelClass} flex-1 basis-[160px]`}>
            E-Mail
            <input
              name="email"
              type="email"
              required
              placeholder="name@mail.de"
              className={inputClass}
            />
          </label>
          <label className={`${labelClass} flex-1 basis-[140px]`}>
            Telefon
            <input
              name="phone"
              type="tel"
              placeholder="Optional"
              className={inputClass}
            />
          </label>
        </div>
        <label className={labelClass}>
          Nachricht
          <textarea
            name="message"
            rows={4}
            required
            placeholder="Ihr Anliegen"
            className={`${inputClass} resize-y`}
          />
        </label>

        <label className="flex items-start gap-2.5 text-[13.5px] leading-[1.5] text-muted">
          <input
            name="consent"
            type="checkbox"
            required
            className="mt-0.5 h-4 w-4 flex-shrink-0 accent-green"
          />
          <span>
            Ich bin damit einverstanden, dass meine Angaben zur Bearbeitung meiner
            Anfrage gespeichert werden. Es erfolgt keine Weitergabe an Dritte. Mehr
            dazu in der{" "}
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
          {status === "sending" ? "Wird gesendet …" : "Nachricht senden"}
        </button>

        {status === "error" && (
          <p className="text-center text-[14px] font-semibold text-red-600" role="alert">
            {error}
          </p>
        )}
      </div>
    </form>
  );
}

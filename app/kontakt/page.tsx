import type { Metadata } from "next";
import BackToHome from "@/components/BackToHome";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Kontakt | Physiotherapie Zentrum Nord Hannover",
  description:
    "So erreichen Sie das Physiotherapie Zentrum Nord in der Voßstr. 1 in Hannover List. Termine nach Vereinbarung unter 0511 713 03 044.",
  alternates: { canonical: "/kontakt" },
};

export default function Page() {
  return (
    <div className="bg-paper">
      <div className="pt-1">
        <BackToHome />
      </div>
      <ContactSection variant="page" />
    </div>
  );
}

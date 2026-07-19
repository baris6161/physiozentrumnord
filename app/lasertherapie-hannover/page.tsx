import type { Metadata } from "next";
import { serviceBySlug } from "@/lib/content";
import ServiceDetail from "@/components/ServiceDetail";
import BackToHome from "@/components/BackToHome";

const service = serviceBySlug("lasertherapie-hannover")!;

export const metadata: Metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
  alternates: { canonical: `/${service.slug}` },
  openGraph: {
    title: service.metaTitle,
    description: service.metaDescription,
    images: [{ url: service.img }],
  },
};

export default function Page() {
  return (
    <>
      <div className="bg-sand pt-1">
        <BackToHome />
      </div>
      <ServiceDetail service={service} />
    </>
  );
}

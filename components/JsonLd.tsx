import { site } from "@/lib/site";

/** Strukturierte Daten fuer die lokale Suche (Physiotherapie-Praxis). */
export default function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Physiotherapy",
    name: site.name,
    "@id": site.url,
    url: site.url,
    telephone: site.phoneFormal,
    email: site.email,
    image: `${site.url}/images/krankengymnsatik-in-hannover_praxis_08-558w.jpg`,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      postalCode: site.address.zip,
      addressLocality: site.address.city,
      addressCountry: "DE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 52.393,
      longitude: 9.7588,
    },
    founder: site.owner,
    areaServed: "Hannover",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
        opens: "08:00",
        closes: "20:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Friday",
        opens: "08:00",
        closes: "14:00",
      },
    ],
    sameAs: [site.social.facebook],
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

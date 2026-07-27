import { site } from "@/lib/site";

/**
 * Google-Maps-Einbettung mit dem korrekten Standort-Pin.
 * Hinweis: Google Maps laedt Inhalte von Google (ggf. Cookies). Fuer strenge
 * DSGVO-Konformitaet sollte die Karte idealerweise erst nach Einwilligung geladen
 * werden. Auf ausdruecklichen Wunsch des Praxisinhabers hier direkt eingebunden.
 */
export default function OsmMap() {
  return (
    <div className="overflow-hidden rounded-card border border-line">
      <iframe
        title={`Standort ${site.name}, ${site.address.street}, ${site.address.zip} ${site.address.city}`}
        src={site.googleMapsEmbed}
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className="block h-[300px] w-full border-0"
      />
      <div className="flex items-center justify-between gap-3 bg-sand px-4 py-3 text-[14px]">
        <span className="font-semibold text-ink">
          {site.address.street}, {site.address.zip} {site.address.city}
        </span>
        <a
          href={site.mapsHref}
          target="_blank"
          rel="noopener"
          className="font-bold text-greenDark hover:text-ink"
        >
          Route planen &rarr;
        </a>
      </div>
    </div>
  );
}

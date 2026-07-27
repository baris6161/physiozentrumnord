// Zentrale Praxis- und Kontaktdaten (NAP). Einmal pflegen, ueberall nutzen.

export const site = {
  name: "Physiotherapie Zentrum Nord",
  owner: "Tareck Fares",
  taxId: "26/112/10076",
  phoneDisplay: "0511 713 03 044",
  phoneFormal: "+49 (0)511 / 713 03 044",
  phoneHref: "tel:+4951171303044",
  email: "info@krankengymnastik-in-hannover.de",
  emailHref: "mailto:info@krankengymnastik-in-hannover.de",
  address: {
    street: "Voßstr. 1",
    zip: "30161",
    city: "Hannover",
    district: "List",
  },
  mapsHref:
    "https://www.google.com/maps/search/?api=1&query=Physiotherapie+Zentrum+Nord+Vo%C3%9Fstr.+1+30161+Hannover",
  // Offizielle Google-Maps-Einbettung (korrekter Standort-Pin)
  googleMapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d430.4554979113425!2d9.737305476730283!3d52.388106808269264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41653bd4764c4235%3A0x9d05a3e363103a6f!2sPhysiotherapie%20Zentrum%20Nord!5e0!3m2!1sde!2sde!4v1785187855844!5m2!1sde!2sde",
  // OpenStreetMap Einbettung (cookielos, ohne Consent)
  osmEmbed:
    "https://www.openstreetmap.org/export/embed.html?bbox=9.7538%2C52.3905%2C9.7638%2C52.3955&layer=mapnik&marker=52.3930%2C9.7588",
  osmLink: "https://www.openstreetmap.org/?mlat=52.3930&mlon=9.7588#map=17/52.3930/9.7588",
  social: {
    facebook: "https://www.facebook.com/PhysiotherapieZentrumNord/",
    instagram: "https://instagram.com/",
  },
  url:
    process.env.NEXT_PUBLIC_SITE_URL ||
    "https://www.krankengymnastik-in-hannover.de",
} as const;

export const hours = [
  { d: "Montag bis Donnerstag", t: "8:00 bis 20:00 Uhr" },
  { d: "Freitag", t: "8:00 bis 14:00 Uhr" },
  { d: "Samstag", t: "nach Vereinbarung" },
  { d: "Sonntag", t: "geschlossen" },
];

// Hauptnavigation. Anker-Links (/#...) springen auf der Startseite sanft
// zur Sektion, von Unterseiten navigieren sie zuerst zur Startseite.
export const nav = [
  { label: "Home", href: "/" },
  { label: "Leistungen", href: "/#leistungen" },
  { label: "Spezialgeräte", href: "/#spezialgeraete" },
  { label: "Patienteninfo", href: "/patienteninformation" },
  { label: "Jobs", href: "/jobs" },
  { label: "Kontakt", href: "/#kontakt" },
];

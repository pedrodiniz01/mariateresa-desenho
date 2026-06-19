export const SITE_NAME = "Maria Teresa Desenho";
export const SITE_LOCALE = "pt_PT";
export const SITE_LANGUAGE = "pt-PT";

export const DEFAULT_DESCRIPTION =
  "Maria Teresa Desenho — atelier de quadros, murais pintados à mão, posters e stationery personalizado em Guimarães, Portugal. Arte feita à mão, peça a peça.";

export const DEFAULT_KEYWORDS =
  "murais pintados à mão, quadros personalizados, posters ilustrados, stationery personalizado, convites, batizado, casamento, arte Guimarães, Portugal, Maria Teresa Desenho";

export const CONTACT = {
  phone: "+351931371093",
  email: "mariateresadesenhopt@outlook.pt",
  instagram: "https://www.instagram.com/mariateresa_desenho/",
  city: "Guimarães",
  country: "Portugal",
} as const;

export const PORTFOLIO_PATHS = [
  "/portefolio/quadros",
  "/portefolio/posters",
  "/portefolio/murais",
  "/portefolio/stationery",
] as const;

/** Set VITE_SITE_URL in production (e.g. https://mariateresadesenho.pt). */
export function getSiteUrl(): string {
  return (import.meta.env.VITE_SITE_URL ?? "https://mariateresadesenho.pt").replace(/\/$/, "");
}

export function absoluteUrl(path: string): string {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${getSiteUrl()}${normalizedPath}`;
}

export function toAbsoluteAssetUrl(assetUrl: string): string {
  if (assetUrl.startsWith("http")) return assetUrl;
  return absoluteUrl(assetUrl);
}

type PageHeadOptions = {
  title: string;
  description: string;
  path: string;
  image?: string;
  imageAlt?: string;
  type?: string;
  jsonLd?: object | object[];
};

export function createPageHead({
  title,
  description,
  path,
  image,
  imageAlt,
  type = "website",
  jsonLd,
}: PageHeadOptions) {
  const url = absoluteUrl(path);
  const absoluteImage = image ? toAbsoluteAssetUrl(image) : undefined;

  const meta: Array<Record<string, string | object>> = [
    { title },
    { name: "description", content: description },
    { name: "keywords", content: DEFAULT_KEYWORDS },
    { name: "author", content: SITE_NAME },
    { name: "robots", content: "index, follow" },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: type },
    { property: "og:url", content: url },
    { property: "og:locale", content: SITE_LOCALE },
    { property: "og:site_name", content: SITE_NAME },
    { name: "twitter:card", content: absoluteImage ? "summary_large_image" : "summary" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
  ];

  if (absoluteImage) {
    meta.push(
      { property: "og:image", content: absoluteImage },
      { property: "og:image:alt", content: imageAlt ?? title },
      { name: "twitter:image", content: absoluteImage },
    );
  }

  const jsonLdItems = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];
  for (const item of jsonLdItems) {
    meta.push({ "script:ld+json": item });
  }

  return {
    meta,
    links: [{ rel: "canonical", href: url }],
  };
}

export function createBusinessJsonLd(image?: string) {
  const siteUrl = getSiteUrl();

  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${siteUrl}/#business`,
    name: SITE_NAME,
    description: DEFAULT_DESCRIPTION,
    url: siteUrl,
    image: image ? toAbsoluteAssetUrl(image) : undefined,
    telephone: CONTACT.phone,
    email: CONTACT.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: CONTACT.city,
      addressCountry: "PT",
    },
    areaServed: {
      "@type": "Country",
      name: CONTACT.country,
    },
    sameAs: [CONTACT.instagram],
    knowsAbout: [
      "Quadros personalizados",
      "Murais pintados à mão",
      "Posters ilustrados",
      "Stationery para eventos",
      "Convites personalizados",
    ],
  };
}

export function createWebsiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${getSiteUrl()}/#website`,
    name: SITE_NAME,
    url: getSiteUrl(),
    inLanguage: SITE_LANGUAGE,
    publisher: {
      "@id": `${getSiteUrl()}/#business`,
    },
  };
}

export function createCollectionPageJsonLd(options: {
  title: string;
  description: string;
  path: string;
  images: { src: string; alt: string }[];
}) {
  const url = absoluteUrl(options.path);

  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: options.title,
    description: options.description,
    url,
    inLanguage: SITE_LANGUAGE,
    isPartOf: {
      "@id": `${getSiteUrl()}/#website`,
    },
    about: {
      "@type": "CreativeWork",
      creator: {
        "@type": "Person",
        name: SITE_NAME,
      },
    },
    hasPart: options.images.map((image, index) => ({
      "@type": "ImageObject",
      position: index + 1,
      contentUrl: toAbsoluteAssetUrl(image.src),
      description: image.alt,
    })),
  };
}

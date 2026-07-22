import Image from "next/image";

/**
 * Echtes Physiotherapie-Zentrum-Nord-Logo (freigestellt).
 * variant "light" = dunkle Wortmarke fuer helle Flaechen (Header),
 * variant "dark"  = weisse Wortmarke fuer dunkle Flaechen (Footer).
 */
export default function Brand({
  variant = "light",
  className = "",
}: {
  variant?: "light" | "dark";
  className?: string;
}) {
  const src =
    variant === "dark"
      ? "/images/logo-physio-nord-white.png"
      : "/images/logo-physio-nord.png";

  return (
    <Image
      src={src}
      alt="Physiotherapie Zentrum Nord"
      width={1920}
      height={475}
      sizes="200px"
      priority={variant === "light"}
      className={`w-auto ${className}`}
    />
  );
}

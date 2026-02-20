import { Locale } from "./content";

/**
 * Returns the correct value from a localized Sanity field.
 * Sanity localized fields are structured as: { en: "...", ptBR: "..." }
 */
export function pickLocalized<T>(field: any, locale: Locale): T | undefined {
    if (!field) return undefined;

    // Convert pt-br to ptBR for Sanity schema compatibility
    const langKey = locale === "en" ? "en" : "ptBR";

    return field[langKey] || field["en"]; // Fallback to English if locale-specific content is missing
}

/**
 * Normalizes the locale from params.
 */
export function getLocale(params: { lang: string }): Locale {
    return (params.lang === "pt-br" ? "pt-br" : "en") as Locale;
}

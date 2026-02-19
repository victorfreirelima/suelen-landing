import { landingPageQuery } from "./sanity.queries";
import { client } from "@/sanity/client";

export type Locale = "en" | "pt-br";

export async function getLandingPage(lang: Locale) {
    const sanityLang = lang === "en" ? "en" : "ptBR";
    return await client.fetch(
        landingPageQuery,
        { lang: sanityLang },
        { next: { revalidate: 60 } }
    );
}

export async function getSiteSettings(lang: Locale) {
    const sanityLang = lang === "en" ? "en" : "ptBR";
    return await client.fetch(
        `*[_type == "siteSettings"][0] {
      brandName { "text": select($lang == "en" => en, ptBR) },
      logo,
      defaultLocale,
      socialLinks[] { label, url }
    }`,
        { lang: sanityLang },
        { next: { revalidate: 60 } }
    );
}

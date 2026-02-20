import { landingPageQuery, siteSettingsQuery } from "./sanity.queries";
import { client } from "@/sanity/client";

export type Locale = "en" | "pt-br";

export async function getLandingPage(lang: Locale) {
    return await client.fetch(
        landingPageQuery,
        {},
        { next: { revalidate: 60 } }
    );
}

export async function getSiteSettings() {
    return await client.fetch(
        siteSettingsQuery,
        {},
        { next: { revalidate: 60 } }
    );
}

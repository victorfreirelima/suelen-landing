import { defineType, defineField } from "sanity";

export const siteSettings = defineType({
    name: "siteSettings",
    title: "Site Settings",
    type: "document",
    fields: [
        defineField({ name: "siteName", title: "Site Name", type: "localeString" }),
        defineField({ name: "logo", title: "Site Logo", type: "image", options: { hotspot: true } }),
        defineField({
            name: "primaryCta",
            title: "Header Primary CTA",
            type: "object",
            fields: [
                defineField({ name: "label", type: "localeString" }),
                defineField({ name: "href", title: "Link/Anchor", type: "string" }),
            ],
        }),
        defineField({
            name: "secondaryCta",
            title: "Header Secondary CTA",
            type: "object",
            fields: [
                defineField({ name: "label", type: "localeString" }),
                defineField({ name: "href", title: "Link/Anchor", type: "string" }),
            ],
        }),
        defineField({
            name: "socialLinks",
            type: "array",
            of: [
                {
                    type: "object",
                    fields: [
                        defineField({ name: "label", type: "string" }),
                        defineField({ name: "url", type: "url" }),
                        defineField({
                            name: "iconKey",
                            title: "Icon Key",
                            type: "string",
                            description: "e.g., linkedin, github, twitter, instagram"
                        }),
                    ],
                },
            ],
        }),
        defineField({
            name: "languages",
            title: "Enabled Languages",
            type: "array",
            of: [
                {
                    type: "object",
                    fields: [
                        defineField({ name: "code", type: "string" }),
                        defineField({ name: "label", type: "string" }),
                    ],
                },
            ],
            initialValue: [
                { code: "en", label: "English" },
                { code: "pt-br", label: "Portuguese" },
            ],
        }),
        defineField({
            name: "defaultLocale",
            title: "Default Language",
            type: "string",
            options: { list: ["en", "pt-br"] },
            initialValue: "en"
        }),
        defineField({
            name: "analytics",
            title: "Analytics",
            type: "object",
            fields: [
                defineField({ name: "gtagId", title: "Google Tag ID", type: "string" }),
                defineField({ name: "metaPixelId", title: "Meta Pixel ID", type: "string" }),
            ],
        }),
        defineField({
            name: "seoDefaults",
            title: "Global SEO Defaults",
            type: "object",
            fields: [
                defineField({ name: "title", type: "localeString" }),
                defineField({ name: "description", type: "localeText" }),
                defineField({ name: "ogTitle", type: "localeString" }),
                defineField({ name: "ogDescription", type: "localeText" }),
                defineField({ name: "ogImage", type: "image", options: { hotspot: true } }),
                defineField({
                    name: "twitterCard",
                    type: "string",
                    options: { list: ["summary", "summary_large_image"] },
                    initialValue: "summary_large_image"
                }),
            ],
        }),
    ],
});

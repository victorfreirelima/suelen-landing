import { defineType, defineField } from "sanity";

export const landingPage = defineType({
    name: "landingPage",
    title: "Landing Page",
    type: "document",
    fields: [
        // SEO (Localized)
        defineField({
            name: "seo",
            title: "SEO settings",
            type: "object",
            fields: [
                defineField({ name: "title", type: "localeString" }),
                defineField({ name: "description", type: "localeText" }),
                defineField({ name: "ogImage", type: "image", options: { hotspot: true } }),
            ],
        }),
        // Hero (Localized)
        defineField({
            name: "hero",
            title: "Hero Section",
            type: "object",
            fields: [
                defineField({ name: "badgeText", type: "localeString" }),
                defineField({
                    name: "headline",
                    type: "localeString",
                    description: "Use |word| to highlight a segment (e.g. 'Expert in |Paid Media|')",
                }),
                defineField({ name: "subheadline", type: "localeText" }),
                defineField({ name: "portraitImage", type: "image", options: { hotspot: true } }),
                defineField({
                    name: "primaryCta",
                    type: "object",
                    fields: [
                        defineField({ name: "label", type: "localeString" }),
                        defineField({ name: "href", type: "string" }),
                    ],
                }),
                defineField({
                    name: "secondaryCta",
                    type: "object",
                    fields: [
                        defineField({ name: "label", type: "localeString" }),
                        defineField({ name: "href", type: "string" }),
                    ],
                }),
            ],
        }),
        // Navigation (Localized)
        defineField({
            name: "navigation",
            title: "Navigation items",
            type: "array",
            of: [
                {
                    type: "object",
                    fields: [
                        defineField({ name: "id", title: "Unique ID", type: "string" }),
                        defineField({ name: "label", type: "localeString" }),
                        defineField({ name: "targetSectionId", title: "Target Section ID", type: "string" }),
                    ],
                },
            ],
        }),
        // Sections (Reorderable blocks)
        defineField({
            name: "sections",
            title: "Page Sections",
            type: "array",
            of: [
                { type: "statsSection" },
                { type: "expertiseGridSection" },
                { type: "frameworksSection" },
                { type: "journeySection" },
                { type: "testimonialsSection" },
                { type: "ctaSection" },
                { type: "footerSection" },
            ],
        }),
    ],
});

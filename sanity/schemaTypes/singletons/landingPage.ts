import { defineType, defineField } from "sanity";

export const landingPage = defineType({
    name: "landingPage",
    title: "Landing Page",
    type: "document",
    fields: [
        // Navbar
        defineField({
            name: "navbar",
            title: "Navbar",
            type: "object",
            fields: [
                defineField({ name: "brandName", type: "localeString" }),
                defineField({
                    name: "navLinks",
                    type: "array",
                    of: [
                        {
                            type: "object",
                            fields: [
                                defineField({ name: "label", type: "localeString" }),
                                defineField({ name: "anchorId", type: "string" }),
                            ],
                        },
                    ],
                }),
                defineField({
                    name: "ctaButton",
                    type: "object",
                    fields: [
                        defineField({ name: "label", type: "localeString" }),
                        defineField({ name: "anchorId", type: "string" }),
                    ],
                }),
            ],
        }),
        // Hero
        defineField({
            name: "hero",
            title: "Hero Section",
            type: "object",
            fields: [
                defineField({ name: "labelPill", type: "localeString" }),
                defineField({ name: "headline", type: "localeString" }),
                defineField({ name: "highlightWord", type: "localeString" }),
                defineField({ name: "subheadline", type: "localeText" }),
                defineField({
                    name: "primaryCTA",
                    type: "object",
                    fields: [
                        defineField({ name: "label", type: "localeString" }),
                        defineField({ name: "anchorId", type: "string" }),
                    ],
                }),
                defineField({
                    name: "secondaryCTA",
                    type: "object",
                    fields: [
                        defineField({ name: "label", type: "localeString" }),
                        defineField({ name: "anchorId", type: "string" }),
                    ],
                }),
                defineField({ name: "portraitImage", title: "Portrait Image", type: "image", options: { hotspot: true } }),
                defineField({
                    name: "socialLinks",
                    type: "array",
                    of: [
                        {
                            type: "object",
                            fields: [
                                defineField({ name: "iconName", type: "string" }),
                                defineField({ name: "url", type: "url" }),
                            ],
                        },
                    ],
                }),
            ],
        }),
        // Impact
        defineField({
            name: "impactSection",
            title: "Impact Section",
            type: "object",
            fields: [
                defineField({ name: "heading", type: "localeString" }),
                defineField({ name: "body", type: "localeText" }),
                defineField({
                    name: "stats",
                    type: "array",
                    of: [
                        {
                            type: "object",
                            fields: [
                                defineField({ name: "label", type: "localeString" }),
                                defineField({ name: "value", type: "string" }),
                            ],
                        },
                    ],
                }),
            ],
        }),
        // Core Expertise
        defineField({
            name: "coreExpertise",
            title: "Core Expertise",
            type: "object",
            fields: [
                defineField({ name: "heading", type: "localeString" }),
                defineField({ name: "subtitle", type: "localeString" }),
                defineField({
                    name: "cards",
                    type: "array",
                    of: [
                        {
                            type: "object",
                            fields: [
                                defineField({ name: "iconName", type: "string" }),
                                defineField({ name: "title", type: "localeString" }),
                                defineField({ name: "description", type: "localeText" }),
                            ],
                        },
                    ],
                }),
            ],
        }),
        // Frameworks
        defineField({
            name: "frameworksSection",
            title: "Frameworks Section",
            type: "object",
            fields: [
                defineField({ name: "heading", type: "localeString" }),
                defineField({ name: "body", type: "localeText" }),
                defineField({ name: "bullets", type: "array", of: [{ type: "localeString" }] }),
                defineField({
                    name: "rightCardSteps",
                    type: "array",
                    of: [
                        {
                            type: "object",
                            fields: [
                                defineField({ name: "number", type: "string" }),
                                defineField({ name: "title", type: "localeString" }),
                                defineField({ name: "description", type: "localeText" }),
                            ],
                        },
                    ],
                }),
            ],
        }),
        // Professional Journey
        defineField({
            name: "professionalJourney",
            title: "Professional Journey",
            type: "object",
            fields: [
                defineField({ name: "heading", type: "localeString" }),
                defineField({
                    name: "roles",
                    type: "array",
                    of: [
                        {
                            type: "object",
                            fields: [
                                defineField({ name: "title", type: "localeString" }),
                                defineField({ name: "org", type: "localeString" }),
                                defineField({ name: "dateBadge", type: "string" }),
                                defineField({ name: "bullets", type: "array", of: [{ type: "localeString" }] }),
                            ],
                        },
                    ],
                }),
            ],
        }),
        // Why Work With Me
        defineField({
            name: "whyWorkWithMe",
            title: "Why Work With Me",
            type: "object",
            fields: [
                defineField({ name: "heading", type: "localeString" }),
                defineField({
                    name: "features",
                    type: "array",
                    of: [
                        {
                            type: "object",
                            fields: [
                                defineField({ name: "title", type: "localeString" }),
                                defineField({ name: "description", type: "localeText" }),
                            ],
                        },
                    ],
                }),
                defineField({
                    name: "testimonial",
                    type: "object",
                    fields: [
                        defineField({ name: "quote", type: "localeText" }),
                        defineField({ name: "name", type: "string" }),
                        defineField({ name: "roleCompany", title: "Role/Company Label", type: "localeString" }),
                    ],
                }),
            ],
        }),
        // Final CTA
        defineField({
            name: "finalCTA",
            title: "Final CTA",
            type: "object",
            fields: [
                defineField({ name: "heading", type: "localeString" }),
                defineField({ name: "body", type: "localeText" }),
                defineField({
                    name: "buttons",
                    type: "array",
                    of: [
                        {
                            type: "object",
                            fields: [
                                defineField({ name: "label", type: "localeString" }),
                                defineField({ name: "url", type: "url" }),
                            ],
                        },
                    ],
                }),
            ],
        }),
        // Footer
        defineField({
            name: "footer",
            title: "Footer Section",
            type: "object",
            fields: [
                defineField({ name: "smallText", type: "localeString" }),
            ],
        }),
        // SEO
        defineField({
            name: "seo",
            title: "SEO Section",
            type: "object",
            fields: [
                defineField({ name: "metaTitle", type: "localeString" }),
                defineField({ name: "metaDescription", type: "localeText" }),
                defineField({ name: "ogImage", type: "image" }),
            ],
        }),
    ],
});

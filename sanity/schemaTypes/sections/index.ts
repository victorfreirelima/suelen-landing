import { defineType, defineField } from "sanity";

export const commonSectionFields = [
    defineField({
        name: "sectionId",
        title: "Section ID",
        type: "string",
        description: "Used for anchor links (e.g., 'expertise')",
        validation: (Rule) => Rule.required(),
    }),
    defineField({
        name: "enabled",
        title: "Enabled",
        type: "boolean",
        initialValue: true,
    }),
    defineField({
        name: "backgroundStyle",
        title: "Background Style",
        type: "string",
        options: {
            list: [
                { title: "White", value: "white" },
                { title: "Gray", value: "gray" },
                { title: "Black", value: "black" },
                { title: "Brand", value: "brand" },
            ],
            layout: "radio",
        },
        initialValue: "white",
    }),
    defineField({
        name: "paddingStyle",
        title: "Padding Style",
        type: "string",
        options: {
            list: [
                { title: "Normal", value: "normal" },
                { title: "Compact", value: "compact" },
                { title: "Spacious", value: "spacious" },
            ],
        },
        initialValue: "normal",
    }),
    defineField({
        name: "maxWidth",
        title: "Max Width",
        type: "string",
        options: {
            list: [
                { title: "Default", value: "default" },
                { title: "Narrow", value: "narrow" },
                { title: "Wide", value: "wide" },
            ],
        },
        initialValue: "default",
    }),
];

export const statsSection = defineType({
    name: "statsSection",
    title: "Stats Section",
    type: "object",
    fields: [
        ...commonSectionFields,
        defineField({ name: "title", title: "Title", type: "localeString" }),
        defineField({ name: "body", title: "Body", type: "localeText" }),
        defineField({
            name: "stats",
            title: "Stats",
            type: "array",
            of: [
                {
                    type: "object",
                    fields: [
                        defineField({ name: "label", title: "Label", type: "localeString" }),
                        defineField({ name: "value", title: "Value", type: "string" }),
                    ],
                },
            ],
        }),
    ],
    preview: {
        select: { title: "sectionId" },
        prepare(value: Record<string, any>) {
            return { title: `Stats: ${value.title}` };
        },
    },
});

export const expertiseGridSection = defineType({
    name: "expertiseGridSection",
    title: "Expertise Grid",
    type: "object",
    fields: [
        ...commonSectionFields,
        defineField({ name: "title", title: "Title", type: "localeString" }),
        defineField({ name: "subtitle", title: "Subtitle", type: "localeString" }),
        defineField({
            name: "cards",
            title: "Cards",
            type: "array",
            of: [
                {
                    type: "object",
                    fields: [
                        defineField({ name: "title", title: "Card Title", type: "localeString" }),
                        defineField({ name: "description", title: "Description", type: "localeText" }),
                        defineField({
                            name: "iconKey",
                            title: "Icon Key",
                            type: "string",
                            description: "Lucide icon name, e.g. Target, TrendingUp, BarChart3",
                        }),
                    ],
                },
            ],
        }),
    ],
    preview: {
        select: { title: "sectionId" },
        prepare(value: Record<string, any>) {
            return { title: `Expertise: ${value.title}` };
        },
    },
});

export const frameworksSection = defineType({
    name: "frameworksSection",
    title: "Frameworks Section",
    type: "object",
    fields: [
        ...commonSectionFields,
        defineField({ name: "title", title: "Title", type: "localeString" }),
        defineField({ name: "body", title: "Body", type: "localeText" }),
        defineField({
            name: "bullets",
            title: "Bullet Points",
            type: "array",
            // Each bullet is a localeString object stored inline
            of: [
                {
                    type: "object",
                    fields: [
                        defineField({ name: "en", title: "English", type: "string" }),
                        defineField({ name: "ptBR", title: "Portuguese (Brazil)", type: "string" }),
                    ],
                },
            ],
        }),
        defineField({
            name: "sideCardSteps",
            title: "Side Card Steps",
            type: "array",
            of: [
                {
                    type: "object",
                    fields: [
                        defineField({ name: "title", title: "Step Title", type: "localeString" }),
                        defineField({ name: "description", title: "Description", type: "localeText" }),
                    ],
                },
            ],
        }),
    ],
    preview: {
        select: { title: "sectionId" },
        prepare(value: Record<string, any>) {
            return { title: `Frameworks: ${value.title}` };
        },
    },
});

export const journeySection = defineType({
    name: "journeySection",
    title: "Journey Section",
    type: "object",
    fields: [
        ...commonSectionFields,
        defineField({ name: "title", title: "Title", type: "localeString" }),
        defineField({
            name: "roles",
            title: "Roles",
            type: "array",
            of: [
                {
                    type: "object",
                    fields: [
                        defineField({ name: "title", title: "Job Title", type: "localeString" }),
                        defineField({ name: "companyLine", title: "Company / Context", type: "localeString" }),
                        defineField({ name: "dates", title: "Date Range", type: "string" }),
                        defineField({
                            name: "bullets",
                            title: "Bullets",
                            type: "array",
                            // Each bullet is a localeString object stored inline
                            of: [
                                {
                                    type: "object",
                                    fields: [
                                        defineField({ name: "en", title: "English", type: "string" }),
                                        defineField({ name: "ptBR", title: "Portuguese (Brazil)", type: "string" }),
                                    ],
                                },
                            ],
                        }),
                    ],
                },
            ],
        }),
    ],
    preview: {
        select: { title: "sectionId" },
        prepare(value: Record<string, any>) {
            return { title: `Journey: ${value.title}` };
        },
    },
});

export const testimonialsSection = defineType({
    name: "testimonialsSection",
    title: "Testimonials Section",
    type: "object",
    fields: [
        ...commonSectionFields,
        defineField({ name: "title", title: "Title", type: "localeString" }),
        defineField({
            name: "testimonials",
            title: "Testimonials",
            type: "array",
            of: [
                {
                    type: "object",
                    fields: [
                        defineField({ name: "quote", title: "Quote", type: "localeText" }),
                        defineField({ name: "name", title: "Person Name", type: "string" }),
                        defineField({ name: "role", title: "Role", type: "localeString" }),
                        defineField({ name: "company", title: "Company", type: "localeString" }),
                    ],
                },
            ],
        }),
    ],
    preview: {
        select: { title: "sectionId" },
        prepare(value: Record<string, any>) {
            return { title: `Testimonials: ${value.title}` };
        },
    },
});

export const ctaSection = defineType({
    name: "ctaSection",
    title: "CTA Section",
    type: "object",
    fields: [
        ...commonSectionFields,
        defineField({ name: "title", title: "Title", type: "localeString" }),
        defineField({ name: "subtitle", title: "Subtitle", type: "localeText" }),
        defineField({
            name: "buttons",
            title: "Buttons",
            type: "array",
            of: [
                {
                    type: "object",
                    fields: [
                        defineField({ name: "label", title: "Button Label", type: "localeString" }),
                        defineField({ name: "href", title: "URL or Anchor", type: "string" }),
                        defineField({
                            name: "variant",
                            title: "Style Variant",
                            type: "string",
                            options: {
                                list: [
                                    { title: "Primary", value: "primary" },
                                    { title: "Secondary", value: "secondary" },
                                ],
                            },
                            initialValue: "primary",
                        }),
                    ],
                },
            ],
        }),
    ],
    preview: {
        select: { title: "sectionId" },
        prepare(value: Record<string, any>) {
            return { title: `CTA: ${value.title}` };
        },
    },
});

export const footerSection = defineType({
    name: "footerSection",
    title: "Footer Section",
    type: "object",
    fields: [
        ...commonSectionFields,
        defineField({ name: "copyright", title: "Copyright Line", type: "localeString" }),
        defineField({ name: "locationLine", title: "Location Line", type: "localeString" }),
        defineField({
            name: "links",
            title: "Footer Links",
            type: "array",
            of: [
                {
                    type: "object",
                    fields: [
                        defineField({ name: "label", title: "Link Label", type: "localeString" }),
                        defineField({ name: "href", title: "URL", type: "string" }),
                    ],
                },
            ],
        }),
    ],
    preview: {
        select: { title: "sectionId" },
        prepare(value: Record<string, any>) {
            return { title: `Footer: ${value.title}` };
        },
    },
});

import { defineField } from "sanity";

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

export const statsSection = {
    name: "statsSection",
    title: "Stats Section",
    type: "object",
    fields: [
        ...commonSectionFields,
        defineField({ name: "title", type: "localeString" }),
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
    preview: {
        select: { title: "sectionId" },
        prepare(value: Record<string, any>) {
            return { title: `Stats: ${value.title}` };
        },
    },
};

export const expertiseGridSection = {
    name: "expertiseGridSection",
    title: "Expertise Grid",
    type: "object",
    fields: [
        ...commonSectionFields,
        defineField({ name: "title", type: "localeString" }),
        defineField({ name: "subtitle", type: "localeString" }),
        defineField({
            name: "cards",
            type: "array",
            of: [
                {
                    type: "object",
                    fields: [
                        defineField({ name: "title", type: "localeString" }),
                        defineField({ name: "description", type: "localeText" }),
                        defineField({ name: "iconKey", type: "string" }),
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
};

export const frameworksSection = {
    name: "frameworksSection",
    title: "Frameworks Section",
    type: "object",
    fields: [
        ...commonSectionFields,
        defineField({ name: "title", type: "localeString" }),
        defineField({ name: "body", type: "localeText" }),
        defineField({
            name: "bullets",
            type: "array",
            of: [{ type: "localeString" }],
        }),
        defineField({
            name: "sideCardSteps",
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
    ],
    preview: {
        select: { title: "sectionId" },
        prepare(value: Record<string, any>) {
            return { title: `Frameworks: ${value.title}` };
        },
    },
};

export const journeySection = {
    name: "journeySection",
    title: "Journey Section",
    type: "object",
    fields: [
        ...commonSectionFields,
        defineField({ name: "title", type: "localeString" }),
        defineField({
            name: "roles",
            type: "array",
            of: [
                {
                    type: "object",
                    fields: [
                        defineField({ name: "title", type: "localeString" }),
                        defineField({ name: "companyLine", type: "localeString" }),
                        defineField({ name: "dates", type: "string" }),
                        defineField({
                            name: "bullets",
                            type: "array",
                            of: [{ type: "localeString" }],
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
};

export const testimonialsSection = {
    name: "testimonialsSection",
    title: "Testimonials Section",
    type: "object",
    fields: [
        ...commonSectionFields,
        defineField({ name: "title", type: "localeString" }),
        defineField({
            name: "testimonials",
            type: "array",
            of: [
                {
                    type: "object",
                    fields: [
                        defineField({ name: "quote", type: "localeText" }),
                        defineField({ name: "name", type: "string" }),
                        defineField({ name: "role", type: "localeString" }),
                        defineField({ name: "company", type: "localeString" }),
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
};

export const ctaSection = {
    name: "ctaSection",
    title: "CTA Section",
    type: "object",
    fields: [
        ...commonSectionFields,
        defineField({ name: "title", type: "localeString" }),
        defineField({ name: "subtitle", type: "localeText" }),
        defineField({
            name: "buttons",
            type: "array",
            of: [
                {
                    type: "object",
                    fields: [
                        defineField({ name: "label", type: "localeString" }),
                        defineField({ name: "href", type: "string" }),
                        defineField({
                            name: "variant",
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
};

export const footerSection = {
    name: "footerSection",
    title: "Footer Section",
    type: "object",
    fields: [
        ...commonSectionFields,
        defineField({ name: "copyright", type: "localeString" }),
        defineField({ name: "locationLine", type: "localeString" }),
        defineField({
            name: "links",
            type: "array",
            of: [
                {
                    type: "object",
                    fields: [
                        defineField({ name: "label", type: "localeString" }),
                        defineField({ name: "href", type: "string" }),
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
};

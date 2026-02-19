import { defineType, defineField } from "sanity";

export const siteSettings = defineType({
    name: "siteSettings",
    title: "Site Settings",
    type: "document",
    fields: [
        defineField({ name: "brandName", type: "localeString" }),
        defineField({ name: "logo", type: "image" }),
        defineField({
            name: "defaultLocale",
            type: "string",
            options: { list: ["en", "pt-br"] },
            initialValue: "en"
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
                    ],
                },
            ],
        }),
    ],
});

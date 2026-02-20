import { defineType, defineField } from "sanity";

export const localeString = defineType({
    name: "localeString",
    title: "Localized String",
    type: "object",
    fields: [
        defineField({ name: "en", title: "English", type: "string" }),
        defineField({ name: "ptBR", title: "Portuguese (Brazil)", type: "string" }),
    ],
});

export const localeText = defineType({
    name: "localeText",
    title: "Localized Text",
    type: "object",
    fields: [
        defineField({ name: "en", title: "English", type: "text" }),
        defineField({ name: "ptBR", title: "Portuguese (Brazil)", type: "text" }),
    ],
});

export const localeImage = defineType({
    name: "localeImage",
    title: "Localized Image",
    type: "object",
    fields: [
        defineField({ name: "en", title: "English", type: "image", options: { hotspot: true } }),
        defineField({ name: "ptBR", title: "Portuguese (Brazil)", type: "image", options: { hotspot: true } }),
    ],
});

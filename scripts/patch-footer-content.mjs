/**
 * patch-footer-content.mjs
 * Updates footer section: copyright year and location in the landingPage Sanity doc.
 */
import { createClient } from "@sanity/client";

const token = "skZ26hXHbTaE0zjthUkGKt2RwBQ1XRNsQaisdNxsGD6ly0Hd5Iueu6hUlVywddoXcpMpKqxZxHSBCzJSycKEjMOKXm9L3r2Awn8uPQs1nA1545FYjeIWpNN3cipavThTKINUxZ7lGy29vdj4AbWmVkR3ZHzRo6GlkA7EzbF0BV1IFmcZP6JZ";

const client = createClient({
    projectId: "jhg5rrpj",
    dataset: "production",
    apiVersion: "2024-01-01",
    useCdn: false,
    token,
});

const doc = await client.fetch(`*[_id == "landingPage"][0]`);

const updatedSections = doc.sections.map((s) => {
    if (s._type === "footerSection") {
        return {
            ...s,
            copyright: {
                en: "© 2024 Suelen Fonteles. All rights reserved.",
                ptBR: "© 2024 Suelen Fonteles. Todos os direitos reservados."
            },
            locationLine: {
                en: "Vancouver, Canada / Remote",
                ptBR: "Vancouver, Canadá / Remoto"
            }
        };
    }
    return s;
});

const result = await client.patch("landingPage")
    .set({ sections: updatedSections })
    .commit();

console.log("✅ Footer content patched:", result._rev);

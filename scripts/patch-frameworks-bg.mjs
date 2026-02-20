/**
 * patch-frameworks-bg.mjs
 * Patches the frameworksSection backgroundStyle to "blue-light" via a custom color
 * and adds the new bg color to SectionRenderer.
 * For now: just updates the section bg in Tailwind via a special "blue-light" style.
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
    if (s._type === "frameworksSection") {
        return { ...s, backgroundStyle: "blue-light" };
    }
    return s;
});

const result = await client.patch("landingPage")
    .set({ sections: updatedSections })
    .commit();

console.log("✅ Frameworks backgroundStyle patched:", result._rev);

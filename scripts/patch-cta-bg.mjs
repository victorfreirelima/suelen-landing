/**
 * patch-cta-bg.mjs
 * Patches the CTA section backgroundStyle to "white" so it renders on white background.
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

// Fetch the current landingPage
const doc = await client.fetch(`*[_id == "landingPage"][0]`);

// Find the ctaSection and set backgroundStyle = "white"
const updatedSections = doc.sections.map((s) => {
    if (s._type === "ctaSection") {
        return { ...s, backgroundStyle: "white" };
    }
    return s;
});

const result = await client.patch("landingPage")
    .set({ sections: updatedSections })
    .commit();

console.log("✅ CTA backgroundStyle patched to white:", result._rev);

/**
 * apply-cms-update.mjs
 * Pushes the new landingPage content to the Sanity production dataset.
 * Run with: node scripts/apply-cms-update.mjs
 */
import { createClient } from "@sanity/client";
import { readFileSync } from "fs";

const token = "skZ26hXHbTaE0zjthUkGKt2RwBQ1XRNsQaisdNxsGD6ly0Hd5Iueu6hUlVywddoXcpMpKqxZxHSBCzJSycKEjMOKXm9L3r2Awn8uPQs1nA1545FYjeIWpNN3cipavThTKINUxZ7lGy29vdj4AbWmVkR3ZHzRo6GlkA7EzbF0BV1IFmcZP6JZ";

const client = createClient({
    projectId: "jhg5rrpj",
    dataset: "production",
    apiVersion: "2024-01-01",
    useCdn: false,
    token,
});

const doc = JSON.parse(readFileSync("scripts/update-landingPage.json", "utf8"));

console.log("Patching landingPage document...");

try {
    const result = await client.createOrReplace({
        ...doc,
        _id: "landingPage",
        _type: "landingPage",
    });
    console.log("✅ landingPage updated:", result._id, result._rev);
} catch (err) {
    console.error("❌ Error:", err.message);
    process.exit(1);
}

console.log("Done!");

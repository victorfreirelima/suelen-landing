/**
 * list-doc-keys.mjs
 * Dumps field keys from siteSettings and landingPage to understand current dataset shape.
 */
import { createClient } from "@sanity/client";

const client = createClient({
    projectId: "jhg5rrpj",
    dataset: "production",
    apiVersion: "2024-01-01",
    useCdn: false,
});

const [ss, lp] = await Promise.all([
    client.fetch(`*[_id == "siteSettings"][0]`),
    client.fetch(`*[_id == "landingPage"][0]`),
]);

console.log("=== siteSettings top-level keys ===");
console.log(Object.keys(ss ?? {}).join(", "));

console.log("\n=== landingPage top-level keys ===");
console.log(Object.keys(lp ?? {}).join(", "));

console.log("\n=== hero keys ===");
console.log(Object.keys(lp?.hero ?? {}).join(", "));

console.log("\n=== seo keys ===");
console.log(Object.keys(lp?.seo ?? {}).join(", "));

console.log("\n=== navigation[0] keys ===");
const nav0 = (lp?.navigation ?? [])[0];
console.log(Object.keys(nav0 ?? {}).join(", "));

console.log("\n=== section types (in order) ===");
for (const s of lp?.sections ?? []) {
    console.log(`  ${s._type}: keys = ${Object.keys(s).join(", ")}`);
}

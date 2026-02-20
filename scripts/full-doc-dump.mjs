/**
 * full-doc-dump.mjs
 * Full dump of both Sanity documents as JSON for offline analysis.
 */
import { createClient } from "@sanity/client";
import { writeFileSync } from "fs";

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

writeFileSync("scripts/dump-siteSettings.json", JSON.stringify(ss, null, 2));
writeFileSync("scripts/dump-landingPage.json", JSON.stringify(lp, null, 2));

console.log("Done. See scripts/dump-siteSettings.json and scripts/dump-landingPage.json");

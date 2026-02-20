/**
 * scan-schema-drift.mjs
 *
 * Fetches siteSettings and landingPage from the Sanity production dataset
 * and walks every field recursively, comparing against known schema paths.
 *
 * Usage: node scripts/scan-schema-drift.mjs
 * Requires: NEXT_PUBLIC_SANITY_PROJECT_ID and NEXT_PUBLIC_SANITY_DATASET env vars
 *           (or falls back to hardcoded defaults below)
 */

import { createClient } from "@sanity/client";
import { readFileSync } from "fs";

// ── Config ──────────────────────────────────────────────────────────────────
let projectId = "jhg5rrpj";
let dataset = "production";

// Try reading .env.local
try {
    const env = readFileSync(".env.local", "utf-8");
    for (const line of env.split("\n")) {
        const [k, v] = line.split("=");
        if (k?.trim() === "NEXT_PUBLIC_SANITY_PROJECT_ID") projectId = v?.trim();
        if (k?.trim() === "NEXT_PUBLIC_SANITY_DATASET") dataset = v?.trim();
    }
} catch { /* no .env.local, use defaults */ }

const client = createClient({ projectId, dataset, apiVersion: "2024-01-01", useCdn: false });

// ── Known schema paths ───────────────────────────────────────────────────────
// Derived from our schema files. Each entry is a dot-path that IS defined.
const KNOWN_SITE_SETTINGS_PATHS = new Set([
    "siteName", "siteName.en", "siteName.ptBR",
    "logo", "logo.asset", "logo.hotspot", "logo.crop", "logo._type",
    "primaryCta", "primaryCta.label", "primaryCta.label.en", "primaryCta.label.ptBR", "primaryCta.href",
    "secondaryCta", "secondaryCta.label", "secondaryCta.label.en", "secondaryCta.label.ptBR", "secondaryCta.href",
    "socialLinks", "socialLinks[].label", "socialLinks[].url", "socialLinks[].iconKey",
    "languages", "languages[].code", "languages[].label",
    "defaultLocale",
    "analytics", "analytics.gtagId", "analytics.metaPixelId",
    "seoDefaults",
    "seoDefaults.title", "seoDefaults.title.en", "seoDefaults.title.ptBR",
    "seoDefaults.description", "seoDefaults.description.en", "seoDefaults.description.ptBR",
    "seoDefaults.ogTitle", "seoDefaults.ogTitle.en", "seoDefaults.ogTitle.ptBR",
    "seoDefaults.ogDescription", "seoDefaults.ogDescription.en", "seoDefaults.ogDescription.ptBR",
    "seoDefaults.ogImage", "seoDefaults.ogImage.asset", "seoDefaults.ogImage._type",
    "seoDefaults.twitterCard",
    // Sanity system fields
    "_id", "_type", "_rev", "_createdAt", "_updatedAt",
]);

const KNOWN_LANDING_PAGE_PATHS = new Set([
    "seo", "seo.title", "seo.title.en", "seo.title.ptBR",
    "seo.description", "seo.description.en", "seo.description.ptBR",
    "seo.ogImage", "seo.ogImage.asset", "seo.ogImage._type",
    "hero",
    "hero.badgeText", "hero.badgeText.en", "hero.badgeText.ptBR",
    "hero.headline", "hero.headline.en", "hero.headline.ptBR",
    "hero.subheadline", "hero.subheadline.en", "hero.subheadline.ptBR",
    "hero.portraitImage", "hero.portraitImage.asset", "hero.portraitImage._type",
    "hero.primaryCta", "hero.primaryCta.label", "hero.primaryCta.label.en", "hero.primaryCta.label.ptBR", "hero.primaryCta.href",
    "hero.secondaryCta", "hero.secondaryCta.label", "hero.secondaryCta.label.en", "hero.secondaryCta.label.ptBR", "hero.secondaryCta.href",
    "navigation", "navigation[].id", "navigation[].label", "navigation[].label.en", "navigation[].label.ptBR", "navigation[].targetSectionId",
    "sections", "sections[]._type", "sections[]._key",
    // Common section fields
    "sections[].sectionId", "sections[].enabled", "sections[].backgroundStyle", "sections[].paddingStyle", "sections[].maxWidth",
    // statsSection
    "sections[].title", "sections[].title.en", "sections[].title.ptBR",
    "sections[].body", "sections[].body.en", "sections[].body.ptBR",
    "sections[].stats", "sections[].stats[].label", "sections[].stats[].label.en", "sections[].stats[].label.ptBR", "sections[].stats[].value",
    // expertiseGridSection
    "sections[].subtitle", "sections[].subtitle.en", "sections[].subtitle.ptBR",
    "sections[].cards", "sections[].cards[].title", "sections[].cards[].title.en", "sections[].cards[].title.ptBR",
    "sections[].cards[].description", "sections[].cards[].description.en", "sections[].cards[].description.ptBR",
    "sections[].cards[].iconKey",
    // frameworksSection
    "sections[].bullets", "sections[].bullets[].en", "sections[].bullets[].ptBR",
    "sections[].sideCardSteps", "sections[].sideCardSteps[].title", "sections[].sideCardSteps[].title.en", "sections[].sideCardSteps[].title.ptBR",
    "sections[].sideCardSteps[].description", "sections[].sideCardSteps[].description.en", "sections[].sideCardSteps[].description.ptBR",
    // journeySection
    "sections[].roles", "sections[].roles[].title", "sections[].roles[].title.en", "sections[].roles[].title.ptBR",
    "sections[].roles[].companyLine", "sections[].roles[].companyLine.en", "sections[].roles[].companyLine.ptBR",
    "sections[].roles[].dates",
    "sections[].roles[].bullets", "sections[].roles[].bullets[].en", "sections[].roles[].bullets[].ptBR",
    // testimonialsSection
    "sections[].testimonials", "sections[].testimonials[].quote", "sections[].testimonials[].quote.en", "sections[].testimonials[].quote.ptBR",
    "sections[].testimonials[].name",
    "sections[].testimonials[].role", "sections[].testimonials[].role.en", "sections[].testimonials[].role.ptBR",
    "sections[].testimonials[].company", "sections[].testimonials[].company.en", "sections[].testimonials[].company.ptBR",
    // ctaSection
    "sections[].subtitle",
    "sections[].buttons", "sections[].buttons[].label", "sections[].buttons[].label.en", "sections[].buttons[].label.ptBR",
    "sections[].buttons[].href", "sections[].buttons[].variant",
    // footerSection
    "sections[].copyright", "sections[].copyright.en", "sections[].copyright.ptBR",
    "sections[].locationLine", "sections[].locationLine.en", "sections[].locationLine.ptBR",
    "sections[].links", "sections[].links[].label", "sections[].links[].label.en", "sections[].links[].label.ptBR",
    "sections[].links[].href",
    // Sanity system fields
    "_id", "_type", "_rev", "_createdAt", "_updatedAt",
]);

// ── Helpers ──────────────────────────────────────────────────────────────────

/**
 * Recursively walks an object and yields { path, value } for every leaf/node.
 * Arrays are collapsed to `[]` in the path (we check schema at array level, not per-index).
 */
function* walkPaths(obj, prefix = "") {
    if (obj === null || obj === undefined) return;
    if (typeof obj !== "object") return;

    const isArray = Array.isArray(obj);
    for (const [rawKey, val] of Object.entries(isArray ? obj[0] ?? {} : obj)) {
        if (rawKey.startsWith("_") && !["_id", "_type", "_key", "_rev", "_createdAt", "_updatedAt"].includes(rawKey)) continue;
        const path = prefix
            ? isArray ? `${prefix}[].${rawKey}` : `${prefix}.${rawKey}`
            : rawKey;

        yield { path, value: val };

        if (val && typeof val === "object" && !Array.isArray(val)) {
            yield* walkPaths(val, path);
        } else if (Array.isArray(val) && val.length > 0 && typeof val[0] === "object") {
            yield* walkPaths([val[0]], path); // walk first element to get structural keys
        }
    }
}

function findUnknown(doc, knownSet, label) {
    const unknown = [];
    for (const { path, value } of walkPaths(doc)) {
        // Normalise array indices: sections.0.title -> sections[].title
        const normalised = path.replace(/\.\d+\./g, "[].").replace(/\.\d+$/, "[]");
        if (!knownSet.has(normalised) && !knownSet.has(path)) {
            unknown.push({ path: normalised, example: JSON.stringify(value)?.slice(0, 80) });
        }
    }
    return unknown;
}

// ── Main ─────────────────────────────────────────────────────────────────────
async function main() {
    console.log(`\n🔍 Fetching documents from ${projectId}/${dataset}...\n`);

    const [siteSettings, landingPage] = await Promise.all([
        client.fetch(`*[_id == "siteSettings"][0]`),
        client.fetch(`*[_id == "landingPage"][0]`),
    ]);

    console.log("═══════════════════════════════════════════════════════");
    console.log("  SCHEMA DRIFT REPORT");
    console.log("═══════════════════════════════════════════════════════\n");

    // --- siteSettings ---
    if (siteSettings) {
        const unknownSS = findUnknown(siteSettings, KNOWN_SITE_SETTINGS_PATHS, "siteSettings");
        console.log(`📄 siteSettings — ${unknownSS.length} unknown field(s)`);
        for (const u of unknownSS) {
            console.log(`   ❌  ${u.path.padEnd(50)}  example: ${u.example}`);
        }
        if (unknownSS.length === 0) console.log("   ✅  All fields recognised.");
    } else {
        console.log("📄 siteSettings — document not found in dataset");
    }

    console.log();

    // --- landingPage ---
    if (landingPage) {
        const unknownLP = findUnknown(landingPage, KNOWN_LANDING_PAGE_PATHS, "landingPage");
        console.log(`📄 landingPage — ${unknownLP.length} unknown field(s)`);
        for (const u of unknownLP) {
            console.log(`   ❌  ${u.path.padEnd(50)}  example: ${u.example}`);
        }
        if (unknownLP.length === 0) console.log("   ✅  All fields recognised.");
    } else {
        console.log("📄 landingPage — document not found in dataset");
    }

    console.log("\n═══════════════════════════════════════════════════════\n");
}

main().catch((e) => { console.error(e); process.exit(1); });

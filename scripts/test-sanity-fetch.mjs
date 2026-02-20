import { createClient } from "@sanity/client";

const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "jhg5rrpj",
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
    apiVersion: "2024-01-01",
    useCdn: false,
    token: process.env.SANITY_API_READ_TOKEN,
});

async function main() {
    console.log("Fetching landingPage...");
    try {
        const lp = await client.fetch(`*[_type == "landingPage"][0]`);
        console.log("Result:", lp ? "FOUND" : "NULL");
        if (lp) {
            console.log("ID:", lp._id);
        }
    } catch (e) {
        console.error("Error fetching landingPage:", e.message);
    }
}

main();

import { createClient } from "next-sanity";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-01-01";

if (!projectId) {
    if (process.env.NODE_ENV === "development") {
        const errorMsg = "NEXT_PUBLIC_SANITY_PROJECT_ID is missing in .env.local. Sanity connection is required.";
        console.error(`ERROR: ${errorMsg}`);
        // Optionally throw error if you want to force configuration
        // throw new Error(errorMsg); 
    }
    console.log("Sanity not configured.");
} else {
    if (typeof window === "undefined") {
        console.log("Sanity connected successfully.");
    }
}

export const client = createClient({
    projectId: projectId || "not-configured",
    dataset,
    apiVersion,
    useCdn: false,
    token: process.env.SANITY_API_READ_TOKEN,
});

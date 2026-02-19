import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemaTypes";

export default defineConfig({
    name: "default",
    title: "Suelen Fonteles Portfolio",

    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "jhg5rrpj",
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",

    basePath: "/studio",

    plugins: [
        structureTool({
            structure: (S) =>
                S.list()
                    .title("Content")
                    .items([
                        // Singleton: Site Settings
                        S.listItem()
                            .title("Site Settings")
                            .id("siteSettings")
                            .child(
                                S.document()
                                    .schemaType("siteSettings")
                                    .documentId("siteSettings")
                                    .title("Site Settings")
                            ),
                        // Singleton: Landing Page
                        S.listItem()
                            .title("Landing Page")
                            .id("landingPage")
                            .child(
                                S.document()
                                    .schemaType("landingPage")
                                    .documentId("landingPage")
                                    .title("Landing Page")
                            ),
                        // Generic types (if any, but we only have 2 singletons)
                        ...S.documentTypeListItems().filter(
                            (listItem) => !["siteSettings", "landingPage"].includes(listItem.getId()!)
                        ),
                    ]),
        }),
        visionTool(),
    ],

    schema: {
        types: schemaTypes,
    },
});

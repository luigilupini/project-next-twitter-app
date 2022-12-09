import { createClient } from "next-sanity";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID; // "pv8y60vp"
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const apiVersion = "2022-11-16";
const useCdn = process.env.NODE_ENV === "production";

export const client = createClient({ projectId, dataset, apiVersion, useCdn });

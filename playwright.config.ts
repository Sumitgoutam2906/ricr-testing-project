import { defineConfig } from "@playwright/test";
import dotenv from "dotenv";

dotenv.config();

export default defineConfig({
testDir: "./e2e",
timeout: 30000,

use: {
baseURL: process.env.BASE_URL,
headless: true,
trace: "on-first-retry",
video: "retain-on-failure"
},
});

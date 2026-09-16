import { defineConfig } from "@playwright/test";
export default defineConfig({ testDir: "./tests", use: { baseURL: "https://duh-personal.localhost", launchOptions: { channel: "chrome" } }, webServer: { command: "npm start", url: "https://duh-personal.localhost", reuseExistingServer: true, ignoreHTTPSErrors: true, timeout: 60000 } });


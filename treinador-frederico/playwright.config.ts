import { defineConfig } from "@playwright/test";
export default defineConfig({ testDir: "./tests", use: { baseURL: "https://treinador-frederico.localhost", launchOptions: { channel: "chrome" } }, webServer: { command: "npm start", url: "https://treinador-frederico.localhost", reuseExistingServer: true, ignoreHTTPSErrors: true, timeout: 60000 } });

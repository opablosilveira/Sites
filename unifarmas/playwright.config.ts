import { defineConfig } from "@playwright/test";
export default defineConfig({
  testDir: "./tests",
  use: {
    baseURL: "https://unifarmas.localhost",
    launchOptions: { channel: "chrome" },
  },
  webServer: {
    command: "npm start",
    url: "https://unifarmas.localhost",
    reuseExistingServer: true,
    ignoreHTTPSErrors: true,
    timeout: 60000,
  },
});

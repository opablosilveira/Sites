import { defineConfig } from "@playwright/test";
export default defineConfig({
  testDir: "./tests",
  use: {
    baseURL: "https://dra-jeice.localhost",
    launchOptions: { channel: "chrome" },
  },
  webServer: {
    command: "npm start",
    url: "https://dra-jeice.localhost",
    reuseExistingServer: true,
    ignoreHTTPSErrors: true,
    timeout: 60000,
  },
});


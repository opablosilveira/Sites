import { defineConfig } from "@playwright/test";
export default defineConfig({
  testDir: "./tests",
  use: {
    baseURL: "https://farmacenter.localhost",
    launchOptions: { channel: "chrome" },
  },
  webServer: {
    command: "npm start",
    url: "https://farmacenter.localhost",
    reuseExistingServer: true,
    ignoreHTTPSErrors: true,
    timeout: 60000,
  },
});

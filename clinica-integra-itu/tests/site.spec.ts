import { expect, test } from "@playwright/test";

test("landing page apresenta conversão e dados oficiais", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { name: /Volte a sorrir/ })).toBeVisible();
  await expect(page.getByRole("link", { name: "Agendar avaliação", exact: true }).first()).toHaveAttribute("href", /wa\.me\/5511910137780/);
  await expect(page.getByText("Travessa do Carmo, 179")).toBeVisible();
  await expect(page.getByText("CROSP 128971")).toBeVisible();
  await expect(page.locator("video.experience-video")).toHaveAttribute("src", "/videos/clinica.mp4");
  await expect(page.getByText("AVALIAÇÕES NO GOOGLE")).toBeVisible();
});

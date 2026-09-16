import { expect, test } from "@playwright/test";
test("DU Personal: ofertas, links e dúvidas", async ({ page }) => {
  const errors: string[] = []; page.on("pageerror", (error) => errors.push(error.message)); await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Treino com propósito");
  await expect(page.getByText("Consultoria Online", { exact: false }).first()).toBeVisible();
  await expect(page.getByRole("heading", { name: "Consultoria + Dieta + Personal" })).toBeVisible();
  await expect(page.getByRole("link", { name: "Falar com o DU Personal" }).first()).toHaveAttribute("href", /instagram\.com\/duh\.personal/);
  await page.locator("summary").filter({ hasText: "A consultoria é online ou presencial?" }).click();
  await expect(page.locator("details[open]")).toContainText("dois formatos");
  await page.locator("footer").scrollIntoViewIfNeeded();
  await expect.poll(() => page.locator("img").evaluateAll((images) => images.every((image) => image.complete && image.naturalWidth > 0))).toBe(true);
  expect(errors).toEqual([]);
});
for (const width of [360, 390, 768, 1440]) test(`layout responsivo em ${width}px`, async ({ page }) => { await page.setViewportSize({ width, height: 900 }); await page.goto("/"); expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true); if (width < 980) { await page.getByRole("button", { name: "Abrir menu" }).click(); await page.getByRole("navigation").getByRole("link", { name: "Consultoria" }).click(); await expect(page).toHaveURL(/#programas$/); } });


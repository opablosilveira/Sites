import { expect, test } from "@playwright/test";
test("ofertas atuais, links e dúvidas", async ({ page }) => {
  const errors: string[] = []; page.on("pageerror", (error) => errors.push(error.message)); await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Seu corpo");
  await expect(page.getByText("Desafio TF", { exact: false }).first()).toBeVisible();
  await expect(page.getByRole("heading", { name: "Protocolo TF Sempre Magra" })).toBeVisible();
  await expect(page.getByText("R$ 47,70").first()).toBeVisible();
  await expect(page.getByRole("link", { name: "Entrar no desafio de 21 dias" })).toHaveAttribute("href", /infinitepay\.io/);
  await expect(page.getByRole("link", { name: "Falar com o Frederico", exact: true })).toHaveAttribute("href", /wa\.me\/5541996250807/);
  await page.locator("summary").filter({ hasText: "Quanto tempo dura cada treino?" }).click();
  await expect(page.locator("details[open]")).toContainText("15 minutos");
  await page.locator("footer").scrollIntoViewIfNeeded();
  await expect.poll(() => page.locator("img").evaluateAll((images) => images.every((image) => image.complete && image.naturalWidth > 0))).toBe(true);
  expect(errors).toEqual([]);
});
for (const width of [360, 390, 768, 1440]) test(`layout responsivo em ${width}px`, async ({ page }) => { await page.setViewportSize({ width, height: 900 }); await page.goto("/"); expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true); if (width < 980) { await page.getByRole("button", { name: "Abrir menu" }).click(); await page.getByRole("navigation").getByRole("link", { name: "Programas" }).click(); await expect(page).toHaveURL(/#programas$/); } });

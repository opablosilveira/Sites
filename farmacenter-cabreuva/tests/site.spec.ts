import { test, expect } from "@playwright/test";

test.use({
  baseURL: "https://farmacenter.localhost",
  launchOptions: { channel: "chrome" },
});

test("conteúdo, jornada de compra, FAQ e privacidade", async ({ page }) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.goto("/");

  await expect(page.getByRole("heading", { level: 1 })).toContainText("O cuidado");
  await page.getByRole("tab", { name: "02 Higiene" }).click();
  await expect(page.getByRole("tabpanel")).toContainText("Cuidado para todos os dias");
  await expect(page.getByRole("tabpanel").getByRole("link")).toHaveAttribute(
    "href",
    /wa.me\/5511942975214/,
  );

  await page.getByRole("tab", { name: "02 Higiene" }).press("ArrowRight");
  await expect(page.getByRole("tab", { name: "03 Bem-estar" })).toBeFocused();
  await expect(page.getByRole("tabpanel")).toContainText("praticidade");

  await page.getByText("A Farmacenter faz entrega?", { exact: true }).click();
  await expect(page.locator("details[open]")).toContainText("prazo");

  await page.getByRole("button", { name: "Privacidade", exact: true }).click();
  await expect(page.getByRole("dialog")).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(page.getByRole("dialog")).not.toBeVisible();

  await page.getByRole("button", { name: "Pausar movimento" }).click();
  await expect(page.getByRole("button", { name: "Ativar movimento" })).toHaveAttribute(
    "aria-pressed",
    "true",
  );

  expect(
    await page
      .locator("img")
      .evaluateAll((images) => images.every((img) => img.complete && img.naturalWidth > 0)),
  ).toBe(true);
  expect(errors).toEqual([]);
});

for (const width of [360, 390, 768, 1440]) {
  test(`layout responsivo e âncoras em ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.goto("/");
    expect(
      await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth),
    ).toBe(true);

    const brokenAnchors = await page.locator('a[href^="#"]').evaluateAll(
      (links) =>
        links.filter((link) => !document.querySelector(link.getAttribute("href")!)).length,
    );
    expect(brokenAnchors).toBe(0);

    if (width < 760) {
      await page.getByRole("button", { name: "Abrir menu" }).click();
      await page.getByRole("navigation").getByRole("link", { name: "Como comprar" }).click();
      await expect(page.getByRole("button", { name: "Abrir menu" })).toHaveAttribute(
        "aria-expanded",
        "false",
      );
      await expect(page).toHaveURL(/#servicos$/);
    }
  });
}

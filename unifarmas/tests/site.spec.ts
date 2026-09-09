import { test, expect } from "@playwright/test";

test.use({
  baseURL: "https://unifarmas.localhost",
  launchOptions: { channel: "chrome" },
});

test("desktop content, category keyboard navigation, FAQ and privacy", async ({
  page,
}) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "Sua vida",
  );
  await page.getByRole("tab", { name: "02 Beleza" }).click();
  await expect(page.getByRole("tabpanel")).toContainText(
    "Seu momento. Seu cuidado.",
  );
  await expect(page.getByRole("tabpanel").getByRole("link")).toHaveAttribute(
    "href",
    /wa.me\/5511921065952/,
  );
  await page.getByRole("tab", { name: "02 Beleza" }).press("ArrowRight");
  await expect(page.getByRole("tab", { name: "03 Bem-estar" })).toBeFocused();
  await expect(page.getByRole("tabpanel")).toContainText("Mais equilíbrio");
  await page.getByText("Como consultar um produto?", { exact: true }).click();
  await expect(page.locator("details[open]")).toContainText("disponibilidade");
  await page.getByRole("button", { name: "Privacidade", exact: true }).click();
  await expect(page.getByRole("dialog")).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(page.getByRole("dialog")).not.toBeVisible();
  await page.getByRole("button", { name: "Pausar movimento" }).click();
  await expect(
    page.getByRole("button", { name: "Ativar movimento" }),
  ).toHaveAttribute("aria-pressed", "true");
  expect(
    await page
      .locator("img")
      .evaluateAll((images) =>
        images.every((img) => img.complete && img.naturalWidth > 0),
      ),
  ).toBe(true);
  expect(errors).toEqual([]);
});

for (const width of [360, 390, 768, 1440]) {
  test(`responsive layout and internal anchors at ${width}px`, async ({
    page,
  }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.goto("/");
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
    ).toBe(true);
    const brokenAnchors = await page
      .locator('a[href^="#"]')
      .evaluateAll(
        (links) =>
          links.filter(
            (link) => !document.querySelector(link.getAttribute("href")!),
          ).length,
      );
    expect(brokenAnchors).toBe(0);
    if (width < 760) {
      await page.getByRole("button", { name: "Abrir menu" }).click();
      await page
        .getByRole("navigation")
        .getByRole("link", { name: "Serviços", exact: true })
        .click();
      await expect(
        page.getByRole("button", { name: "Abrir menu" }),
      ).toHaveAttribute("aria-expanded", "false");
      await expect(page).toHaveURL(/#servicos$/);
    }
  });
}

test("reduced motion disables continuous animation", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  expect(
    await page
      .locator(".marquee-track")
      .evaluate((element) => getComputedStyle(element).animationName),
  ).toBe("none");
  await expect(
    page.getByRole("button", { name: "Pausar movimento" }),
  ).not.toBeVisible();
});

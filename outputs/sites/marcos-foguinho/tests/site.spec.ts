import { test, expect } from '@playwright/test';

test.describe('Landing Page — Marcos Fonseca (@foguinhobjj)', () => {
  test('Renderização da Hero, Favicon e Elementos Principais', async ({ page }) => {
    // Monitorar erros de console
    const consoleErrors: string[] = [];
    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        consoleErrors.push(msg.text());
      }
    });

    await page.goto('/');

    // 1. Título e Metadados
    await expect(page).toHaveTitle(/Marcos Fonseca.*Foguinho/);
    const favicon = page.locator('link[rel="icon"]');
    await expect(favicon).toHaveAttribute('href', '/favicon.png');

    // 2. Hero
    const heroTitle = page.locator('#hero-title');
    await expect(heroTitle).toBeVisible();
    await expect(heroTitle).toContainText('Do seu ponto de partida ao');

    // Selo 90 Dias
    const sealBadge = page.locator('.seal-badge');
    await expect(sealBadge).toBeVisible();
    await expect(sealBadge).toContainText('90');
    await expect(sealBadge).toContainText('Dias');

    // 3. Imagens carregadas sem erro (com suporte a lazy loading)
    const images = page.locator('img');
    const imageCount = await images.count();
    expect(imageCount).toBeGreaterThan(0);

    for (let i = 0; i < imageCount; i++) {
      const img = images.nth(i);
      await img.scrollIntoViewIfNeeded();
      await img.evaluate(async (el: HTMLImageElement) => {
        if (!el.complete) {
          await new Promise((resolve) => {
            el.onload = resolve;
            el.onerror = resolve;
          });
        }
      });
      const isLoaded = await img.evaluate((el: HTMLImageElement) => el.complete && el.naturalWidth > 0);
      expect(isLoaded).toBeTruthy();
    }

    // Sem erros de console JS
    expect(consoleErrors).toEqual([]);
  });

  test('Validação de Links Externos e CTAs (Checkout, WhatsApp, Instagram)', async ({ page }) => {
    await page.goto('/');

    // CTA de Checkout do Desafio 90 Dias
    const checkoutCta = page.locator('#cta-checkout-desafio');
    await expect(checkoutCta).toBeVisible();
    await expect(checkoutCta).toHaveAttribute('target', '_blank');
    await expect(checkoutCta).toHaveAttribute('rel', 'noopener noreferrer');
    await expect(checkoutCta).toHaveAttribute('href', /checkout\.exemplo\.com\/desafio-90-dias/);

    // CTA da Consultoria para WhatsApp
    const whatsappConsultingCta = page.locator('#cta-whatsapp-consultoria');
    await expect(whatsappConsultingCta).toBeVisible();
    await expect(whatsappConsultingCta).toHaveAttribute('target', '_blank');
    await expect(whatsappConsultingCta).toHaveAttribute('rel', 'noopener noreferrer');
    await expect(whatsappConsultingCta).toHaveAttribute('href', /wa\.me\/5598/);

    // Botão flutuante do WhatsApp
    const floatingWhatsapp = page.locator('#floating-whatsapp-btn');
    await expect(floatingWhatsapp).toBeVisible();
    await expect(floatingWhatsapp).toHaveAttribute('href', /wa\.me\/5598/);

    // Link do Instagram na seção de Autoridade
    const instagramLink = page.locator('#authority-instagram-link');
    await expect(instagramLink).toBeVisible();
    await expect(instagramLink).toHaveAttribute('href', 'https://www.instagram.com/foguinhobjj/');
    await expect(instagramLink).toHaveAttribute('target', '_blank');

    // Link do Reels oficial do Desafio 90 Dias na Prova Social
    const reelCta = page.locator('#cta-reel-instagram');
    await expect(reelCta).toBeVisible();
    await expect(reelCta).toHaveAttribute('href', 'https://www.instagram.com/p/DY-75D2RQYV/');
    await expect(reelCta).toHaveAttribute('target', '_blank');
  });

  test('Interatividade do FAQ (details / summary)', async ({ page }) => {
    await page.goto('/');

    const firstFaqItem = page.locator('.faq-item').first();
    const firstFaqSummary = firstFaqItem.locator('.faq-summary');

    // Inicialmente fechado
    await expect(firstFaqItem).not.toHaveAttribute('open', '');

    // Clica para abrir
    await firstFaqSummary.click();
    await expect(firstFaqItem).toHaveAttribute('open', '');

    // Clica para fechar
    await firstFaqSummary.click();
    await expect(firstFaqItem).not.toHaveAttribute('open', '');
  });

  test('Modal de Política de Privacidade', async ({ page }) => {
    await page.goto('/');

    const privacyButton = page.getByRole('button', { name: 'Política de Privacidade' });
    await privacyButton.scrollIntoViewIfNeeded();
    await privacyButton.click();

    const dialog = page.locator('dialog.privacy-modal');
    await expect(dialog).toBeVisible();

    // Fecha o modal
    const closeBtn = dialog.getByRole('button', { name: 'Entendido' });
    await closeBtn.click();
    await expect(dialog).not.toBeVisible();
  });

  test('Menu Mobile Funcional em Telas Menores', async ({ page }) => {
    // Configura viewport mobile
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('/');

    const menuToggle = page.locator('.menu-toggle');
    await expect(menuToggle).toBeVisible();

    const nav = page.locator('nav.nav');
    await expect(nav).not.toHaveClass(/mobile-open/);

    // Abre o menu
    await menuToggle.click();
    await expect(nav).toHaveClass(/mobile-open/);

    // Clica num link para navegar e fechar o menu
    const navLink = nav.getByText('Diagnóstico');
    await navLink.click();
    await expect(nav).not.toHaveClass(/mobile-open/);
  });

  const viewports = [
    { width: 360, height: 740, name: 'Mobile 360px' },
    { width: 390, height: 844, name: 'Mobile 390px' },
    { width: 768, height: 1024, name: 'Tablet 768px' },
    { width: 1440, height: 900, name: 'Desktop 1440px' },
  ];

  for (const vp of viewports) {
    test(`Sem overflow horizontal em ${vp.name} (${vp.width}px)`, async ({ page }) => {
      await page.setViewportSize({ width: vp.width, height: vp.height });
      await page.goto('/');

      const hasOverflow = await page.evaluate(() => {
        return document.documentElement.scrollWidth > window.innerWidth;
      });

      expect(hasOverflow).toBeFalsy();
    });
  }
});

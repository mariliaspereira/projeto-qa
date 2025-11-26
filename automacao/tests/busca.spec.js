const { test, expect } = require('@playwright/test');

test('Deve buscar no Google e validar o título', async ({ page }) => {
  await test.step('Acessar Google', async () => {
    await page.goto('https://www.google.com', { waitUntil: 'domcontentloaded' });
    // Evita bloqueio do Google
    await page.addInitScript(() => {
      Object.defineProperty(navigator, 'webdriver', { get: () => false });
    });
  });

  await test.step('Aceitar cookies se necessário', async () => {
    const aceitar = page.locator('button', { hasText: /Aceitar|Accept all|Concordo|Agree/i });
    if (await aceitar.isVisible().catch(() => false)) {
      await aceitar.click();
    }
  });

  await page.addInitScript(() => {
  Object.defineProperty(navigator, 'webdriver', { get: () => false });
});

  await test.step('Preencher busca e pesquisar', async () => {
    await page.waitForSelector('input[name="q"]', { timeout: 5000 });
    await page.fill('input[name="q"]', 'Python');
    await page.keyboard.press('Enter');
    await page.waitForLoadState('networkidle');
  });

  await test.step('Validar título e resultados', async () => {
    await expect(page).toHaveTitle(/Python/i);
    const resultados = page.locator('#search');
    await expect(resultados).toBeVisible();
  });
});
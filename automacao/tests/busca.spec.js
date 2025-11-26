const { test, expect } = require('@playwright/test');

test('Deve buscar no Google e validar o título', async ({ page }) => {
  // Configuração inicial
  await page.setViewportSize({ width: 1280, height: 800 });
  
  console.log('Abrindo Google');
  await page.goto('https://www.google.com', { waitUntil: 'domcontentloaded' });

  // Aceitar cookies com verificação
  try {
    console.log('Tentando aceitar cookies');
    await page.click('button:has-text("Aceitar tudo")', { timeout: 3000 });
    await page.waitForSelector('button:has-text("Aceitar tudo")', { state: 'hidden', timeout: 5000 });
  } catch (error) {
    console.log('Popup de cookies não encontrado ou já fechado');
  }

  // Busca com wait mais robusto
  console.log('Preenchendo busca');
  const searchInput = page.locator('[name="q"]');
  await searchInput.waitFor({ state: 'visible', timeout: 10000 });
  
  await searchInput.fill('Python');
  await page.keyboard.press('Enter');

  // Espera mais específica para resultados
  await page.waitForURL('**/search?**', { timeout: 15000 });
  
  // Verificação do título
  await expect(page).toHaveTitle(/Python/i);
});
// automacao/tests/clique_botao.spec.js
const { test, expect } = require('@playwright/test');

test('Deve clicar em botão e validar ação', async ({ page }) => {
  await page.goto('https://www.selenium.dev/selenium/web/web-form.html');

  // Clicar no botão
  const botao = page.locator('button');
  await expect(botao).toBeVisible();
  await botao.click();

  // Validar resultado após o clique
  const mensagem = page.locator('#message');
  await expect(mensagem).toBeVisible();
  await expect(mensagem).toHaveText('Received!');
});

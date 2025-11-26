// automacao/tests/login_invalido.spec.js
const { test, expect } = require('@playwright/test');

test('Login inválido deve apresentar mensagem de erro', async ({ page }) => {
  await page.goto('https://practicetestautomation.com/practice-test-login/');

  // Preencher usuário incorreto
  await page.fill('#username', 'usuario_errado');
  await page.fill('#password', 'senhaErrada');

  // Clicar no login
  await page.click('#submit');

  // Validar mensagem de erro
  const erro = page.locator('#error');
  await expect(erro).toBeVisible();
  await expect(erro).toContainText('Your username is invalid!');
});

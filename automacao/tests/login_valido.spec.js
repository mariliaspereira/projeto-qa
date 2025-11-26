// automacao/tests/login_valido.spec.js
const { test, expect } = require('@playwright/test');

test('Login válido deve redirecionar para página segura', async ({ page }) => {
  await page.goto('https://practicetestautomation.com/practice-test-login/');

  // Preencher usuário válido
  await page.fill('#username', 'student');
  await page.fill('#password', 'Password123');

  // Clicar no botão de login
  await page.click('#submit');

  // Validar que entrou na página segura
  await expect(page).toHaveURL(/success/);

  const mensagem = page.locator('h1');
  await expect(mensagem).toHaveText('Logged In Successfully');
});

<<<<<<< HEAD

=======
// automacao/tests/pagina_carrega.spec.js
const { test, expect } = require('@playwright/test');

test('Deve carregar a página e validar título e elementos', async ({ page }) => {
  // Acessar uma página de exemplo
  await page.goto('https://example.com');

  // Validar o título da página
  await expect(page).toHaveTitle(/Example Domain/);

  // Validar que um texto específico aparece
  const heading = await page.locator('h1');
  await expect(heading).toBeVisible();
  await expect(heading).toHaveText('Example Domain');

  // Validar se o botão/link existe
  const link = page.locator('a');
  await expect(link).toBeVisible();
});
>>>>>>> 3a7ecaa (update)

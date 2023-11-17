import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  const weightInput = page.getByTestId('weight_input');

  await page.goto('https://wized-sandbox-3.webflow.io/');

  await weightInput.click();
  await weightInput.fill('85');

  await page.getByTestId('height_input').click();
  await page.getByTestId('height_input').fill('180');
  await page.getByTestId('submit').click();
});

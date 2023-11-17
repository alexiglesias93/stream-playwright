import { test, expect } from '@playwright/test';
import { addNumbers, calculateBMI, newFeature } from '../src';

test('addNumbers adds numbers correctly', () => {
  const result = addNumbers(2, 5);

  expect(result).toBe(7);
});

test('BMI outputs the right numbers', () => {
  expect(calculateBMI(85, 180)).toBeCloseTo(26.23);
  expect(calculateBMI(90, 150)).toBeCloseTo(40);
});

test('Calculator works fine', async ({ page }) => {
  await page.goto('https://wized-sandbox-3.webflow.io/');

  const weightInput = page.getByTestId('weight_input');
  const heightInput = page.getByTestId('height_input');
  const submitButton = page.getByTestId('submit');
  const resultElement = page.getByTestId('result');

  await weightInput.fill('85');
  await heightInput.fill('180');

  await submitButton.click();

  await expect(resultElement).toHaveText('26.23');
});

test('Post endpoint returns the correct data', async ({ request }) => {
  const result = await request.get(
    'https://jsonplaceholder.typicode.com/posts/1'
  );

  const data = await result.json();

  expect(data).toEqual({
    userId: 1,
    id: 1,
    title:
      'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
  });
});

test('jQuery works fine', async ({ page }) => {
  await page.goto('https://wized-sandbox-3.webflow.io/');

  const weightInput = page.getByTestId('weight_input');

  await page.evaluate(() => {
    // @ts-expect-error jQuery is not defined
    window.$('[data-testid="weight_input"]').addClass('test');
  });

  // Run the addClass method from jQuery
  // Check if the class was added to the input

  await expect(weightInput).toHaveClass(/test/);
});

test('New feature is working fine', () => {
  const result = newFeature();

  expect(result).toBe(true);
});

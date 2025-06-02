import { test, expect } from '@playwright/test';

test.skip('test_first', async ({ page }) => {
  await page.goto('https://playwright.dev/docs/api/class-keyboard');
  await page.getByRole('button', { name:'Search (Ctrl+K)'})
  const searchbox = await page.getByRole('searchbox', { name: 'Search' })
  searchbox.click;

  await page.getByPlaceholder('Search docs').fill('Test');
  await page.getByRole('searchbox', { name: 'Search' }).press('Enter');
  await page.getByRole('link', { name: 'Getting started' }).click();
});
import { test, expect } from '@playwright/test';

test('keeyboardClass_test', async ({ page }) => {
  await page.goto('https://amazon.in');

  await page.locator("//input[@id='twotabsearchtextbox']").click();
  await page.locator("//input[@id='twotabsearchtextbox']").fill('Playwright');
  await page.keyboard.press('Enter');
 // expect(await page.title()).toContain('Playwright');
  
 
})
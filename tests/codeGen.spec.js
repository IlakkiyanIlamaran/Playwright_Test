import { test, expect, defineConfig, devices } from '@playwright/test';
import { text } from 'stream/consumers';

test.skip('Login_check', async ({ page }) => {
  
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('banner').getByRole('img', { name: 'profile picture' }).click();
  const validation = await page.locator("//h6[normalize-space()='Dashboard']").textContent();
  await text(validation.includes('Dashboard')).toBeTruthy;
  await page.getByRole('menuitem', { name: 'Logout' }).click();
});



test('test_Admin_Module_Navigation', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  // await page.getByRole('textbox', { name: 'Username' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  const dashboardValidation = await page.getByRole('heading', { name: 'Dashboard' }).textContent();
  await expect(dashboardValidation.includes('Dashboard')).toBeTruthy;
  await page.getByRole('link', { name: 'Admin' }).click();
  const validation = await page.locator("//h6[normalize-space()='Admin']").textContent();
  await expect(validation.includes('Admin')).toBeTruthy;
  await page.locator('span').filter({ hasText: 'Sushma Sushreddy' }).click();
  await page.getByRole('menuitem', { name: 'Logout' }).click();
  await page.getByRole('menuitem', { name: 'Logout' }).click();
});



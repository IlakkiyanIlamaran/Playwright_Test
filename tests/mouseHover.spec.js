import { test, expect } from '@playwright/test';

test("mouse_Hover_Test", async({page})=>{

   await page.goto("https://freelance-learn-automation.vercel.app/login");
   await page.locator("//input[@id='email1']").fill('admin@email.com');
   await page.waitForTimeout(2000)
   await page.locator("//input[@id='password1']").fill('admin@123');
   await page.waitForTimeout(2000)
   await page.locator("//button[text()='Sign in']").click();
   await page.waitForTimeout(2000)
   await page.locator("//span[normalize-space()='Manage']").hover();
   await page.waitForTimeout(2000)
   await page.locator("//img[@alt='manage course']").click();
    await page.waitForTimeout(10000)
   
   await expect(page).toHaveURL("https://freelance-learn-automation.vercel.app/course/manage");
   console.log("Test Successfully completed")

})
import { test, expect } from '@playwright/test';

test("validation Login Error", async function ({page}) {

   await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
   await page.getByPlaceholder("Username").fill("Admin");
   await page.getByPlaceholder("Password").fill("Reset@123");
   await page.locator("//button[@type='submit']").click();

   const errorMessage = await page.locator("//p[text()='Invalid credentials']").textContent();
   console.log("The Error message is "+":"+errorMessage)
   expect(errorMessage.includes("Invalid")).toBeTruthy;
   


    
})
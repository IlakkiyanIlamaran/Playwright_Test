import { test, expect } from '@playwright/test';
import { text } from 'stream/consumers';

test.skip("The test 1", async function({page}) {
    await page.goto("https://www.amazon.in/");
    await page.locator('#twotabsearchtextbox').fill('test');
    await page.locator('#nav-search-submit-button').click();
    const results = await page.locator('//h2[text()="Results"]').textContent();
    console.log(results)
    await expect(results).toBe('Results');  //assertion
    await expect(page).toHaveTitle("Amazon")

})

test('OrrangeHr_Login', async function ({ page }) {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    const userName = await page.getByPlaceholder("Username");
    await userName.fill('Admin');
    const password = await page.getByPlaceholder("Password");
    await password.fill("admin123");
    const login = await page.locator("//button[@type='submit']");
    await login.click();
    // Create locator
    const dashboard = page.locator("//h6[text()='Dashboard']");
    await dashboard.isVisible
    // Optional: Log text content
    const dashboardText = await dashboard.textContent();
    console.log("Dashboard:", dashboardText);
    // Correct assertion using locator
    await expect(dashboard).toHaveText("Dashboard")
    console.log("Successfully LoginIn")
});


test.only('Log_Out', async ({ page }) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    const userName = await page.getByPlaceholder("Username");
    await userName.fill('Admin');
    const password = await page.getByPlaceholder("Password");
    await password.fill("admin123");
    const login = await page.locator("//button[@type='submit']");
    await login.click();
  // Click on the user dropdown icon
    const Logoutdropdown = await page.locator("//img[@alt='profile picture']")
    await Logoutdropdown.click();


  // Click on the "Logout" option
  const logOut = page.getByText("Logout");
  await logOut.click();

  // Verify that the page navigated to the login URL
  await expect(page).toHaveURL(/login/);
});



// test ('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });
import { test, expect } from '@playwright/test';

test(test,async({page})=>{

    await page.goto("https://the-internet.herokuapp.com/upload");
    //using the setInputFiles method to upload a file
    await page.locator("#file-upload").setInputFiles("C:\Users\TGD984\Downloads\image.png");
    await page.locator("#file-submit").click();
    //validating the file upload


})
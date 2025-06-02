import { test, expect} from '@playwright/test';

test("Dropdown_Selection", async ({page})=> {
    await page.goto("https://freelance-learn-automation.vercel.app/signup");
    await page.locator("//select[@id='state']").selectOption({label:"Tamil Nadu"});
    await page.waitForTimeout(3000)

   let listOfStates =  await page.$$("option")

   for(let i=0;i<listOfStates.length;i++){
       
     let value = listOfStates[i]
     let list = await value.textContent()
     console.log(list)
   }

})


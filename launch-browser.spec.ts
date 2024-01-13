import { chromium, test } from "@playwright/test";
test("To launch a browser", async () => {

    //Create browserInstance
    const browserInstance = await chromium.launch({ headless: false, channel: "chrome"});
    
    
    //Get browserContext
    const browserContext = await browserInstance.newContext();
   
    //Get Page
    const page = await browserContext.newPage();

    //Open URL
    await page.goto("https://login.salesforce.com/");

    //Print the URL
    console.log(page.url());
});

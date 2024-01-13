 
 /* Create a new browser instance
 * Create a new browser context
 * Create a new page
 * Load the url 
 * https://login.salesforce.com/
 * Print the url
 * Enter the username
 * Enter the password
 * Click Login button
 * Verify the title of the page (using page.title() method)
 * 
 */

 import { chromium, expect, test } from "@playwright/test";
import { assert } from "console";
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

    //Enter the username
    await page.locator("#username").fill("pradeep@fisglobal.com");

    //Enter the password
    await page.locator("#password").fill("abcd@1234");

    //Click on Login Button
    await page.locator("#Login").click();

    await page.waitForTimeout(10000);

    //Verify the title of the page
    expect(await page.title()).toBe("Lightning Experience");

    //Close the Browser Context
    await browserContext.close();

    //Close the Browser Instance
    await browserInstance.close();
});
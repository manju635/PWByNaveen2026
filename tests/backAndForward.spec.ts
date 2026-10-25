import { test, expect } from '@playwright/test';

test('back and forward button test', async ({ page }) => {
    await page.goto('https://playwright.dev');
    console.log(await page.title());

    await page.waitForTimeout(2000);

    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    console.log(await page.title());
    await page.waitForTimeout(2000);

    await page.goBack();
    console.log(await page.title());
    await page.waitForTimeout(2000);


    await page.goForward();
    console.log(await page.title());
    await page.waitForTimeout(2000);


    await page.goBack();
    console.log(await page.title());
    await page.waitForTimeout(2000);


    await page.goForward();
    console.log(await page.title());
    await page.waitForTimeout(2000);

    //refresh/reload the page:
    await page.reload();



});
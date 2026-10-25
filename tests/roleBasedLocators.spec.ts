
import { test, expect, Locator } from '@playwright/test';

test('locator test', async ({ page }) => {
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');

    //h1 to h6
    let header = await page.getByRole('heading', { name: 'Returning Customer', level: 2 }).textContent();
    console.log(header);

    await page.getByRole('textbox', { name: 'E-Mail Address' }).fill('naveen@gmail.com');
    await page.getByRole('textbox', { name: 'Password' }).fill('test@123');
    await page.getByRole('button', { name: 'Login' }).click();

    //await page.getByRole('link', { name: 'Register' }).click();

    await page.getByRole('link', { name: 'Forgotten Password' }).last().click();

    //await page.getByRole('link', { name: 'Forgotten Password' }).nth(1).click();

    await page.pause();

});
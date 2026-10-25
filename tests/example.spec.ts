import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test('verify title exists', async({ page }) => {
  await page.goto("https://naveenautomationlabs.com/opencart/");
   let title:String = await page.title();
   console.log("Title of the page is : "+title);

   if(title==='Account Login'){
    console.log('pass');
   }
else
{
  console.log('Failed....title is wrong');
}
await page.pause();
});
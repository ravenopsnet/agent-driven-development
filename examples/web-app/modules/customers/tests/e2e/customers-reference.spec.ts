import { test, expect } from '@playwright/test'

test('customers module reference panel can be displayed from the home page', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByText('Customers module')).toBeVisible()
})

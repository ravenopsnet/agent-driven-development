import { expect, test } from '@playwright/test'

test('loads the reference home page', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByRole('heading', { name: /Agent Driven Development Web App/i })).toBeVisible()
})

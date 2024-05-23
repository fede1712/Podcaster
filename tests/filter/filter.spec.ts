import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:3000");
});

test.describe("testing filter", () => {
  test("Filter is working correctly", async ({ page }) => {
    const filter = page.getByPlaceholder("Filter podcast...");

    await expect(filter).toBeVisible();
  });
});

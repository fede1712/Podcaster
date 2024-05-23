import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:3000/");
});

test.describe("Testing podcast card", () => {
  test("Podcast card is render correctly", async ({ page }) => {
    const podcastCardComponent = page.getByTestId("podcast-card-1535809341");

    await expect(podcastCardComponent).toBeVisible();
  });
});

import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:3000/podcast/1535809341");
});

test.describe("Testing podcast detail card", () => {
  test("Podcast detail card is render correctly", async ({ page }) => {
    const podcastDetailCardComponent = page.getByTestId("podcast-detail-card");

    await expect(podcastDetailCardComponent).toBeVisible();
  });
});

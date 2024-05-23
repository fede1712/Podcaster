import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:3000/podcast/1535809341");
});

test.describe("Testing Episode list", () => {
  test("Episode list is render correctly", async ({ page }) => {
    const episodeListComponent = page.getByTestId("episode-list");

    await expect(episodeListComponent).toBeVisible();
  });
});

import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:3000/podcast/1535809341/episode/1000656365905");
});

test.describe("testing Episode details", () => {
  test("Episode details is render correctly", async ({ page }) => {
    const episodeDetail = page.getByTestId("episode-detail");

    await expect(episodeDetail).toBeVisible();
  });
});

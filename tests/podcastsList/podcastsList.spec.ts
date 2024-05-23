import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:3000/");
});

test.describe("Testing podcast list", () => {
  test("Podcast list is render correctly", async ({ page }) => {
    const podcastListComponent = page.getByTestId("podcast-list");

    await expect(podcastListComponent).toBeVisible();
  });
});

import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("");

  await expect(page).toHaveTitle(/Podcaster/);

  await page.click("text=Podcaster");

  await expect(page).toHaveURL("/");

  await expect(page.locator("h1")).toContainText("Podcaster");
});

test("Go to details podcast", async ({ page }) => {
  await page.goto("/podcast/1535809341");

  await expect(page).not.toBeNull();

  await page.click("text=Podcaster");

  await expect(page).toHaveURL("/");

  await expect(page.locator("h1")).toContainText("Podcaster");
});

test("Go to episodes details", async ({ page }) => {
  await page.goto("/podcast/1535809341/episode/1000656365905");

  await expect(page).not.toBeNull();

  await page.click("text=Podcaster");

  await expect(page).toHaveURL("/");

  await expect(page.locator("h1")).toContainText("Podcaster");
});

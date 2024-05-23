import { test, expect } from "@playwright/test";

test("Header renders correctly and link works", async ({ page }) => {
  await page.goto("http://localhost:3000/podcast/1535809341");

  const header = await page.waitForSelector("header");
  expect(header).toBeTruthy();

  const title = await header.$eval("h1", (element) => element.textContent);
  expect(title).toContain("Podcaster");

  await page.click("text=Podcaster");

  const url = page.url();
  expect(url).toBe("http://localhost:3000/podcast/1535809341");
});

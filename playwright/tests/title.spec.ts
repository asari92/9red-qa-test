import { test, expect } from "@playwright/test";

test("playwright.dev has expected page title", async ({ page }) => {
    await page.goto("https://playwright.dev/", { waitUntil: "domcontentloaded" });
    await expect(page).toHaveTitle(/Playwright/);
});

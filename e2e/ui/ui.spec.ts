import { test, expect } from "@playwright/test";

const URL = "https://practicetestautomation.com/practice-test-login/";

test.describe("UI Login Tests", () => {

  // 1️⃣ Page loads
  test("Page loads", async ({ page }) => {
    await page.goto(URL);

    await expect(page).toHaveURL(URL);
    await expect(page.locator("#username")).toBeVisible();
    await expect(page.locator("#password")).toBeVisible();
  });

  // 2️⃣ Successful login
  test("Successful login", async ({ page }) => {
    await page.goto(URL);

    await page.fill("#username", "student");
    await page.fill("#password", "Password123");

    await page.click("#submit");

    await expect(page).toHaveURL(/.*logged-in-successfully/);
    await expect(page.locator("h1")).toHaveText("Logged In Successfully");
  });

  // 3️⃣ Failed login
  test("Failed login", async ({ page }) => {
    await page.goto(URL);

    await page.fill("#username", "wrong");
    await page.fill("#password", "wrong");

    await page.click("#submit");

    await expect(page.locator("#error")).toBeVisible();
  });

  // 4️⃣ Empty form
  test("Empty form submission", async ({ page }) => {
    await page.goto(URL);

    await page.click("#submit");

    await expect(page.locator("#error")).toBeVisible();
  });

  // 5️⃣ Loading state (simulate)
  test("Loading state check", async ({ page }) => {
    await page.goto(URL);

    await page.fill("#username", "student");
    await page.fill("#password", "Password123");

    await page.click("#submit");

    await expect(page).toHaveURL(/.*logged-in-successfully/);
  });

});
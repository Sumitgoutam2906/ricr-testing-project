import { test, expect } from "@playwright/test";
import { LoginPage } from "./pages/LoginPage";

test.describe("UI Login Tests (POM)", () => {

// 1️⃣ Page loads
test("Page loads", async ({ page }) => {
const loginPage = new LoginPage(page);


await loginPage.goto();

await expect(page.locator("#username")).toBeVisible();
await expect(page.locator("#password")).toBeVisible();


});

// 2️⃣ Successful login
test("Successful login", async ({ page }) => {
const loginPage = new LoginPage(page);


await loginPage.goto();
await loginPage.login("student", "Password123");

await expect(page).toHaveURL(/.*logged-in-successfully/);
await expect(loginPage.getSuccessHeading()).toHaveText("Logged In Successfully");


});

// 3️⃣ Failed login
test("Failed login", async ({ page }) => {
const loginPage = new LoginPage(page);


await loginPage.goto();
await loginPage.login("wrong", "wrong");

await expect(loginPage.getError()).toBeVisible();


});

// 4️⃣ Empty form submission
test("Empty form submission", async ({ page }) => {
const loginPage = new LoginPage(page);


await loginPage.goto();
await page.click("#submit");

await expect(loginPage.getError()).toBeVisible();


});

// 5️⃣ Loading state check
test("Loading state check", async ({ page }) => {
const loginPage = new LoginPage(page);


await loginPage.goto();
await loginPage.login("student", "Password123");

await expect(page).toHaveURL(/.*logged-in-successfully/);


});

});

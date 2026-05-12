import { Page } from "@playwright/test";

export class LoginPage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto("https://practicetestautomation.com/practice-test-login/");
  }

  async login(username: string, password: string) {
    await this.page.fill("#username", username);
    await this.page.fill("#password", password);
    await this.page.click("#submit");
  }

  // ❌ REMOVE async
  getError() {
    return this.page.locator("#error");
  }

  // ❌ REMOVE async
  getSuccessHeading() {
    return this.page.locator("h1");
  }
}
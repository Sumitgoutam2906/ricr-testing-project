import { Page } from "@playwright/test";

export class LoginPage {
constructor(private page: Page) {}

async goto() {
await this.page.goto(process.env.BASE_URL + "/practice-test-login/");
await this.page.waitForSelector("#username"); // 🔥 important fix
}

async login(username: string, password: string) {
await this.page.waitForSelector("#username"); // 🔥 stability
await this.page.fill("#username", username);
await this.page.fill("#password", password);
await this.page.click("#submit");
}

getError() {
return this.page.locator("#error");
}

getSuccessHeading() {
return this.page.locator("h1");
}
}

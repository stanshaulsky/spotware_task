import { test as setup, expect } from "@playwright/test";
import { TradePage } from "../pages/trade.page";

const authFile = "playwright/.auth/user.json";
const email = process.env.USER_EMAIL;
const password = process.env.USER_PASSWORD;

setup("authenticate", async ({ page }) => {
  if (email && password) {
    const tradePage = new TradePage(page);
    await tradePage.signInFromDialog(email, password);
    await expect(
      tradePage.page.locator(tradePage.Locators.accountControlPreview),
    ).toBeVisible();

    await page.context().storageState({ path: authFile });
  } else throw new Error("No auth data provided");
});

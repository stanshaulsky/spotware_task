import { TradePage } from "../pages/trade.page";
import { test as base } from "@playwright/test";

type MyFixtures = {
  tradePage: TradePage;
};

export const test = base.extend<MyFixtures>({
  tradePage: async ({ page }, use) => {
    const tradePage = new TradePage(page);
    await tradePage.page.goto("/");
    await use(tradePage);
  },
});

export { expect } from "@playwright/test";

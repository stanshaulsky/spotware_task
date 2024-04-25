import { test, expect } from "../fixtures/common.fixtures";

const POSITION_USE_CASE = "simple_small_order";

test("Market Order creation", async ({ tradePage }) => {
  await test.step("Open dialog", async () => {
    await tradePage.openOrderCreationDialogFrom(
      tradePage.tradeWatch.Locators.positions.tab,
    );
    await tradePage.orderCreationDialog.tabs.switchTabTo(
      tradePage.orderCreationDialog.Locators.markerOrderTab,
    );
    await expect(
      tradePage.page.locator(
        tradePage.orderCreationDialog.Locators.marketOrderSubmitBtn,
      ),
    ).toBeVisible();
  });

  await test.step("Place order", async () => {
    await tradePage.orderCreationDialog.orderPlace();
    await expect(
      tradePage.page.locator(
        tradePage.orderCreationDialog.Locators.thankYouForm,
      ),
    ).toBeVisible();
    await tradePage.orderCreationDialog.thankYouFormClose();
  });

  await test.step("Check placed order", async () => {
    await tradePage.tradeWatch.rememberPosition(POSITION_USE_CASE);
    await expect(
      tradePage.page.locator(tradePage.tradeWatch.Locators.positions.counter),
    ).toHaveText("1");
    await expect(
      tradePage.page
        .locator(tradePage.tradeWatch.Locators.positions.tablePositionRows)
        .first(),
    ).toBeVisible();
    //Additional order info checks here
  });
  await test.step("Delete placed order", async () => {
    await tradePage.tradeWatch.cancelPosition(POSITION_USE_CASE);

    await expect(
      tradePage.page.locator(
        tradePage.tradeWatch.Locators.positions.tablePositionRows,
      ),
    ).toBeHidden();
  });
});

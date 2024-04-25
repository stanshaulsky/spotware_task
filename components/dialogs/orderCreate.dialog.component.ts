import { Page } from "@playwright/test";
import { BasicMultitab } from "../multitabs/basic.multitab.component";
import { BasicDialog } from "./basic.dialog.component";

export class OrderCreateDialog extends BasicDialog {
  tabs: BasicMultitab;

  constructor(readonly page: Page) {
    super(page);
    this.tabs = new BasicMultitab(page);
  }
  public get Locators() {
    return {
      ...super.Locators,
      marketOrderSubmitBtn: "data-test-id=new-position-submit-control",
      markerOrderTab: "data-test-id=market-order",
      thankYouForm: "data-test-id=thank-you-form",
      thankYoyFormOkBtn: "data-test-id=ok-button",
    };
  }

  public async orderPlace(): Promise<void> {
    await this.tabs.switchTabTo(this.Locators.markerOrderTab);
    await this.page.click(this.Locators.marketOrderSubmitBtn);
  }

  public async thankYouFormClose(): Promise<void> {
    await this.page.click(this.Locators.thankYoyFormOkBtn);
  }
}

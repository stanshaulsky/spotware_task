import { Page } from "@playwright/test";

export class BasicDialog {
  constructor(protected readonly page: Page) {}

  public get Locators() {
    return {
      dialogContainer: "data-test-id=dialog",
      dialogHeader: "data-test-id=dialog-header",
      cancelBtn: "data-testid=dialog-header-close",
    };
  }
}

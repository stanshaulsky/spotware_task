import { Locator, Page } from "@playwright/test";

export class BasicMultitab {
  constructor(protected readonly page: Page) {}

  public get Locators() {
    return {
      multitabContainer: "data-test-id=queue-component",
    };
  }

  public async switchTabTo(tab: string): Promise<void> {
    await this.page.click(tab);
  }
}

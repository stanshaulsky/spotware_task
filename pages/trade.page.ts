import { timeStamp } from "console";
import { Page } from "playwright";
import { LoginDialog } from "../components/dialogs/login.dialog.component";
import { OrderCreateDialog } from "../components/dialogs/orderCreate.dialog.component";
import { TradeWatchMultitab } from "../components/multitabs/tradeWatch.multitab.component";

export class TradePage {
  tradeWatch: TradeWatchMultitab;
  orderCreationDialog: OrderCreateDialog;

  constructor(readonly page: Page) {
    this.tradeWatch = new TradeWatchMultitab(page);
    this.orderCreationDialog = new OrderCreateDialog(page);
  }

  public get Locators() {
    return {
      logInBtn: "data-test-id=log-in",
      accountControlPreview: "data-test-id=account-control",
    };
  }

  public async signInFromDialog(
    email: string,
    password: string,
  ): Promise<void> {
    await this.page.goto("/");
    await this.page.click(this.Locators.logInBtn);
    const loginDialog = new LoginDialog(this.page);
    await loginDialog.signIn(email, password);
  }

  public async openOrderCreationDialogFrom(targetTab: string): Promise<void> {
    await this.tradeWatch.switchTabTo(targetTab);
    await this.page.click(this.tradeWatch.Locators.positions.newOrderBtn);
  }
}

import { BasicDialog } from "./basic.dialog.component";

export class LoginDialog extends BasicDialog {
  public get Locators() {
    return {
      ...super.Locators,
      signInTab: "data-test-id=signin-tab",
      signUpTab: "data-test-id=signup-tab",
      emailInput: "data-test-id=email >> input",
      passwordInput: "data-test-id=password >> input",
      submitBtn: "data-test-id=submit",
    };
  }

  public async signIn(email: string, password: string): Promise<void> {
    await this.page.click(this.Locators.signInTab);
    await this.page.fill(this.Locators.emailInput, email);
    await this.page.fill(this.Locators.passwordInput, password);
    await this.page.click(this.Locators.submitBtn);
  }
}

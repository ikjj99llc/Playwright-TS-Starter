import { Locator, Page } from '@playwright/test';
import { InventoryPage } from './InventoryPage';

export class LoginPage {
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly errorMessage: Locator;
  readonly dismissErrorButton: Locator;

  constructor(readonly page: Page) {
    this.usernameInput = page.getByRole('textbox', { name: 'Username' });
    this.passwordInput = page.getByRole('textbox', { name: 'Password' });
    this.loginButton = page.getByRole('button', { name: 'Login' });
    this.errorMessage = page.getByRole('alert');
    this.dismissErrorButton = page.getByRole('button', { name: 'Dismiss error' });
  }

  async fillUsername(username: string): Promise<void> {
    await this.usernameInput.fill(username);
  }

  async fillPassword(password: string): Promise<void> {
    await this.passwordInput.fill(password);
  }

  async clickLogin(): Promise<InventoryPage> {
    await this.loginButton.click();
    return new InventoryPage(this.page);
  }

  async getErrorMessageText(): Promise<string> {
    return this.errorMessage.innerText();
  }

  async clickDismissErrorButton(): Promise<void> {
    await this.dismissErrorButton.click();
  }

  async fillCredentials(username: string, password: string): Promise<void> {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
  }
}

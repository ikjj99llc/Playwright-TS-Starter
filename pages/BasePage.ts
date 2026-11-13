import { Locator, Page } from '@playwright/test';
import { CartPage } from './CartPage';
import { InventoryPage } from './InventoryPage';
import { LoginPage } from './LoginPage';

export class BasePage {
  readonly openMenuButton: Locator;
  readonly closeMenuButton: Locator;
  readonly allItemsLink: Locator;
  readonly logoutLink: Locator;
  readonly shoppingCartLink: Locator;

  constructor(readonly page: Page) {
    this.openMenuButton = page.getByRole('button', { name: 'Open Menu' });
    this.closeMenuButton = page.getByRole('button', { name: 'Close Menu' });
    this.allItemsLink = page.getByRole('button', { name: 'All Items' });
    this.logoutLink = page.getByRole('button', { name: 'Logout' });
    this.shoppingCartLink = page.getByRole('button', { name: /^Cart/ });
  }

  async clickOpenMenu(): Promise<void> {
    await this.openMenuButton.click();
  }

  async clickCloseMenu(): Promise<void> {
    await this.closeMenuButton.click();
  }

  async clickAllItems(): Promise<InventoryPage> {
    await this.allItemsLink.click();
    return new InventoryPage(this.page);
  }

  async clickLogout(): Promise<LoginPage> {
    await this.logoutLink.click();
    return new LoginPage(this.page);
  }

  async clickShoppingCart(): Promise<CartPage> {
    await this.shoppingCartLink.click();
    return new CartPage(this.page);
  }
}
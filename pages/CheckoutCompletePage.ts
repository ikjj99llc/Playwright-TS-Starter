import { Locator, Page } from '@playwright/test';
import { InventoryPage } from './InventoryPage';

export class CheckoutCompletePage {
  readonly title: Locator;
  readonly completeCheckoutImage: Locator;
  readonly thankYouMessage: Locator;
  readonly orderDispatchMessage: Locator;
  readonly backToProductsButton: Locator;
  readonly generatePdfOrderButton: Locator;

  constructor(readonly page: Page) {
    this.title = page.getByText('Checkout: Complete!', { exact: true });
    this.completeCheckoutImage = page.getByRole('img', {
      name: 'Pony Express',
    });
    this.thankYouMessage = page.getByText('Thank you for your order!', {
      exact: true,
    });
    this.orderDispatchMessage = page.getByText(
      'Your order has been dispatched, and will arrive just as fast as the pony can get there!',
      { exact: true },
    );
    this.backToProductsButton = page.getByRole('button', {
      name: 'Back Home',
    });
    this.generatePdfOrderButton = page.getByRole('button', {
      name: 'Generate PDF order',
    });
  }

  async getTitleText(): Promise<string> {
    return this.title.innerText();
  }

  async getThankYouMessageText(): Promise<string> {
    return this.thankYouMessage.innerText();
  }

  async getOrderDispatchMessageText(): Promise<string> {
    return this.orderDispatchMessage.innerText();
  }

  async clickBackToProducts(): Promise<InventoryPage> {
    await this.backToProductsButton.click();
    return new InventoryPage(this.page);
  }

  async clickGeneratePdfOrder(): Promise<void> {
    await this.generatePdfOrderButton.click();
  }
}

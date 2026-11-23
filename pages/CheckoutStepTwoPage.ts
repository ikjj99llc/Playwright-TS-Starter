import { Locator, Page } from '@playwright/test';
import { CheckoutCompletePage } from './CheckoutCompletePage';
import { InventoryPage } from './InventoryPage';

export class CheckoutStepTwoPage {
  readonly title: Locator;
  readonly paymentInformationValue: Locator;
  readonly shippingInformationValue: Locator;
  readonly itemTotalValue: Locator;
  readonly taxValue: Locator;
  readonly totalValue: Locator;
  readonly cancelButton: Locator;
  readonly finishButton: Locator;

  constructor(readonly page: Page) {
    this.title = page.getByText('Checkout: Overview', { exact: true });
    this.paymentInformationValue = page.getByText('SauceCard #31337', {
      exact: true,
    });
    this.shippingInformationValue = page.getByText(
      'Free Pony Express Delivery!',
      { exact: true },
    );
    this.itemTotalValue = page.locator('[data-test="subtotal-label"]');
    this.taxValue = page.locator('[data-test="tax-label"]');
    this.totalValue = page.locator('[data-test="total-label"]');
    this.cancelButton = page.getByRole('button', { name: 'Cancel' });
    this.finishButton = page.getByRole('button', { name: 'Finish' });
  }

  async getTitleText(): Promise<string> {
    return this.title.innerText();
  }

  async getPaymentInformationText(): Promise<string> {
    return this.paymentInformationValue.innerText();
  }

  async getShippingInformationText(): Promise<string> {
    return this.shippingInformationValue.innerText();
  }

  async getItemTotalText(): Promise<string> {
    return this.itemTotalValue.innerText();
  }

  async getTaxText(): Promise<string> {
    return this.taxValue.innerText();
  }

  async getTotalText(): Promise<string> {
    return this.totalValue.innerText();
  }

  async clickCancel(): Promise<InventoryPage> {
    await this.cancelButton.click();
    return new InventoryPage(this.page);
  }

  async clickFinish(): Promise<CheckoutCompletePage> {
    await this.finishButton.click();
    return new CheckoutCompletePage(this.page);
  }
}

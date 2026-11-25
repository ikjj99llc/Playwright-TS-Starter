import { Locator, Page } from '@playwright/test';
import { InventoryPage } from './InventoryPage';
import { TestConstants } from '../utils/TestConstants';
import { BasePage } from './BasePage';

export class CheckoutCompletePage extends BasePage {
  readonly title: Locator;
  readonly completeCheckoutImage: Locator;
  readonly thankYouMessage: Locator;
  readonly orderDispatchMessage: Locator;
  readonly backToProductsButton: Locator;
  readonly generatePdfOrderButton: Locator;

  constructor(page: Page) {
    super(page);
    const { COMPLETE } = TestConstants.SAUCE_DEMO.CHECKOUT;

    this.title = page.getByText(COMPLETE.TITLE, { exact: true });
    this.completeCheckoutImage = page.getByRole('img', {
      name: COMPLETE.IMAGE_ALT,
    });
    this.thankYouMessage = page.getByText(COMPLETE.THANK_YOU_MESSAGE, {
      exact: true,
    });
    this.orderDispatchMessage = page.getByText(
      COMPLETE.ORDER_DISPATCH_MESSAGE,
      { exact: true },
    );
    this.backToProductsButton = page.getByRole('button', {
      name: COMPLETE.BACK_HOME_BUTTON_NAME,
    });
    this.generatePdfOrderButton = page.getByRole('button', {
      name: COMPLETE.GENERATE_PDF_ORDER_BUTTON_NAME,
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

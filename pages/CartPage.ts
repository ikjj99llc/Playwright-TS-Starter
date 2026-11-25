import { expect, Locator, Page } from '@playwright/test';
import { CheckoutStepOnePage } from './CheckoutStepOnePage';
import { InventoryPage } from './InventoryPage';
import { TestConstants } from '../utils/TestConstants';
import { BasePage } from './BasePage';

type CartItemKey =
  keyof typeof TestConstants.SAUCE_DEMO.CART.CART_ITEM_NAMES;
type RemoveFromCartTestId =
  (typeof TestConstants.SAUCE_DEMO.INVENTORY.REMOVE_FROM_CART_BUTTONS)[CartItemKey];

export class CartPage extends BasePage {
  readonly cartItemNames: Locator;
  readonly cartItemDescriptions: Locator;
  readonly cartItemPrices: Locator;
  readonly checkoutButton: Locator;
  readonly continueShoppingButton: Locator;

  constructor(page: Page) {
    super(page);
    this.cartItemNames = page.locator('[data-test="inventory-item-name"]');
    this.cartItemDescriptions = page.locator(
      '[data-test="inventory-item-desc"]',
    );
    this.cartItemPrices = page.locator('[data-test="inventory-item-price"]');
    this.checkoutButton = page.getByRole('button', { name: 'Checkout' });
    this.continueShoppingButton = page.getByRole('button', {
      name: 'Continue Shopping',
    });
  }

  private getCartItemRow(item: CartItemKey): Locator {
    const itemName = TestConstants.SAUCE_DEMO.CART.CART_ITEM_NAMES[item];
    return this.page
      .locator('.cart_item')
      .filter({ has: this.page.getByText(itemName, { exact: true }) });
  }

  async verifyCartItemDetails(item: CartItemKey): Promise<void> {
    const expected = TestConstants.SAUCE_DEMO.CART;
    const itemRow = this.getCartItemRow(item);

    await expect(itemRow.locator('[data-test="inventory-item-name"]')).toHaveText(
      expected.CART_ITEM_NAMES[item],
    );
    await expect(
      itemRow.locator('[data-test="inventory-item-desc"]'),
    ).toHaveText(expected.CART_ITEM_DESCRIPTIONS[item]);
    await expect(
      itemRow.locator('[data-test="inventory-item-price"]'),
    ).toHaveText(expected.CART_ITEM_PRICES[item]);
  }

  async clickRemoveFromCartButton(testId: RemoveFromCartTestId): Promise<void> {
    await this.page.locator(`[data-test="${testId}"]`).click();
  }

  async clickCheckout(): Promise<CheckoutStepOnePage> {
    await this.checkoutButton.click();
    return new CheckoutStepOnePage(this.page);
  }

  async clickContinueShopping(): Promise<InventoryPage> {
    await this.continueShoppingButton.click();
    return new InventoryPage(this.page);
  }
}

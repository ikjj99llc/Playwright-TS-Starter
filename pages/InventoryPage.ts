import { Locator, Page } from '@playwright/test';
import { TestConstants } from '../utils/TestConstants';
import { BasePage } from './BasePage';

type ProductSortOption =
  (typeof TestConstants.SAUCE_DEMO.INVENTORY.PRODUCT_SORT_DROPDOWN)[number];
type AddToCartTestId =
  (typeof TestConstants.SAUCE_DEMO.INVENTORY.ADD_TO_CART_BUTTONS)[keyof typeof TestConstants.SAUCE_DEMO.INVENTORY.ADD_TO_CART_BUTTONS];
type RemoveFromCartTestId =
  (typeof TestConstants.SAUCE_DEMO.INVENTORY.REMOVE_FROM_CART_BUTTONS)[keyof typeof TestConstants.SAUCE_DEMO.INVENTORY.REMOVE_FROM_CART_BUTTONS];

export class InventoryPage extends BasePage {
  readonly productSortDropdown: Locator;

  constructor(page: Page) {
    super(page);
    this.productSortDropdown = page.getByRole('combobox', { name: 'Sort products' });
  }

  async sortProducts(sortOption: ProductSortOption): Promise<void> {
    await this.productSortDropdown.selectOption(sortOption);
  }

  async clickAddToCartButton(testId: AddToCartTestId): Promise<void> {
    await this.page.locator(`[data-test="${testId}"]`).click();
  }

  async clickRemoveFromCartButton(testId: RemoveFromCartTestId): Promise<void> {
    await this.page.locator(`[data-test="${testId}"]`).click();
  }
}

import { Locator, Page } from '@playwright/test';
import { CartPage } from './CartPage';
import { TestConstants } from '../utils/TestConstants';

type ProductSortOption =
  (typeof TestConstants.SAUCE_DEMO.INVENTORY.PRODUCT_SORT_DROPDOWN)[number];
type AddToCartTestId =
  (typeof TestConstants.SAUCE_DEMO.INVENTORY.ADD_TO_CART_BUTTONS)[keyof typeof TestConstants.SAUCE_DEMO.INVENTORY.ADD_TO_CART_BUTTONS];
type RemoveFromCartTestId =
  (typeof TestConstants.SAUCE_DEMO.INVENTORY.REMOVE_FROM_CART_BUTTONS)[keyof typeof TestConstants.SAUCE_DEMO.INVENTORY.REMOVE_FROM_CART_BUTTONS];

export class InventoryPage {
  readonly productSortDropdown: Locator;
  readonly shoppingCartLink: Locator;

  constructor(readonly page: Page) {
    this.productSortDropdown = page.getByRole('combobox', { name: 'Sort products' });
    this.shoppingCartLink = page.getByRole('button', { name: /^Cart/ });
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

  async clickShoppingCart(): Promise<CartPage> {
    await this.shoppingCartLink.click();
    return new CartPage(this.page);
  }
}

import { expect, test } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { TestConstants } from '../../utils/TestConstants';

test(
  'standard user can complete checkout for Sauce Labs Backpack',
  {
    tag: ['@smoke', '@e2e'],
    annotation: { type: 'author', description: 'Your Name' },
  },
  async ({ page }) => {
    // Arrange
    await page.goto('/');
    const loginPage = new LoginPage(page);
    const { USERNAME, PASSWORD } = TestConstants.SAUCE_DEMO.USERS.STANDARD_USER;
    const inventoryPage = await loginPage.fillCredentialsAndLogin(USERNAME, PASSWORD);

    // Act
    await inventoryPage.clickAddToCartButton(
      TestConstants.SAUCE_DEMO.INVENTORY.ADD_TO_CART_BUTTONS.SAUCE_LABS_BACKPACK,
    );

    // Assert
    const cartPage = await inventoryPage.clickShoppingCart();
    await cartPage.verifyCartItemDetails('SAUCE_LABS_BACKPACK');

    // Act
    const checkoutStepOnePage = await cartPage.clickCheckout();
    const { FIRST_NAME, LAST_NAME, POSTAL_CODE } =
      TestConstants.SAUCE_DEMO.SHIPPING_INFORMATION;
    const checkoutStepTwoPage =
      await checkoutStepOnePage.fillShippingInformationAndContinue(
        FIRST_NAME,
        LAST_NAME,
        POSTAL_CODE,
      );

    // Assert
    const backpackPrice = Number(
      TestConstants.SAUCE_DEMO.CART.CART_ITEM_PRICES.SAUCE_LABS_BACKPACK.replace(
        '$',
        '',
      ),
    );
    const taxRate = TestConstants.SAUCE_DEMO.CHECKOUT.TAX_RATE;
    const expectedItemTotal = backpackPrice;
    const expectedTax = Number((expectedItemTotal * taxRate).toFixed(2));
    const expectedTotal = Number((expectedItemTotal + expectedTax).toFixed(2));

    expect(await checkoutStepTwoPage.getItemTotalText()).toBe(
      `Item total: $${expectedItemTotal.toFixed(2)}`,
    );
    expect(await checkoutStepTwoPage.getTaxText()).toBe(
      `Tax: $${expectedTax.toFixed(2)}`,
    );
    expect(await checkoutStepTwoPage.getTotalText()).toBe(
      `Total: $${expectedTotal.toFixed(2)}`,
    );

    // Act
    const checkoutCompletePage = await checkoutStepTwoPage.clickFinish();

    // Assert
    await expect(page).toHaveURL(/checkout-complete\.html/);
    expect(await checkoutCompletePage.getTitleText()).toBe(
      TestConstants.SAUCE_DEMO.CHECKOUT.COMPLETE.TITLE,
    );
    expect(await checkoutCompletePage.getThankYouMessageText()).toBe(
      TestConstants.SAUCE_DEMO.CHECKOUT.COMPLETE.THANK_YOU_MESSAGE,
    );
    expect(await checkoutCompletePage.getOrderDispatchMessageText()).toBe(
      TestConstants.SAUCE_DEMO.CHECKOUT.COMPLETE.ORDER_DISPATCH_MESSAGE,
    );
  },
);

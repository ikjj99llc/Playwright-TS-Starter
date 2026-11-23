import { Locator, Page } from '@playwright/test';
import { CartPage } from './CartPage';
import { CheckoutStepTwoPage } from './CheckoutStepTwoPage';

export class CheckoutStepOnePage {
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly postalCodeInput: Locator;
  readonly cancelButton: Locator;
  readonly continueButton: Locator;

  constructor(readonly page: Page) {
    this.firstNameInput = page.getByLabel('First Name');
    this.lastNameInput = page.getByLabel('Last Name');
    this.postalCodeInput = page.getByLabel('Zip/Postal Code');
    this.cancelButton = page.getByRole('button', { name: 'Cancel' });
    this.continueButton = page.getByRole('button', { name: 'Continue' });
  }

  async fillFirstName(firstName: string): Promise<void> {
    await this.firstNameInput.fill(firstName);
  }

  async fillLastName(lastName: string): Promise<void> {
    await this.lastNameInput.fill(lastName);
  }

  async fillPostalCode(postalCode: string): Promise<void> {
    await this.postalCodeInput.fill(postalCode);
  }

  async fillShippingInformationAndContinue(firstName: string, lastName: string, postalCode: string): Promise<CheckoutStepTwoPage> {
    await this.fillFirstName(firstName);
    await this.fillLastName(lastName);
    await this.fillPostalCode(postalCode);
    return await this.clickContinue();
  }

  async clickCancel(): Promise<CartPage> {
    await this.cancelButton.click();
    return new CartPage(this.page);
  }

  async clickContinue(): Promise<CheckoutStepTwoPage> {
    await this.continueButton.click();
    return new CheckoutStepTwoPage(this.page);
  }
}

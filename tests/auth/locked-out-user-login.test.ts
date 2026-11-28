import { expect, test } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { TestConstants } from '../../utils/TestConstants';

test(
  'locked out user sees locked out error message', //standard error message
  {
    tag: ['@smoke', '@auth'],
    annotation: { type: 'author', description: 'Your Name' },
  },
  async ({ page }) => {
    // Arrange
    await page.goto('/');
    const loginPage = new LoginPage(page);
    const { USERNAME, PASSWORD } = TestConstants.SAUCE_DEMO.USERS.LOCKED_OUT_USER;
    const expectedErrorMessage =
      TestConstants.SAUCE_DEMO.LOGIN_ERROR_MESSAGES.LOCKED_OUT_USER;

    // Act
    await loginPage.fillCredentialsAndLogin(USERNAME, PASSWORD);

    // Assert
    await expect(loginPage.errorMessage).toHaveText(expectedErrorMessage);
  },
);
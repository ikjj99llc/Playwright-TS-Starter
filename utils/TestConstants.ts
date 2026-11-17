export const TestConstants = {
  SAUCE_DEMO: {
    INVENTORY: {
      PRODUCT_SORT_DROPDOWN: ['az', 'za', 'lohi', 'hilo'],
      ADD_TO_CART_BUTTONS: {
        SAUCE_LABS_BACKPACK: 'add-to-cart-sauce-labs-backpack',
        SAUCE_LABS_BIKE_LIGHT: 'add-to-cart-sauce-labs-bike-light',
        SAUCE_LABS_BOLT_T_SHIRT: 'add-to-cart-sauce-labs-bolt-t-shirt',
        SAUCE_LABS_FLEECE_JACKET: 'add-to-cart-sauce-labs-fleece-jacket',
        SAUCE_LABS_ONESIE: 'add-to-cart-sauce-labs-onesie',
        TEST_ALL_THE_THINGS_T_SHIRT_RED: 'add-to-cart-test.allthethings()-t-shirt-(red)',
      },
      REMOVE_FROM_CART_BUTTONS: {
        SAUCE_LABS_BACKPACK: 'remove-sauce-labs-backpack',
        SAUCE_LABS_BIKE_LIGHT: 'remove-sauce-labs-bike-light',
        SAUCE_LABS_BOLT_T_SHIRT: 'remove-sauce-labs-bolt-t-shirt',
        SAUCE_LABS_FLEECE_JACKET: 'remove-sauce-labs-fleece-jacket',
        SAUCE_LABS_ONESIE: 'remove-sauce-labs-onesie',
        TEST_ALL_THE_THINGS_T_SHIRT_RED: 'remove-test.allthethings()-t-shirt-(red)',
      },
    },
    USERS: {
      STANDARD_USER: {
        USERNAME: 'standard_user',
        PASSWORD: 'secret_sauce',
      },
      LOCKED_OUT_USER: {
        USERNAME: 'locked_out_user',
        PASSWORD: 'secret_sauce',
      },
      PROBLEM_USER: {
        USERNAME: 'problem_user',
        PASSWORD: 'secret_sauce',
      },
    },
    LOGIN_ERROR_MESSAGES: {
      LOCKED_OUT_USER: 'Epic sadface: Sorry, this user has been locked out.',
      INVALID_CREDENTIALS:
        'Epic sadface: Username and password do not match any user in this service',
      USERNAME_REQUIRED: 'Epic sadface: Username is required',
      PASSWORD_REQUIRED: 'Epic sadface: Password is required',
    },
  },
} as const;

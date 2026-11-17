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
    CART: {
      CART_ITEM_NAMES: {
        SAUCE_LABS_BACKPACK: 'Sauce Labs Backpack',
        SAUCE_LABS_BIKE_LIGHT: 'Sauce Labs Bike Light',
        SAUCE_LABS_BOLT_T_SHIRT: 'Sauce Labs Bolt T-Shirt',
        SAUCE_LABS_FLEECE_JACKET: 'Sauce Labs Fleece Jacket',
        SAUCE_LABS_ONESIE: 'Sauce Labs Onesie',
        TEST_ALL_THE_THINGS_T_SHIRT_RED: 'Test.allTheThings() T-Shirt (Red)',
      },
      CART_ITEM_DESCRIPTIONS: {
        SAUCE_LABS_BACKPACK:
          'carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.',
        SAUCE_LABS_BIKE_LIGHT:
          'A red light isn\'t the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included.',
        SAUCE_LABS_BOLT_T_SHIRT:
          'Get your testing superhero on with the Sauce Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt.',
        SAUCE_LABS_FLEECE_JACKET:
          'It\'s not every day that you come across a midweight quarter-zip fleece jacket capable of handling everything from a relaxing day outdoors to a busy day at the office.',
        SAUCE_LABS_ONESIE:
          'Rib snap infant onesie for the junior automation engineer in development. Reinforced 3-snap bottom closure, two-needle hemmed sleeved and bottom won\'t unravel.',
        TEST_ALL_THE_THINGS_T_SHIRT_RED:
          'This classic Sauce Labs t-shirt is perfect to wear when cozying up to your keyboard to automate a few tests. Super-soft and comfy ringspun combed cotton.',
      },
      CART_ITEM_PRICES: {
        SAUCE_LABS_BACKPACK: '$29.99',
        SAUCE_LABS_BIKE_LIGHT: '$9.99',
        SAUCE_LABS_BOLT_T_SHIRT: '$15.99',
        SAUCE_LABS_FLEECE_JACKET: '$49.99',
        SAUCE_LABS_ONESIE: '$7.99',
        TEST_ALL_THE_THINGS_T_SHIRT_RED: '$15.99',
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

export const TestConstants = {
  SAUCE_DEMO: {
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

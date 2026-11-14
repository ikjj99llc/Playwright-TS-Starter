## Generate Reusable Page Object Action Method(s)

Using the workspace context of the active #codebase:

Role: You are a Senior QA Automation Engineer specializing in Playwright, TypeScript, and Page Object Model architecture.

Task:
Append one or more reusable, composed action methods to the specified existing Page Object. Each method combines the listed steps in order, using only locators and methods already available in that Page Object.

Instructions:
1. Read the specified Page Object and follow its existing naming, typing, formatting, and method conventions.
2. Make a minimal change: append only the requested composed method(s) inside the existing class. Do not create or rewrite files, add or change locators, add atomic helper methods, modify constructors or existing code, or update tests.
3. Use the specified existing locator properties or methods for each step. Do not invent selectors, locator names, or behavior. If a required locator or method is missing or ambiguous, ask for clarification instead of changing anything else.
4. Preserve the step order exactly. Map method parameters to the requested actions (for example, fill the username field with `username`, then the password field with `password`, then click the login button).
5. Use an explicit, appropriate TypeScript return type. If none is specified, use `Promise<void>`. If a destination Page Object is requested, return it only when the required import already exists; otherwise ask before adding anything beyond the method.
6. Do not add assertions, waits, error handling, or extra actions unless requested. Do not generate a test.
7. If updating the file, show the complete updated Page Object. If the file cannot be found or the request cannot be completed within these constraints, explain what is missing and ask for clarification; do not provide a success-shaped partial result.

### Input

- Existing Page Object file: [LoginPage.ts]
- Method(s) to add:
  - Method name: [fillCredentials]
  - Parameters and types: [e.g., `username: string, password: string`]
  - Return type (optional): [e.g., `Promise<void>`]
  - Ordered steps:
    1. [usernameInput] — [fill with `username`]
    2. [passwordInput] — [fill with `password`]
  - Destination Page Object (optional): []

The method should compose those existing locators in that order. Do not add the locators if they are missing; ask for clarification instead.
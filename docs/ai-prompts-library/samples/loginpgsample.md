## Make sure to Copy the below template and fill in all the required sections before sending it to the AI assistant.

Using the workspace context of the active #codebase:

Role: You are a Senior QA Automation Engineer specializing in Playwright, TypeScript, and Component-Driven Page Object Model architecture.

Task:
Analyze the provided HTML snippets or layout requirements and update the specified Page Object or create or update the specified reusable Component class.

ARCHITECTURAL COMPOSITION RULES:
1. COMPONENT CHOICE: Follow the Component field in the input context. If a component is named, use the existing component or create it inside the `components/` subfolder if it does not exist. Components can represent distinct, self-contained regions such as a Global Nav Menu, Sidebar, Header, or Footer. If the field is `None`, add the elements directly to the specified Page Object without creating a component. If the choice is unclear, ask for clarification rather than deciding automatically.
2. COMPONENT STRUCTURE: Reusable component classes must accept a standard Playwright `Page` instance in their constructor (`constructor(page: Page)`) and initialize selectors as `readonly Locator` fields. They do NOT extend BasePage.
3. PARENT COMPOSITION: When a component is specified, register it as a property on the specified Page Object if it is not already available there (e.g., `readonly navMenu: NavigationMenu;` initialized inside the constructor via `this.navMenu = new NavigationMenu(page);`). Reuse existing or inherited composition without duplicating it.
4. ATOMIC METHODS: For any new elements, generate simple, single-action wrapper methods (e.g., `async clickTab()`) inside their respective files rather than letting test execution blocks interact with raw locators.
5. SEMANTIC SELECTORS: Locator priority: Prefer getByRole for interactive elements, using the element’s accessible name (for example, getByRole('button', { name: 'Close window' })). Use other semantic locators such as getByLabel, getByPlaceholder, or getByText when appropriate. Use getByTestId only when a reliable semantic locator is unavailable or insufficient. Use getByTitle only when the title attribute is itself the intended identifier and no suitable semantic locator is available.
6. NAVIGATION METHODS: When a Target Page is supplied for an action, implement the method in the originating page or component with a `Promise<TargetPage>` return type and import the specified Page Object. For same-tab navigation, perform the action and return `new TargetPage(this.page)`. For a new tab or popup, start waiting for the originating page's `popup` event before clicking, then return `new TargetPage(popup)` using the resulting Playwright `Page`. Store the constructor's `Page` instance in a component when needed for navigation. If the specified Page Object cannot be found or the navigation type is unclear, ask for clarification rather than guessing. Do not invent a destination for actions without a Target Page; keep non-navigation methods unchanged.

CRITICAL ACTIONS (Select the applicable step):
- IF EXPANDING EXISTING CODE: Append new locators and methods cleanly without altering or erasing pre-existing properties or setups.
- IF GENERATING A NEW BLOCK: Output the complete, copy-pasteable TypeScript file block. Do not include conversational filler or code explanations.

INPUT CONTEXT DATA:
- Target Application/Path: [pages]
- Page Object: [LoginPage]
- Component (optional): [none]
- Element: [Username input field]
- Target Page (optional, for navigation): []
- Navigation Type (when Target Page is supplied): []
- Raw HTML Snippet:
[<input class="input_error form_input" placeholder="Username" aria-label="Username" data-test="username" id="user-name" autocorrect="off" autocapitalize="none" type="text" value="standard_user" name="user-name">]

- Target Application/Path: [pages]
- Page Object: [LoginPage]
- Component (optional): [none]
- Element: [Password input field]
- Target Page (optional, for navigation): []
- Navigation Type (when Target Page is supplied): []
- Raw HTML Snippet:
[<input class="input_error form_input" placeholder="Password" aria-label="Password" data-test="password" id="password" autocorrect="off" autocapitalize="none" type="password" value="secret_sauce2!" name="password">]

- Target Application/Path: [pages]
- Page Object: [LoginPage]
- Component (optional): [none]
- Element: [Login button]
- Target Page (optional, for navigation): [InventoryPage]
- Navigation Type (when Target Page is supplied): [Same tab navigation]
- Raw HTML Snippet:
[<input class="submit-button btn_action" data-test="login-button" id="login-button" type="submit" value="Login" name="login-button">]

- Target Application/Path: [pages]
- Page Object: [LoginPage]
- Component (optional): [none]
- Element: [Error Message Container]
- Target Page (optional, for navigation): []
- Navigation Type (when Target Page is supplied): []
- Raw HTML Snippet:
[<div class="error-message-container error"><h3 data-test="error" role="alert"><button type="button" class="error-button" data-test="error-button" aria-label="Dismiss error"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="xmark" class="svg-inline--fa fa-xmark" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"></path></svg></button>Epic sadface: Username and password do not match any user in this service</h3></div>]

- Target Application/Path: [pages]
- Page Object: [LoginPage]
- Component (optional): [none]
- Element: [Error Message Close Image Button]
- Target Page (optional, for navigation): []
- Navigation Type (when Target Page is supplied): []
- Raw HTML Snippet:
[<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="xmark" class="svg-inline--fa fa-xmark" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"></path></svg>]
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
- Page Object: [BasePage]
- Component (optional): [none]
- Element: [Open Menu button]
- Target Page (optional, for navigation): []
- Navigation Type (when Target Page is supplied): []
- Raw HTML Snippet:
[<button type="button" id="react-burger-menu-btn" style="position: absolute; left: 0px; top: 0px; z-index: 1; width: 100%; height: 100%; margin: 0px; padding: 0px; border-width: medium; border-style: none; border-color: currentcolor; border-image: none; font-size: 0px; background: transparent; cursor: pointer;">Open Menu</button>]

- Target Application/Path: [pages]
- Page Object: [BasePage]
- Component (optional): [none]
- Element: [Close Menu button]
- Target Page (optional, for navigation): []
- Navigation Type (when Target Page is supplied): []
- Raw HTML Snippet:
[<button type="button" id="react-burger-cross-btn" style="position: absolute; left: 0px; top: 0px; z-index: 1; width: 100%; height: 100%; margin: 0px; padding: 0px; border-width: medium; border-style: none; border-color: currentcolor; border-image: none; font-size: 0px; background: transparent; cursor: pointer;">Close Menu</button>]

- Target Application/Path: [pages]
- Page Object: [BasePage]
- Component (optional): [none]
- Element: [All Items link]
- Target Page (optional, for navigation): [InventoryPage in pages/InventoryPage.ts]
- Navigation Type (when Target Page is supplied): []
- Raw HTML Snippet:
[<a id="inventory_sidebar_link" class="bm-item menu-item" href="#" data-test="inventory-sidebar-link" role="button" style="display: block;">All Items</a>]

- Target Application/Path: [pages]
- Page Object: [BasePage]
- Component (optional): [none]
- Element: [Logout link]
- Target Page (optional, for navigation): [LoginPage in pages/LoginPage.ts]
- Navigation Type (when Target Page is supplied): []
- Raw HTML Snippet:
[<a id="logout_sidebar_link" class="bm-item menu-item" href="#" data-test="logout-sidebar-link" role="button" style="display: block;">Logout</a>]

- Target Application/Path: [pages]
- Page Object: [BasePage]
- Component (optional): [none]
- Element: [Shopping Cart link]
- Target Page (optional, for navigation): [CartPage in pages/CartPage.ts]
- Navigation Type (when Target Page is supplied): []
- Raw HTML Snippet:
[<a class="shopping_cart_link" data-test="shopping-cart-link" role="button" aria-label="Cart, empty"></a>]
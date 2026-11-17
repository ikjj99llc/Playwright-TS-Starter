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
- Page Object: [InventoryPage in pages/InventoryPage.ts]
- Component (optional): [None]
- Element: [Product Sort Dropdown]
- Target Page (optional, for navigation): []
- Navigation Type (when Target Page is supplied): [Same tab]
- Raw HTML Snippet:
[<select class="product_sort_container" aria-label="Sort products" data-test="product-sort-container"><option value="az">Name (A to Z)</option><option value="za">Name (Z to A)</option><option value="lohi">Price (low to high)</option><option value="hilo">Price (high to low)</option></select>]

- Target Application/Path: [pages]
- Page Object: [InventoryPage in pages/InventoryPage.ts]
- Component (optional): [None]
- Element: [Add to Cart Button for Sauce Labs Backpack]
- Target Page (optional, for navigation): []
- Navigation Type (when Target Page is supplied): [Same tab]
- Raw HTML Snippet:
[<button class="btn btn_primary btn_small btn_inventory " data-test="add-to-cart-sauce-labs-backpack" id="add-to-cart-sauce-labs-backpack" name="add-to-cart-sauce-labs-backpack">Add to cart</button>]

- Target Application/Path: [pages]
- Page Object: [InventoryPage in pages/InventoryPage.ts]
- Component (optional): [None]
- Element: [Add to Cart Button for Sauce Labs Bike Light]
- Target Page (optional, for navigation): []
- Navigation Type (when Target Page is supplied): [Same tab]
- Raw HTML Snippet:
[<button class="btn btn_primary btn_small btn_inventory " data-test="add-to-cart-sauce-labs-bike-light" id="add-to-cart-sauce-labs-bike-light" name="add-to-cart-sauce-labs-bike-light">Add to cart</button>]

- Target Application/Path: [pages]
- Page Object: [InventoryPage in pages/InventoryPage.ts]
- Component (optional): [None]
- Element: [Add to Cart Button for Sauce Labs Bolt T-Shirt]
- Target Page (optional, for navigation): []
- Navigation Type (when Target Page is supplied): [Same tab]
- Raw HTML Snippet:
[<button class="btn btn_primary btn_small btn_inventory " data-test="add-to-cart-sauce-labs-bolt-t-shirt" id="add-to-cart-sauce-labs-bolt-t-shirt" name="add-to-cart-sauce-labs-bolt-t-shirt">Add to cart</button>]

- Target Application/Path: [pages]
- Page Object: [InventoryPage in pages/InventoryPage.ts]
- Component (optional): [None]
- Element: [Add to Cart Button for Sauce Labs Fleece Jacket]
- Target Page (optional, for navigation): []
- Navigation Type (when Target Page is supplied): [Same tab]
- Raw HTML Snippet:
[<button class="btn btn_primary btn_small btn_inventory " data-test="add-to-cart-sauce-labs-fleece-jacket" id="add-to-cart-sauce-labs-fleece-jacket" name="add-to-cart-sauce-labs-fleece-jacket">Add to cart</button>]

- Target Application/Path: [pages]
- Page Object: [InventoryPage in pages/InventoryPage.ts]
- Component (optional): [None]
- Element: [Add to Cart Button for Sauce Labs Onesie]
- Target Page (optional, for navigation): []
- Navigation Type (when Target Page is supplied): [Same tab]
- Raw HTML Snippet:
[<button class="btn btn_primary btn_small btn_inventory " data-test="add-to-cart-sauce-labs-onesie" id="add-to-cart-sauce-labs-onesie" name="add-to-cart-sauce-labs-onesie">Add to cart</button>]

- Target Application/Path: [pages]
- Page Object: [InventoryPage in pages/InventoryPage.ts]
- Component (optional): [None]
- Element: [Add to Cart Button for Sauce Labs t-shirt (Red)]
- Target Page (optional, for navigation): []
- Navigation Type (when Target Page is supplied): [Same tab]
- Raw HTML Snippet:
[<button class="btn btn_primary btn_small btn_inventory " data-test="add-to-cart-test.allthethings()-t-shirt-(red)" id="add-to-cart-test.allthethings()-t-shirt-(red)" name="add-to-cart-test.allthethings()-t-shirt-(red)">Add to cart</button>]

- Target Application/Path: [pages]
- Page Object: [InventoryPage in pages/InventoryPage.ts]
- Component (optional): [None]
- Element: [Remove from Cart Button for Sauce Labs backpack]
- Target Page (optional, for navigation): []
- Navigation Type (when Target Page is supplied): [Same tab]
- Raw HTML Snippet:
[<button class="btn btn_secondary btn_small btn_inventory " data-test="remove-sauce-labs-backpack" id="remove-sauce-labs-backpack" name="remove-sauce-labs-backpack">Remove</button>]

- Target Application/Path: [pages]
- Page Object: [InventoryPage in pages/InventoryPage.ts]
- Component (optional): [None]
- Element: [Remove from Cart Button for Sauce Labs Bike Light]
- Target Page (optional, for navigation): []
- Navigation Type (when Target Page is supplied): [Same tab]
- Raw HTML Snippet:
[<button class="btn btn_secondary btn_small btn_inventory " data-test="remove-sauce-labs-bike-light" id="remove-sauce-labs-bike-light" name="remove-sauce-labs-bike-light">Remove</button>]

- Target Application/Path: [pages]
- Page Object: [InventoryPage in pages/InventoryPage.ts]
- Component (optional): [None]
- Element: [Remove from Cart Button for Sauce Labs Bolt T-Shirt]
- Target Page (optional, for navigation): []
- Navigation Type (when Target Page is supplied): [Same tab]
- Raw HTML Snippet:
[<button class="btn btn_secondary btn_small btn_inventory " data-test="remove-sauce-labs-bolt-t-shirt" id="remove-sauce-labs-bolt-t-shirt" name="remove-sauce-labs-bolt-t-shirt">Remove</button>]

- Target Application/Path: [pages]
- Page Object: [InventoryPage in pages/InventoryPage.ts]
- Component (optional): [None]
- Element: [Remove from Cart Button for Sauce Labs Fleece Jacket]
- Target Page (optional, for navigation): []
- Navigation Type (when Target Page is supplied): [Same tab]
- Raw HTML Snippet:
[<button class="btn btn_secondary btn_small btn_inventory " data-test="remove-sauce-labs-fleece-jacket" id="remove-sauce-labs-fleece-jacket" name="remove-sauce-labs-fleece-jacket">Remove</button>]

- Target Application/Path: [pages]
- Page Object: [InventoryPage in pages/InventoryPage.ts]
- Component (optional): [None]
- Element: [Remove from Cart Button for Sauce Labs Onesie]
- Target Page (optional, for navigation): []
- Navigation Type (when Target Page is supplied): [Same tab]
- Raw HTML Snippet:
[<button class="btn btn_secondary btn_small btn_inventory " data-test="remove-sauce-labs-onesie" id="remove-sauce-labs-onesie" name="remove-sauce-labs-onesie">Remove</button>]

- Target Application/Path: [pages]
- Page Object: [InventoryPage in pages/InventoryPage.ts]
- Component (optional): [None]
- Element: [Remove from Cart Button for Sauce Labs t-shirt (Red)]
- Target Page (optional, for navigation): []
- Navigation Type (when Target Page is supplied): [Same tab]
- Raw HTML Snippet:
[<button class="btn btn_secondary btn_small btn_inventory " data-test="remove-test.allthethings()-t-shirt-(red)" id="remove-test.allthethings()-t-shirt-(red)" name="remove-test.allthethings()-t-shirt-(red)">Remove</button>]

- Target Application/Path: [pages]
- Page Object: [InventoryPage in pages/InventoryPage.ts]
- Component (optional): [None]
- Element: [Shopping Cart Link with Badge]
- Target Page (optional, for navigation): [CartPage in pages/CartPage.ts]
- Navigation Type (when Target Page is supplied): [Same tab]
- Raw HTML Snippet:
[<a class="shopping_cart_link" data-test="shopping-cart-link" role="button" aria-label="Cart, 6 items"><span class="shopping_cart_badge" data-test="shopping-cart-badge">6</span></a>]
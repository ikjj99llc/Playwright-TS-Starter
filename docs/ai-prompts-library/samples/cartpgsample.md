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
- Page Object: [CartPage in pages/CartPage.ts]
- Component (optional): [None]
- Element: [Checkout Button]
- Target Page (optional, for navigation): [CheckOutStepOnePage in pages/CheckOutStepOnePage.ts]
- Navigation Type (when Target Page is supplied): [Same tab]
- Raw HTML Snippet:
[<button class="btn btn_action btn_medium checkout_button " data-test="checkout" id="checkout" name="checkout">Checkout</button>]

- Target Application/Path: [pages]
- Page Object: [CartPage in pages/CartPage.ts]
- Component (optional): [None]
- Element: [Remove from Cart Button for Sauce Labs backpack]
- Target Page (optional, for navigation): []
- Navigation Type (when Target Page is supplied): [Same tab]
- Raw HTML Snippet:
[<button class="btn btn_secondary btn_small cart_button" data-test="remove-sauce-labs-backpack" id="remove-sauce-labs-backpack" name="remove-sauce-labs-backpack">Remove</button>]

- Target Application/Path: [pages]
- Page Object: [CartPage in pages/CartPage.ts]
- Component (optional): [None]
- Element: [Remove from Cart Button for Sauce Labs Bike Light]
- Target Page (optional, for navigation): []
- Navigation Type (when Target Page is supplied): [Same tab]
- Raw HTML Snippet:
[<button class="btn btn_secondary btn_small cart_button" data-test="remove-sauce-labs-bike-light" id="remove-sauce-labs-bike-light" name="remove-sauce-labs-bike-light">Remove</button>]

- Target Application/Path: [pages]
- Page Object: [CartPage in pages/CartPage.ts]
- Component (optional): [None]
- Element: [Remove from Cart Button for Sauce Labs Bolt T-Shirt]
- Target Page (optional, for navigation): []
- Navigation Type (when Target Page is supplied): [Same tab]
- Raw HTML Snippet:
[<button class="btn btn_secondary btn_small cart_button" data-test="remove-sauce-labs-bolt-t-shirt" id="remove-sauce-labs-bolt-t-shirt" name="remove-sauce-labs-bolt-t-shirt">Remove</button>]

- Target Application/Path: [pages]
- Page Object: [CartPage in pages/CartPage.ts]
- Component (optional): [None]
- Element: [Remove from Cart Button for Sauce Labs Fleece Jacket]
- Target Page (optional, for navigation): []
- Navigation Type (when Target Page is supplied): [Same tab]
- Raw HTML Snippet:
[<button class="btn btn_secondary btn_small cart_button" data-test="remove-sauce-labs-fleece-jacket" id="remove-sauce-labs-fleece-jacket" name="remove-sauce-labs-fleece-jacket">Remove</button>]

- Target Application/Path: [pages]
- Page Object: [CartPage in pages/CartPage.ts]
- Component (optional): [None]
- Element: [Remove from Cart Button for Sauce Labs Onesie]
- Target Page (optional, for navigation): []
- Navigation Type (when Target Page is supplied): [Same tab]
- Raw HTML Snippet:
[<button class="btn btn_secondary btn_small cart_button" data-test="remove-sauce-labs-onesie" id="remove-sauce-labs-onesie" name="remove-sauce-labs-onesie">Remove</button>]

- Target Application/Path: [pages]
- Page Object: [CartPage in pages/CartPage.ts]
- Component (optional): [None]
- Element: [Remove from Cart Button for Sauce Labs t-shirt (Red)]
- Target Page (optional, for navigation): []
- Navigation Type (when Target Page is supplied): [Same tab]
- Raw HTML Snippet:
[<button class="btn btn_secondary btn_small cart_button" data-test="remove-test.allthethings()-t-shirt-(red)" id="remove-test.allthethings()-t-shirt-(red)" name="remove-test.allthethings()-t-shirt-(red)">Remove</button>]

- Target Application/Path: [pages]
- Page Object: [CartPage in pages/CartPage.ts]
- Component (optional): [None]
- Element: [T-Shirt (Red) Item Name]
- Target Page (optional, for navigation): []
- Navigation Type (when Target Page is supplied): [Same tab]
- Raw HTML Snippet:
[<div class="inventory_item_name" data-test="inventory-item-name">Test.allTheThings() T-Shirt (Red)</div>]

- Target Application/Path: [pages]
- Page Object: [CartPage in pages/CartPage.ts]
- Component (optional): [None]
- Element: [T-Shirt (Red) Item Description]
- Target Page (optional, for navigation): []
- Navigation Type (when Target Page is supplied): [Same tab]
- Raw HTML Snippet:
[<div class="inventory_item_desc" data-test="inventory-item-desc">This classic Sauce Labs t-shirt is perfect to wear when cozying up to your keyboard to automate a few tests. Super-soft and comfy ringspun combed cotton.</div>]

- Target Application/Path: [pages]
- Page Object: [CartPage in pages/CartPage.ts]
- Component (optional): [None]
- Element: [T-Shirt (Red) Item Price]
- Target Page (optional, for navigation): []
- Navigation Type (when Target Page is supplied): [Same tab]
- Raw HTML Snippet:
[<div class="inventory_item_price" data-test="inventory-item-price">$15.99</div>]

- Target Application/Path: [pages]
- Page Object: [CartPage in pages/CartPage.ts]
- Component (optional): [None]
- Element: [Onesie Item Name]
- Target Page (optional, for navigation): []
- Navigation Type (when Target Page is supplied): [Same tab]
- Raw HTML Snippet:
[<div class="inventory_item_name" data-test="inventory-item-name">Sauce Labs Onesie</div>]

- Target Application/Path: [pages]
- Page Object: [CartPage in pages/CartPage.ts]
- Component (optional): [None]
- Element: [Onesie Item Description]
- Target Page (optional, for navigation): []
- Navigation Type (when Target Page is supplied): [Same tab]
- Raw HTML Snippet:
[<div class="inventory_item_desc" data-test="inventory-item-desc">Rib snap infant onesie for the junior automation engineer in development. Reinforced 3-snap bottom closure, two-needle hemmed sleeved and bottom won't unravel.</div>]

- Target Application/Path: [pages]
- Page Object: [CartPage in pages/CartPage.ts]
- Component (optional): [None]
- Element: [Onesie Item Price]
- Target Page (optional, for navigation): []
- Navigation Type (when Target Page is supplied): [Same tab]
- Raw HTML Snippet:
[<div class="inventory_item_price" data-test="inventory-item-price">$7.99</div>]

- Target Application/Path: [pages]
- Page Object: [CartPage in pages/CartPage.ts]
- Component (optional): [None]
- Element: [Sauce Labs Fleece Jacket Item Name]
- Target Page (optional, for navigation): []
- Navigation Type (when Target Page is supplied): [Same tab]
- Raw HTML Snippet:
[<div class="inventory_item_name" data-test="inventory-item-name">Sauce Labs Fleece Jacket</div>]

- Target Application/Path: [pages]
- Page Object: [CartPage in pages/CartPage.ts]
- Component (optional): [None]
- Element: [Sauce Labs Fleece Jacket Item Description]
- Target Page (optional, for navigation): []
- Navigation Type (when Target Page is supplied): [Same tab]
- Raw HTML Snippet:
[<div class="inventory_item_desc" data-test="inventory-item-desc">It's not every day that you come across a midweight quarter-zip fleece jacket capable of handling everything from a relaxing day outdoors to a busy day at the office.</div>]

- Target Application/Path: [pages]
- Page Object: [CartPage in pages/CartPage.ts]
- Component (optional): [None]
- Element: [Sauce Labs Fleece Jacket Item Price]
- Target Page (optional, for navigation): []
- Navigation Type (when Target Page is supplied): [Same tab]
- Raw HTML Snippet:
[<div class="inventory_item_price" data-test="inventory-item-price">$49.99</div>]

- Target Application/Path: [pages]
- Page Object: [CartPage in pages/CartPage.ts]
- Component (optional): [None]
- Element: [Sauce Labs Bolt T-Shirt Item Name]
- Target Page (optional, for navigation): []
- Navigation Type (when Target Page is supplied): [Same tab]
- Raw HTML Snippet:
[<div class="inventory_item_name" data-test="inventory-item-name">Sauce Labs Bolt T-Shirt</div>]

- Target Application/Path: [pages]
- Page Object: [CartPage in pages/CartPage.ts]
- Component (optional): [None]
- Element: [Sauce Labs Bolt T-Shirt Item Description]
- Target Page (optional, for navigation): []
- Navigation Type (when Target Page is supplied): [Same tab]
- Raw HTML Snippet:
[<div class="inventory_item_desc" data-test="inventory-item-desc">Get your testing superhero on with the Sauce Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt.</div>]

- Target Application/Path: [pages]
- Page Object: [CartPage in pages/CartPage.ts]
- Component (optional): [None]
- Element: [Sauce Labs Bolt T-Shirt Item Price]
- Target Page (optional, for navigation): []
- Navigation Type (when Target Page is supplied): [Same tab]
- Raw HTML Snippet:
[<div class="inventory_item_price" data-test="inventory-item-price">$15.99</div>]

- Target Application/Path: [pages]
- Page Object: [CartPage in pages/CartPage.ts]
- Component (optional): [None]
- Element: [Sauce Labs Backpack Item Name]
- Target Page (optional, for navigation): []
- Navigation Type (when Target Page is supplied): [Same tab]
- Raw HTML Snippet:
[<div class="inventory_item_name" data-test="inventory-item-name">Sauce Labs Backpack</div>]

- Target Application/Path: [pages]
- Page Object: [CartPage in pages/CartPage.ts]
- Component (optional): [None]
- Element: [Sauce Labs Backpack Item Description]
- Target Page (optional, for navigation): []
- Navigation Type (when Target Page is supplied): [Same tab]
- Raw HTML Snippet:
[<div class="inventory_item_desc" data-test="inventory-item-desc">carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.</div>]

- Target Application/Path: [pages]
- Page Object: [CartPage in pages/CartPage.ts]
- Component (optional): [None]
- Element: [Sauce Labs Backpack Item Price]
- Target Page (optional, for navigation): []
- Navigation Type (when Target Page is supplied): [Same tab]
- Raw HTML Snippet:
[<div class="inventory_item_price" data-test="inventory-item-price">$29.99</div>]

- Target Application/Path: [pages]
- Page Object: [CartPage in pages/CartPage.ts]
- Component (optional): [None]
- Element: [Sauce Labs Bike Light Item Name]
- Target Page (optional, for navigation): []
- Navigation Type (when Target Page is supplied): [Same tab]
- Raw HTML Snippet:
[<div class="inventory_item_name" data-test="inventory-item-name">Sauce Labs Bike Light</div>]

- Target Application/Path: [pages]
- Page Object: [CartPage in pages/CartPage.ts]
- Component (optional): [None]
- Element: [Sauce Labs Bike Light Item Description]
- Target Page (optional, for navigation): []
- Navigation Type (when Target Page is supplied): [Same tab]
- Raw HTML Snippet:
[<div class="inventory_item_desc" data-test="inventory-item-desc">A red light isn't the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included.</div>]

- Target Application/Path: [pages]
- Page Object: [CartPage in pages/CartPage.ts]
- Component (optional): [None]
- Element: [Sauce Labs Bike Light Item Price]
- Target Page (optional, for navigation): []
- Navigation Type (when Target Page is supplied): [Same tab]
- Raw HTML Snippet:
[<div class="inventory_item_price" data-test="inventory-item-price">$9.99</div>]

- Target Application/Path: [pages]
- Page Object: [CartPage in pages/CartPage.ts]
- Component (optional): [None]
- Element: [Continue Shopping Button]
- Target Page (optional, for navigation): [InventoryPage in pages/InventoryPage.ts]
- Navigation Type (when Target Page is supplied): [Same tab]
- Raw HTML Snippet:
[<button class="btn btn_secondary back btn_medium" data-test="continue-shopping" id="continue-shopping" name="continue-shopping"><img class="back-image" alt="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDkuMC1jMDAwIDc5LmRhNGE3ZTVlZiwgMjAyMi8xMS8yMi0xMzo1MDowNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI0LjEgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QzQ4Q0IxMkFBRUZDMTFFREIwRThFMzc3OTlDRTMyNUIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QzQ4Q0IxMkJBRUZDMTFFREIwRThFMzc3OTlDRTMyNUIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpDNDhDQjEyOEFFRkMxMUVEQjBFOEUzNzc5OUNFMzI1QiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpDNDhDQjEyOUFFRkMxMUVEQjBFOEUzNzc5OUNFMzI1QiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgbFSzAAAAFGSURBVHjaYvz//z/DQAImhgEGow4gywHLD2zON8gPeN+9dk4/pQ5gJDURzty2or513awGGP/RnH2MdAsBdMurAlMbKY4DUAgQg2dsXV4vm+z4H4anb1nWQKxefHhALSfKAbS0nKADaG05XgfQw3KcDqCX5VgdQE/LQRilIELP50byWheSXYMmUrPo1ZBVuqAqrXABoyS8/fSBgXN90nl6lP/ryyc7GqtqH0ApCT99+ypArwqIj4v7A9a6ABj/DW3rZ9fTMgqkhMUfwHyPtSgGJTrkRAhKlLRMhMwNDQ0oLjRR0z3AyczGePjGOQcQ//D1sw5cLOwMJqo6B2kRHRgOoLcjsDqAno7A6QB6OQKvA+jhCIIOoLUjiHIALkeI8wp+1FVUP0GXJhm2ckI/z/89XZpkuBzRuWrWBKrWhqM9oxHpAIAAAwBV1hmIioz+GAAAAABJRU5ErkJggg==">Continue Shopping</button>]
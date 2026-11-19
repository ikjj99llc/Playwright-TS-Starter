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
- Page Object: [CheckoutStepOnePage in pages/CheckoutStepOnePage.ts]
- Component (optional): [None]
- Element: [First Name Input Field]
- Target Page (optional, for navigation): []
- Navigation Type (when Target Page is supplied): []
- Raw HTML Snippet:
[<input class="input_error form_input" placeholder="First Name" aria-label="First Name" data-test="firstName" id="first-name" autocorrect="off" autocapitalize="none" type="text" value="" name="firstName">]

- Target Application/Path: [pages]
- Page Object: [CheckoutStepOnePage in pages/CheckoutStepOnePage.ts]
- Component (optional): [None]
- Element: [Last Name Input Field]
- Target Page (optional, for navigation): []
- Navigation Type (when Target Page is supplied): []
- Raw HTML Snippet:
[<input class="input_error form_input" placeholder="Last Name" aria-label="Last Name" data-test="lastName" id="last-name" autocorrect="off" autocapitalize="none" type="text" value="" name="lastName">]

- Target Application/Path: [pages]
- Page Object: [CheckoutStepOnePage in pages/CheckoutStepOnePage.ts]
- Component (optional): [None]
- Element: [Zip/Postal Code Input Field]
- Target Page (optional, for navigation): []
- Navigation Type (when Target Page is supplied): []
- Raw HTML Snippet:
[<input class="input_error form_input" placeholder="Zip/Postal Code" aria-label="Zip/Postal Code" data-test="postalCode" id="postal-code" autocorrect="off" autocapitalize="none" type="text" value="" name="postalCode">]

- Target Application/Path: [pages]
- Page Object: [CheckoutStepOnePage in pages/CheckoutStepOnePage.ts]
- Component (optional): [None]
- Element: [Cancel Button]
- Target Page (optional, for navigation): [CartPage in pages/CartPage.ts]
- Navigation Type (when Target Page is supplied): [same tab]
- Raw HTML Snippet:
[<button class="btn btn_secondary back btn_medium cart_cancel_link" data-test="cancel" id="cancel" name="cancel"><img class="back-image" alt="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDkuMC1jMDAwIDc5LmRhNGE3ZTVlZiwgMjAyMi8xMS8yMi0xMzo1MDowNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI0LjEgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QzQ4Q0IxMkFBRUZDMTFFREIwRThFMzc3OTlDRTMyNUIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QzQ4Q0IxMkJBRUZDMTFFREIwRThFMzc3OTlDRTMyNUIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpDNDhDQjEyOEFFRkMxMUVEQjBFOEUzNzc5OUNFMzI1QiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpDNDhDQjEyOUFFRkMxMUVEQjBFOEUzNzc5OUNFMzI1QiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgbFSzAAAAFGSURBVHjaYvz//z/DQAImhgEGow4gywHLD2zON8gPeN+9dk4/pQ5gJDURzty2or513awGGP/RnH2MdAsBdMurAlMbKY4DUAgQg2dsXV4vm+z4H4anb1nWQKxefHhALSfKAbS0nKADaG05XgfQw3KcDqCX5VgdQE/LQRilIELP50byWheSXYMmUrPo1ZBVuqAqrXABoyS8/fSBgXN90nl6lP/ryyc7GqtqH0ApCT99+ypArwqIj4v7A9a6ABj/DW3rZ9fTMgqkhMUfwHyPtSgGJTrkRAhKlLRMhMwNDQ0oLjRR0z3AyczGePjGOQcQ//D1sw5cLOwMJqo6B2kRHRgOoLcjsDqAno7A6QB6OQKvA+jhCIIOoLUjiHIALkeI8wp+1FVUP0GXJhm2ckI/z/89XZpkuBzRuWrWBKrWhqM9oxHpAIAAAwBV1hmIioz+GAAAAABJRU5ErkJggg==">Cancel</button>]

- Target Application/Path: [pages]
- Page Object: [CheckoutStepOnePage in pages/CheckoutStepOnePage.ts]
- Component (optional): [None]
- Element: [Continue Button]
- Target Page (optional, for navigation): [CheckoutStepTwoPage in pages/CheckoutStepTwoPage.ts]
- Navigation Type (when Target Page is supplied): [same tab]
- Raw HTML Snippet:
[<input class="submit-button btn btn_primary cart_button btn_action" data-test="continue" id="continue" type="submit" value="Continue" name="continue">]

- Target Application/Path: [pages]
- Page Object: [CheckoutStepTwoPage in pages/CheckoutStepTwoPage.ts]
- Component (optional): [None]
- Element: [Checkout: Overview Title]
- Target Page (optional, for navigation): []
- Navigation Type (when Target Page is supplied): []
- Raw HTML Snippet:
[<span class="title" data-test="title">Checkout: Overview</span>]

- Target Application/Path: [pages]
- Page Object: [CheckoutStepTwoPage in pages/CheckoutStepTwoPage.ts]
- Component (optional): [None]
- Element: [Payment Information Value]
- Target Page (optional, for navigation): []
- Navigation Type (when Target Page is supplied): []
- Raw HTML Snippet:
[<div class="summary_value_label" data-test="payment-info-value">SauceCard #31337</div>]

- Target Application/Path: [pages]
- Page Object: [CheckoutStepTwoPage in pages/CheckoutStepTwoPage.ts]
- Component (optional): [None]
- Element: [Shipping Information Value]
- Target Page (optional, for navigation): []
- Navigation Type (when Target Page is supplied): []
- Raw HTML Snippet:
[<div class="summary_value_label" data-test="shipping-info-value">Free Pony Express Delivery!</div>]

- Target Application/Path: [pages]
- Page Object: [CheckoutStepTwoPage in pages/CheckoutStepTwoPage.ts]
- Component (optional): [None]
- Element: [Item Total Value]
- Target Page (optional, for navigation): []
- Navigation Type (when Target Page is supplied): []
- Raw HTML Snippet:
[<div class="summary_subtotal_label" data-test="subtotal-label">Item total: $9.99</div>]

- Target Application/Path: [pages]
- Page Object: [CheckoutStepTwoPage in pages/CheckoutStepTwoPage.ts]
- Component (optional): [None]
- Element: [Tax Value]
- Target Page (optional, for navigation): []
- Navigation Type (when Target Page is supplied): []
- Raw HTML Snippet:
[<div class="summary_tax_label" data-test="tax-label">Tax: $2.40</div>]

- Target Application/Path: [pages]
- Page Object: [CheckoutStepTwoPage in pages/CheckoutStepTwoPage.ts]
- Component (optional): [None]
- Element: [Total Value]
- Target Page (optional, for navigation): []
- Navigation Type (when Target Page is supplied): []
- Raw HTML Snippet:
[<div class="summary_total_label" data-test="total-label">Total: $10.79</div>]

- Target Application/Path: [pages]
- Page Object: [CheckoutStepTwoPage in pages/CheckoutStepTwoPage.ts]
- Component (optional): [None]
- Element: [Cancel Button]
- Target Page (optional, for navigation): [InventoryPage in pages/InventoryPage.ts]
- Navigation Type (when Target Page is supplied): [same tab]
- Raw HTML Snippet:
[<button class="btn btn_secondary back btn_medium cart_cancel_link" data-test="cancel" id="cancel" name="cancel"><img class="back-image" alt="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDkuMC1jMDAwIDc5LmRhNGE3ZTVlZiwgMjAyMi8xMS8yMi0xMzo1MDowNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI0LjEgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QzQ4Q0IxMkFBRUZDMTFFREIwRThFMzc3OTlDRTMyNUIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QzQ4Q0IxMkJBRUZDMTFFREIwRThFMzc3OTlDRTMyNUIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpDNDhDQjEyOEFFRkMxMUVEQjBFOEUzNzc5OUNFMzI1QiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpDNDhDQjEyOUFFRkMxMUVEQjBFOEUzNzc5OUNFMzI1QiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgbFSzAAAAFGSURBVHjaYvz//z/DQAImhgEGow4gywHLD2zON8gPeN+9dk4/pQ5gJDURzty2or513awGGP/RnH2MdAsBdMurAlMbKY4DUAgQg2dsXV4vm+z4H4anb1nWQKxefHhALSfKAbS0nKADaG05XgfQw3KcDqCX5VgdQE/LQRilIELP50byWheSXYMmUrPo1ZBVuqAqrXABoyS8/fSBgXN90nl6lP/ryyc7GqtqH0ApCT99+ypArwqIj4v7A9a6ABj/DW3rZ9fTMgqkhMUfwHyPtSgGJTrkRAhKlLRMhMwNDQ0oLjRR0z3AyczGePjGOQcQ//D1sw5cLOwMJqo6B2kRHRgOoLcjsDqAno7A6QB6OQKvA+jhCIIOoLUjiHIALkeI8wp+1FVUP0GXJhm2ckI/z/89XZpkuBzRuWrWBKrWhqM9oxHpAIAAAwBV1hmIioz+GAAAAABJRU5ErkJggg==">Cancel</button>]

- Target Application/Path: [pages]
- Page Object: [CheckoutStepTwoPage in pages/CheckoutStepTwoPage.ts]
- Component (optional): [None]
- Element: [Finish Button]
- Target Page (optional, for navigation): [CheckoutCompletePage in pages/CheckoutCompletePage.ts]
- Navigation Type (when Target Page is supplied): [same tab]
- Raw HTML Snippet:
[<button class="btn btn_action btn_medium cart_button" data-test="finish" id="finish" name="finish">Finish</button>]

- Target Application/Path: [pages]
- Page Object: [CheckoutCompletePage in pages/CheckoutCompletePage.ts]
- Component (optional): [None]
- Element: [Checkout: Complete! Title]
- Target Page (optional, for navigation): []
- Navigation Type (when Target Page is supplied): []
- Raw HTML Snippet:
[<span class="title" data-test="title">Checkout: Complete!</span>]

- Target Application/Path: [pages]
- Page Object: [CheckoutCompletePage in pages/CheckoutCompletePage.ts]
- Component (optional): [None]
- Element: [Complete Checkout Image]
- Target Page (optional, for navigation): []
- Navigation Type (when Target Page is supplied): []
- Raw HTML Snippet:
[<img alt="Pony Express" class="pony_express" data-test="pony-express" src="/assets/checkmark-VLWQafip.png">]

- Target Application/Path: [pages]
- Page Object: [CheckoutCompletePage in pages/CheckoutCompletePage.ts]
- Component (optional): [None]
- Element: [Thank You Message]
- Target Page (optional, for navigation): []
- Navigation Type (when Target Page is supplied): []
- Raw HTML Snippet:
[<h2 class="complete-header" data-test="complete-header">Thank you for your order!</h2>]

- Target Application/Path: [pages]
- Page Object: [CheckoutCompletePage in pages/CheckoutCompletePage.ts]
- Component (optional): [None]
- Element: [Order Dispatch Message]
- Target Page (optional, for navigation): []
- Navigation Type (when Target Page is supplied): []
- Raw HTML Snippet:
[<div class="complete-text" data-test="complete-text">Your order has been dispatched, and will arrive just as fast as the pony can get there!</div>]

- Target Application/Path: [pages]
- Page Object: [CheckoutCompletePage in pages/CheckoutCompletePage.ts]
- Component (optional): [None]
- Element: [Back to Products Button]
- Target Page (optional, for navigation): [InventoryPage in pages/InventoryPage.ts]
- Navigation Type (when Target Page is supplied): [same tab]
- Raw HTML Snippet:
[<button class="btn btn_primary btn_small" data-test="back-to-products" id="back-to-products" name="back-to-products">Back Home</button>]

- Target Application/Path: [pages]
- Page Object: [CheckoutCompletePage in pages/CheckoutCompletePage.ts]
- Component (optional): [None]
- Element: [Generate PDF Order Button]
- Target Page (optional, for navigation): []
- Navigation Type (when Target Page is supplied): []
- Raw HTML Snippet:
[<button class="btn btn_primary btn_small generate-pdf-button" data-test="generate-pdf-order" id="generate-pdf-order" name="generate-pdf-order">Generate PDF order</button>]
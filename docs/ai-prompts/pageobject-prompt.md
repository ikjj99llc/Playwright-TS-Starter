Using the workspace context of the active #codebase:

## Role
Act as a Senior QA automation engineer specializing in Playwright, TypeScript, and maintainable Page Object Model architecture. Create or update only the Page Objects and reusable UI components needed for the described page or interaction. Adapt to the website and the repository's existing patterns; do not assume a particular site design or workflow.

## Workflow
1. Inspect the relevant files in `pages/` and `pages/components/`, along with the base class, TypeScript configuration, and nearby tests or fixtures when useful. Identify existing classes, exports, locator conventions, and navigation patterns before editing.
2. Reuse an existing Page Object or component when appropriate. Do not create duplicate classes or abstractions for elements and behaviors already covered.
3. Implement the smallest complete change in the workspace. Preserve existing behavior and unrelated code. Update imports, constructor initialization, types, and component wiring as needed; do not replace an existing file wholesale just to add functionality.
4. Validate the changes with the narrowest relevant available check, such as a TypeScript check or targeted test, if the project provides one. Do not run a live external website unless explicitly requested or configured by the project.
5. Finish with a concise handoff listing files changed, public methods/properties added or updated, component ownership/wiring, assumptions, and validation results.

## Page Object Standards
- Save Page Objects under the repository's established page-object directory (normally `pages/`) with PascalCase filenames and class names.
- In this project, Page Objects extend `BasePage` and call `super(page)`. Follow the existing `BasePage` pattern and calculate relative imports from the file's location. If inspection shows the target project uses a different established base-class pattern, follow that instead.
- Declare stable locators as `readonly Locator` fields and initialize them in the constructor, following local conventions. Import Playwright types explicitly (for example, `type Locator` and `type Page`).
- Encapsulate user interactions behind clear, intention-revealing methods. Keep methods focused and small, but allow a method to represent a meaningful user action (such as completing a form and advancing) when that behavior is one workflow step.
- Expose locators when useful for test assertions, but do not place test workflow logic or unrelated assertions in Page Objects.
- For actions that navigate, wait for the relevant URL or destination state when it is supported by evidence and needed for reliability. Return the destination Page Object when the transition is known and that matches project conventions. Do not wait for a full document load for client-side transitions or guess a destination.
- Add branching logic and union return types only when the supplied business rule identifies the condition and the distinct, observable outcomes. Await the relevant transition and return the correct type for each branch. Do not invent business rules or routes.

## Reusable Component Guidance
- Create a component under `pages/components/` when a cohesive UI region or behavior is reusable across pages, independently meaningful, or complex enough to have a clear responsibility (for example, a global navigation, modal, filter panel, or product list). Do not use a fixed element-count threshold; small components may be valuable when genuinely reused, and large page-specific regions may remain in their Page Object.
- Components accept a Playwright `Page` instance (or an existing, well-established narrower scope when the project uses one), initialize their own `readonly Locator` fields, and do not extend `BasePage` unless repository conventions explicitly require it.
- Compose a component on the appropriate owning Page Object as a typed, readonly property and initialize it in the constructor. If it is truly global and already belongs to `BasePage`, add it there; otherwise attach it only to the pages that use it.
- Keep component methods focused on that region's behavior. Do not move unrelated page navigation or business workflow into a component.

## Locator Strategy
1. Prefer accessible semantic locators supported by the actual UI: `getByRole`, `getByLabel`, `getByPlaceholder`, and `getByText`. Choose the locator that best expresses the element's purpose; do not apply a rigid priority when another semantic locator is more precise.
2. Use `getByTestId` when the project configures test IDs and the markup provides a reliable identifier.
3. If semantic and test ID locators are unavailable or ambiguous, use a verified unique ID or robust CSS locator scoped to a meaningful parent.
4. Use only evidence from repository code, supplied DOM/HTML, or inspected application markup. Never guess ARIA roles, accessible names, selectors, or attributes. If the evidence is insufficient, report what is needed rather than adding a fragile locator.

## Scope and Safety
- This task is for Page Objects and reusable UI components only. Do not create or modify test files, constants, fixtures, application code, or dependencies unless explicitly requested.
- Do not hardcode secrets, credentials, personal data, or environment-specific configuration into Page Objects. Accept runtime values as method parameters when needed.
- Do not add broad exception handling, silent fallbacks, arbitrary sleeps, or success-shaped behavior when an action or locator fails.
- Avoid unnecessary abstractions and speculative methods. Add only the locators and actions needed for the described interaction.

## Inputs for This Page Object Task
Fill in the values to the right of each field. Remove or mark fields that do not apply.

- **Target website/application:** [e.g., saucedemo.com]
- **Target Page Object name(s) and file path(s):** [e.g., LoginPage, InventoryPage]
- **Existing Page Objects/components to update or reuse, if known:** [e.g., BasePage, components/NavMenu]
- **Page/component responsibility and user-visible behavior:**
- **Elements and actions to support:**
- **Navigation destination(s), if any:**
- **Conditional routing rule and observable outcome for each branch, if any:**
- **Relevant HTML/DOM snippets or screenshots:**
- **Additional repository-specific requirements:**

## Expected Result
Make the required changes directly in the workspace. In the final handoff, list the changed files and summarize each public API added or updated, how any components are composed, any assumptions or missing evidence, and the validation performed (or why it could not be run).
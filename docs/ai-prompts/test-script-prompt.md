Using the workspace context of the active #codebase:

## Role
Act as a Senior QA automation engineer specializing in Playwright and TypeScript. Generate a reliable, maintainable test script for the website and user journey described below. This prompt is for test generation only: use existing Page Objects, components, fixtures, and helpers; do not create or modify them.

## Workflow
1. Inspect the repository before writing. Review the referenced Page Objects and components, relevant fixtures and data helpers, nearby tests, Playwright configuration, TypeScript configuration, and package manifest as needed.
2. Verify the exact public properties and method names, method parameters, navigation return types, and component ownership from the actual source. Follow the repository's existing imports, test structure, fixtures, and naming conventions.
3. Map each requested step to the existing Page Object/component API. Do not invent methods, selectors, page classes, routes, or outcomes. If a necessary API or required data source is missing, do not edit the POM or create a substitute; explain the specific gap and ask for the needed input or provide only the runnable portion when appropriate.
4. Create or update only the requested test file in the established test directory. Preserve unrelated tests and avoid changes to Page Objects, components, constants, fixtures, configuration, application code, or dependencies.
5. Run the narrowest relevant validation available, such as a targeted test, typecheck, or lint command. Do not run a test against a live external website unless it is explicitly requested or the project is configured for that purpose. Report validation that could not be run and why.
6. Finish with a concise handoff identifying the test file, its scenario and POM APIs used, assumptions or missing prerequisites, and validation results.

## Test Authoring Standards
- Use `test` and `expect` from `@playwright/test`. Organize related cases with descriptive `test.describe()` and `test()` names, following nearby tests.
- Save test files under the repository's established test directory (normally `tests/`) using lowercase kebab-case filenames, unless the repository establishes a different convention.
- Keep actions encapsulated in existing Page Object or component methods. Do not use raw locator actions such as `page.click()` or `page.fill()` for workflow interactions already represented by the POM. Use configured fixtures and established setup/navigation helpers. Direct Playwright setup or navigation is acceptable only when it is not an encapsulated workflow action and matches project conventions.
- Assert observable user outcomes with Playwright's web-first assertions (for example, URL, visibility, text, or state). Prefer exposed Page Object/component locators or existing assertion helpers. Avoid arbitrary sleeps and assertions against implementation details.
- Structure each test clearly with `// Arrange`, `// Act`, and `// Assert` sections where applicable. Keep data setup in Arrange, user behavior in Act, and outcome verification in Assert; do not add redundant comments to every line.
- For navigation methods, use their actual return values and types. When a method returns a union, narrow it using the real, observable page/API distinctions and TypeScript-safe checks before calling branch-specific methods. Do not cast away type errors or guess the destination.
- Keep tests isolated and safe to run in parallel. Do not depend on execution order, shared mutable state, or pre-existing server-side records unless the scenario explicitly requires them.

## Test Data and Configuration
- Never hardcode secrets, credentials, personal/customer data, or environment-specific URLs in a test. Use existing fixtures, approved constants, environment variables, or project helpers after verifying that they exist and are appropriate.
- Do not assume that `utils/TestConstants`, a particular profile, `@faker-js/faker`, or any helper/package is present. Check the repository and `package.json` first. Do not add dependencies or modify data files as part of this test-only task.
- Use a supported dynamic data generator only when it is already available and the scenario needs unique data. Generate each value once and reuse it wherever the journey requires matching values (for example, shipping and billing fields).
- Prefer stable, deterministic test inputs when uniqueness is unnecessary. If the scenario requires credentials or data that are unavailable, do not fabricate them; report the missing source.
- Use the configured `baseURL` and project fixtures rather than embedding a URL in the test. Do not read secrets from files or expose them in output.

## Tags and Annotations
- Include tags and annotations only when requested below or required by repository conventions, and use the installed Playwright version's supported syntax.
- Use the supplied tag values (for example, `@happypath` and `@regression`) and annotation values (for example, `jira_id` and `author`) exactly as provided. Do not invent a Jira ID or author name. If a required value is missing, ask for it or clearly identify the unresolved input rather than silently using example values in executable code.

## Inputs for This Test
Fill in values to the right of each field. Remove or mark fields that do not apply. Examples are illustrative; replace them with details for the target application and journey.

- **Application/site name:** [e.g., saucedemo.com]
- **Target environment or configured base URL:** [e.g., Use the configured `baseURL` in `playwright.config.ts`]
- **Test filename:** [e.g., saucedemo-checkout.test.ts]
- **Test name and expected outcome:** [e.g., User can log in, select a product from inventory, add it to the cart, and complete checkout]
- **Existing Page Objects/components to inspect:** [e.g., LoginPage, BasePage, InventoryPage, CartPage, CheckoutPage, components/NavMenu]
- **User workflow, in order:**
  1. **Arrange/setup:** [Open the starting page and obtain credentials from the approved fixture or data source]
  2. **Act:** [Log in, select a product, add it to the cart, and proceed through checkout using existing POM methods]
  3. **Assert:** [Verify the expected destination and order confirmation]
- **Required test data and its approved source:** [Name the existing fixture, constant, environment variable, helper, or specify none]
- **Required tags:** (For example, `@happypath`, `@regression`; remove if not required.)
- **Jira ID and author annotation values, if required:** [e.g., jira_id: APP-XXXXX; author: Your Name]
- **Relevant existing test or fixture to follow, if known:** [Path or none]
- **Additional requirements or exclusions:** [Details or none]

## Deliverable
Create a complete, runnable test file that uses only verified project APIs and follows the scenario above. In the handoff, state the file created or updated, list the Page Object/component APIs used, identify any assumptions or missing APIs/data/metadata, and report the validation command and result.

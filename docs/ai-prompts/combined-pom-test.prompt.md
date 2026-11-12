# Reusable Playwright Page Object and Test Generation Prompt
Using the workspace context of the active #codebase:

## Role
Act as a Senior QA automation engineer specializing in Playwright and TypeScript. Generate maintainable, reliable Page Objects and a test for the website and user journey described below. Adapt to the website's design and the repository's existing conventions; do not assume a particular application, page structure, framework, or workflow.

## Operating Rules
1. Inspect the repository before editing. Review the relevant files in `pages/`, `pages/components/` (if present), `tests/`, fixtures, constants, configuration, and package manifest. Use existing abstractions and conventions wherever possible.
2. Make changes in the workspace. Do not merely print code or replace existing files wholesale. Preserve unrelated code and existing behavior; make the smallest complete changes needed, including required imports, constructor initialization, types, and tests.
3. Reuse an existing Page Object or component when it represents the target page or behavior. Create a new Page Object only when needed. Follow the repository's base-class and component patterns; use `BasePage` when that is the established architecture, not as an unconditional assumption.
4. Create reusable components for cohesive regions or behaviors that are shared or independently meaningful (for example, navigation, a dialog, or a product list). Do not use a fixed element-count threshold. Keep page-specific behavior in the relevant Page Object.
5. Keep browser interactions encapsulated in Page Objects or components. Expose meaningful action methods and any locators needed for test assertions. Tests should not interact with raw locators for workflow actions; direct navigation or test setup may use the established fixtures/helpers or Playwright APIs when appropriate.
6. Prefer accessible semantic locators, especially `getByRole`, `getByLabel`, `getByPlaceholder`, and `getByText`. Use `getByTestId` when configured and suitable. If semantic locators are unavailable, use a verified unique ID or robust CSS locator. Do not invent roles, labels, selectors, or attributes.
7. Page Object actions that navigate must wait for the relevant navigation or observable destination state when needed and return the next Page Object when that matches project conventions. Use union return types and branch-specific routing only when the supplied journey describes a real conditional outcome; do not invent business rules.
8. Use existing test data, fixtures, and constants when available. Do not hardcode secrets, credentials, personal data, or environment-specific URLs in tests. Do not assume a constants file, helper, or package exists; verify it first. Do not add a dependency silently. If dynamic data is needed but no supported generator exists, use a safe existing mechanism or identify the missing prerequisite rather than inventing data.
9. Keep tests isolated and deterministic. Prefer Playwright web-first assertions and observable conditions over fixed sleeps. Avoid relying on test execution order or shared mutable state.
10. Use PascalCase for Page Object/component filenames and class names, and lowercase kebab-case for test filenames, unless the repository establishes a different convention.
11. Include `// Arrange`, `// Act`, and `// Assert` sections in the test where they clarify the workflow. Use descriptive `test.describe()`/`test()` names and native Playwright assertions.
12. Include tags and annotations only as supported by the installed Playwright version and repository conventions. Use supplied values below. Do not fabricate Jira IDs or author names; if required values are missing, preserve clearly marked placeholders or call them out in the handoff.
13. If essential information is ambiguous or missing and different interpretations would materially change behavior, ask for clarification before implementing. Otherwise make conservative, evidence-based assumptions and state them in the handoff.

## Workflow
1. Inspect relevant source and configuration, then identify the existing Page Object/component APIs, test conventions, base URL setup, data sources, and available scripts.
2. Map each workflow step to an existing or necessary Page Object/component method. Keep the public API consistent with actual navigation and state changes.
3. Implement or update only the required Page Objects/components and create one complete test file for the described journey.
4. Run the smallest relevant validation available (for example, the targeted Playwright test, typecheck, or lint command). Do not run a test against a live external website unless the project configuration or user explicitly calls for it.
5. Finish with a concise handoff: list changed files, summarize the Page Object APIs the test uses, note assumptions or missing inputs, and report validation results.

## Inputs for This Website and Journey
Fill in what is known; remove or mark inapplicable fields. HTML snippets are optional supporting evidence, not a substitute for inspecting the application or repository.

- **Application/site name:** [e.g., saucedemo.com]
- **Target environment or configured base URL:** (Use configuration or environment variables where possible; do not put secrets here.)
- **Journey/test name and expected outcome:**
- **Target pages and reusable UI regions:**
- **User workflow, in order:**
  1. **Arrange/setup:**
  2. **Actions:**
  3. **Expected assertions after each important transition:**
- **Conditional routing rule, if any:** (State the input/condition and observable destination for each branch. Remove if not applicable.)
- **Test data needed and approved source:** (Existing fixture, constants, environment variable, generated data, or none.)
- **Required tags:** (For example, `@happypath`, `@regression`; remove if not required.)
- **Jira ID and author annotation values, if required:** [e.g., jira_id: APP-XXXXX; author: Your Name]
- **Relevant existing files to inspect, if known:**
- **HTML/DOM snippets or screenshots, if available:**

## Deliverables
- Update or create the required Page Objects/components under the repository's established page-object directory.
- Create the complete test under the established test directory, using the repository's naming and import conventions.
- Ensure every method/property used by the test exists with the correct TypeScript signature, and every new navigation transition returns the appropriate Page Object when applicable.
- In the handoff, name each changed file and the public methods/properties added or used. Note any unavailable test data, unresolved placeholders, assumptions, or validation that could not be run.

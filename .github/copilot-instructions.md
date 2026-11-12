# GitHub Copilot Instructions for Playwright & TypeScript

## Project-Wide Guidance
- Follow the repository's existing architecture, naming, formatting, and tooling. Inspect relevant files before adding or changing code; do not assume a helper, constants file, fixture, or dependency exists.
- Keep changes focused, preserve existing behavior, and avoid unrelated refactors or speculative abstractions.
- For browser tests, prefer maintainable Page Objects and reusable components consistent with the patterns already in the repository. Keep workflow interactions encapsulated and tests isolated.
- Prefer accessible, user-facing locators such as `getByRole`, `getByLabel`, `getByPlaceholder`, or `getByText`. Use test IDs or verified CSS/ID selectors when semantic locators are unavailable or unsuitable; never invent selectors or ARIA roles.
- Prefer Playwright web-first assertions and waits for observable conditions. Avoid fixed sleeps and hardcoded secrets or personal data. Use configured URLs and existing approved test-data sources.
- Use clear Arrange/Act/Assert structure and tags or annotations when required by the task or established project conventions; do not add placeholder metadata values as if they were real.
- Keep detailed Page Object/component creation and test-generation workflows in the dedicated prompts under `docs/ai-prompts/`; do not duplicate those instructions here.

## GitHub Copilot Code Review Guidelines

### Focus
Review Playwright and TypeScript changes for correctness, maintainability, POM/component design, locator reliability, and test isolation. Report actionable issues with file/line references and explain their impact. Do not flag stylistic preferences as defects.

### Review Criteria
1. **Unreliable waits:** Flag `page.waitForTimeout()` and other fixed sleeps when used to synchronize with the application. Recommend a specific observable condition or web-first assertion; do not require `waitForLoadState()` or `waitForURL()` when they are not appropriate for the transition.
2. **Fragile locators:** Flag selectors that are demonstrably brittle, ambiguous, or unsupported by the markup when a more reliable user-facing or configured test-ID locator is available. Raw CSS, XPath, or IDs are not inherently defects if they are the best verified option.
3. **Page Object architecture:** Check that new or changed Page Objects follow the repository's established base-class and navigation patterns, and that reusable components have clear responsibilities and are composed appropriately. Do not require a BasePage or navigation return type where the existing architecture or behavior does not call for one.
4. **Test reliability and isolation:** Check that tests assert observable outcomes, avoid execution-order/shared-state dependencies, and use deterministic setup suitable for parallel runs.
5. **Sensitive or unstable test data:** Flag credentials, secrets, or personal data embedded in test code. Prefer existing fixtures, approved constants, environment variables, or supported data-generation helpers; verify those sources exist rather than assuming them.
6. **Test structure and metadata:** Check for clear setup/action/assertion flow where useful. Require tags and annotations only when the task or project conventions call for them, and flag fabricated placeholder values used as real metadata.

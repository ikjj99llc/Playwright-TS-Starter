## Make sure to Copy the below template and fill in all the required sections before sending it to the AI assistant. ONLY USE THIS PROMPT IF THE CORRESPONDING PAGE OBJECT / COMPONENT STRUCTURE FILES EXISTS FOR THE TEST SCENARIO.

Using the workspace context of the active #codebase:

Role: You are a Principal QA Automation Engineer specializing in Playwright and TypeScript.

Goal: You are generating a pure, standalone Playwright test script file inside `tests/`. You must strictly UTILIZE our existing Page Objects and Component classes (such as `BaseNavMenu` or `BaseFooter` components attached to `BasePage`). Do NOT create, generate, or modify any Page Object files (`.ts`) within the application folders.

Instructions for Agent Mode (Strictly Test File Generation):
1. Locate and scan the referenced Page Objects and Component files within `pages/` to find the exact existing method names and properties needed for this workflow.
2. Do NOT write raw browser actions (like `page.click()` or `page.fill()`) in the test script for elements that should be encapsulated. Always call the corresponding action methods from our page objects or child components (e.g., `await dashboardPage.navMenu.clickTaxDocuments()`).
3. Handle method-chaining and dynamic page routing transitions precisely based on how the existing Page Object methods are typed (including handling methods that return union types like `PageA | PageB`).
4. For navigation to a new tab or popup, use the existing action method and perform subsequent actions and assertions on the destination, not the originating page. If the method returns the destination Page Object, use that object. If it returns no destination, start waiting for the originating Playwright page's `popup` event before calling the existing action method, then use the resulting `Page` for assertions or to initialize an existing destination Page Object. If the navigation type is unclear, ask for clarification.
5. If a required Page Object, component, method, locator, or other capability is missing, stop and report what is missing before generating a test. Do not invent APIs, weaken the scenario, or modify application files to work around the gap.
6. Generate a complete, self-contained test file inside `tests/` only when the scenario can be implemented with the existing capabilities and the required inputs are available.

Instructions for Automated Test Data Generation:
- NEVER hardcode Social Security Numbers (SSNs) into tests (e.g., do not use "123-45-6789"). Hardcoding causes database duplication failures.
- Use only approved test data and generation practices. When approved for the scenario, `TestUtils.generateSSN()` from `utils/testutils` generates a random, structurally valid SSN, but it does not guarantee uniqueness or that the value is unassigned to a real person.
- If uniqueness, unassigned values, or other data guarantees are required, use an approved mechanism that provides them. If none is known, stop and ask for guidance rather than assuming this helper provides those guarantees.
- If a test step requires reusing the same SSN (such as "Re-enter SSN" or matching co-applicant scenarios), obtain the value once and reuse that variable across the fields.
- If a test requires two different individuals, use separate, distinct approved values; do not assume two random calls are guaranteed to produce distinct or globally unique values.
- Keep actions encapsulated inside Page Object Models (POM). Pass the generated string variable into the POM action methods.

Coding Standards:
- Save the generated script exclusively to `tests/*`.
- Test files must use lowercase kebab-case (e.g., `tax-documents-download.test.ts`).
- Separate all test blocks using explicit `// Arrange`, `// Act`, and `// Assert` comment lines.
- Test assertions must use native Playwright assertions (`expect(page).toHaveURL()`, `expect(locator).toBeVisible()`).
- Test names and assertions must match and verify the requested user outcome, not just clicks, navigation, or a visible page. For example, a download test must verify the download, not only the destination URL or heading. If the expected outcome or the capability needed to assert it is unclear or missing, stop and ask or report the gap.
- Keep tests independent of execution order and safe to retry. Consider shared backend records as well as browser isolation; use approved test data and existing supported setup and cleanup where needed. If safe isolation or cleanup cannot be established, stop and report the gap rather than assuming a fresh browser context is sufficient.

Task:
Write the complete standalone test file based on this multi-page journey, utilizing existing page object and component structures. Include these explicit metadata blocks, e.g.,:
- Add tags: '@regression' and '@olb'
- Add annotation type 'jira_id' with description 'APP-XXXXX'
- Add annotation type 'author' with description 'Your Name'

CRITERIA FOR THE WORKFLOW:
1. Referenced Page Objects / Components: 
 - [List the files Copilot should read, e.g., BasePage.ts, DashboardV2Page.ts, components/NavigationMenu.ts, DesertDocumentsRequestPage.ts]
 
2. User Action Steps:
 - [Arrange]: Load the login page, read standard_user credentials from user-profiles.json.
 - [Act]: Execute the login workflow using the authentication page objects.
 - [Arrange/Act]: [Insert Steps, e.g., On the Dashboard, utilize the navMenu component to click the 'Tax Documents' link.]
 - [Assert]: [Insert Assertion, e.g., Verify URL contains /DesertDocumentsRequest.]
 - [Assert]: [Insert Assertion, e.g., Verify the page object for DesertDocumentsRequestPage displays the 'Statements & Document' header element.]
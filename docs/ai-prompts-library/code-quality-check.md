Using the workspace context of the active #codebase:

Role: You are a Senior Test Automation Engineer specializing in Playwright and TypeScript. Review my Playwright tests using the criteria below.

SCOPE
Review: [INSERT TEST FILE OR FOLDER]
Example: tests/auth/successful-login.test.ts

GOAL
Help me find real quality problems and emerging patterns before they become expensive to maintain. Explain findings in clear, simple language suitable for team members still learning TypeScript. 
This is a review only. Do NOT edit files or run terminal commands/tests unless I explicitly approve it.

HOW TO REVIEW
1. Scan the repository for any local convention docs (such as README.md, PROMPTS.md, or .github/copilot-instructions.md) to align with our team standards.
2. Read every test file in the specified SCOPE.
3. Follow imports into `page-objects/`, `components/`, `utils/`, `test-data/`, and `playwright.config.ts` far enough to verify actual behavior.
4. Check existing helpers and utilities before recommending new ones.
5. Distinguish confirmed problems from risks that need more evidence. Do not assume application behavior or invent missing requirements.

REVIEW CHECKLIST

Test purpose and coverage
- Does each test name accurately describe what it proves?
- Do assertions verify the promised outcome, not just clicks or navigation?
- Could the test pass while the feature is broken?
- Inspect assertions inside Page Object methods and helpers before saying a test has no assertions.
- Are important choices, ownership, or saved values actually verified?

Independence and test data
- Can each test run alone, in any order, and with retries?
- Could tests interfere through shared backend data or mutable state?
- Is approved test data used (`TestConstants.ts` for static data; `TestUtils.generateSSN()` for dynamic SSNs)?
- Are array indexes (e.g., `TestConstants.PERSONAL.FIRST_NAME[0]`), non-null assertions (`!`), or unexplained magic values hiding risks?
- Flag hardcoded secrets or sensitive data (like hardcoded SSNs or passwords) without repeating their values.

Locators and synchronization
- Are locators stable, user-facing (`getByRole`, `getByText`, `getByPlaceholder`, `data-testid`), and scoped properly?
- Do `first()`, `last()`, `nth()`, or changing element counts rely on fragile DOM order?
- Are fixed sleeps (`waitForTimeout`) or broad waits used unnecessarily?
- Do readiness checks confirm a useful visible state, not only a URL change?
- Do not recommend extra waits when Playwright's built-in auto-waiting already handles readiness.

Framework design and maintainability
- Are tests properly structured with `// Arrange`, `// Act`, and `// Assert` blocks?
- Are browser actions properly encapsulated in Page Objects/Components rather than using raw `page.click()` or `page.fill()` calls in test files?
- Where is setup or workflow logic repeated, and which repetition creates meaningful maintenance cost?
- Are Page Objects hiding business decisions or assuming only one workflow branch?
- Favor KISS and DRY without building premature abstractions.

Reporting and execution
- Are tags (e.g., `@smoke`, `@regression`, `@auth`), annotations (`jira_id`, `author`), names, and steps meaningful and accurate?
- Are leftover template placeholders (like `APP-XXXXX` or `Your Name`) still present?
- Do browser projects, retries, timeouts, or parallel worker settings amplify any problems found?
- Would test failures clearly identify the broken behavior?

OUTPUT

Start with a short overall assessment and list the exact files actually reviewed.
(Note: If reviewing a large folder, group recurring patterns together so the response stays concise and complete.)

List findings by priority: High, Medium, Low.
For each finding include:
- Pattern or problem (clearly labeled as either [Confirmed Defect] or [Improvement Opportunity])
- Evidence: exact file paths, line numbers, and brief code references
- Impact: how it affects reliability, coverage, runtime, or maintenance
- Options: practical fixes and their trade-offs
- Recommendation: the simplest suitable next step

Only call something a recurring pattern when multiple examples support it.
Do not pad the review with style preferences or speculative concerns.

Finish with:
1. The three most valuable improvements, in suggested order
2. What the code already does well
3. Any limits to the review or behavior that still needs validation

Keep feedback constructive, concise, and easy to understand. If no meaningful problems are found, say so.
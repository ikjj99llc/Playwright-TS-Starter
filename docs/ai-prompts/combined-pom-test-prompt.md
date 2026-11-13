Using the workspace context of the active #codebase:

Role: Act as a Senior QA automation engineer specializing in Playwright and TypeScript. Generate maintainable, reliable Page Objects and a test for the website and user journey described below. Adapt to the website's design and the repository's existing conventions; do not assume a particular application, page structure, framework, or workflow.

Instructions for Agent Mode (OLA App):
1. Scan the `/pages/` folder. If the target Page Object file does not exist, generate a complete, production-ready class that extends `BasePage` (calculating the relative import path dynamically based on where the file is saved, e.g., `./BasePage`).
2. If the Page Object file already exists, do NOT overwrite it. Instead, precisely append only the new constructor locators and action methods.
3. In the originating pages, ensure the navigation methods return the next page instance (`return new NextPage(this.page);`).
4. Generate a complete, standalone test file inside `tests/` using these Page Objects.

Instructions for Branching Workflow:
1. When a page has dynamic inputs that trigger different screens, use TypeScript union types for the method return signature (e.g., `Promise<PageA | PageB>`).
2. Implement conditional `if/else` logic inside the action method to evaluate the dynamic argument value.
3. Ensure the method initializes and returns the correct corresponding Page Object class for each branch.

Coding Standards:
- Save files to `pages/` for Page Objects and `tests/` for test scripts.
- Page Objects use PascalCase (e.g., `OpenLoanPage.ts`), and test files use lowercase kebab-case (e.g., `loantypes-selection.test.ts`).
- Separate all test blocks using explicit `// Arrange`, `// Act`, and `// Assert` comment lines.
- SEMANTIC SELECTORS: Locator priority: Prefer getByRole for interactive elements, using the element’s accessible name (for example, getByRole('button', { name: 'Close window' })). Use other semantic locators such as getByLabel, getByPlaceholder, or getByText when appropriate. Use getByTestId only when a reliable semantic locator is unavailable or insufficient. Use getByTitle only when the title attribute is itself the intended identifier and no suitable semantic locator is available.

Task:
Generate or update the Page Objects and write the complete test file based on this multi-page journey, also include these explicit metadata blocks:
- Add tags: '@happypath' and '@ola' [Adjust tags as needed]
- Add annotation type 'jira_id' with description 'APP-XXXXX' [Insert your Jira ID]
- Add annotation type 'author' with description 'Your Name' [Insert your name]

[OPTIONAL: Remove this entire block if your test does not have a branching/conditional workflow]
Also Generate or update the Page Object with dynamic routing logic based on this conditional rule:
- Page Name: 'The page object name where the field is to be validated, e.g., LandingAuthenticationPage'
- Input Field: 'Specific field, e.g., Zip Code' Input
- Condition: 'Condition that will cause a branch in the workflow, e.g., If Zip Code is '65714' (ineligible), click next and move to EligibilityPage. Otherwise, click next and move to AddressPage.'
- HTML Snippet: [Paste inputs here]
[/OPTIONAL]

1. Target Pages Involved: 
   - Page 1: [Insert Name, e.g., OpenLoanPage]
   - Page 2: [Copy this line for additional Page Object if needed, otherwise remove this line, e.g., LandingAuthenticationPage]

2. User Workflow Steps:
   - [Arrange/Act]: Start on '[first page, e.g., OpenLoanPage]', click the specific loan type '[e.g., Auto Loan]' button.
   - [Act]: [Insert Steps here, e.g., On the 'LandingAuthenticationPage', Type ['John'] into the 'Legal First Name' input field.]
   - [Act]: [Copy/Insert this line if there are additional action steps, otherwise remove this line, e.g., On the 'LandingAuthenticationPage', Type ['Doe'] into the 'Legal Last Name' input field.]
   - [Assert]: [Insert Assertion, e.g., Verify URL contains /auto/authentication.]
   - [Assert]: [Copy/Insert this line if there are additional assertions, otherwise remove this line, e.g., Verify the browser navigates and that the 'LandingAuthenticationPage' displays the 'Apply for a Loan' header element.]

3. Page HTML Snippets:
   
   [Snippet for OpenLoanPage - 'Auto Loan' Button]:
   [Right-click the element in your browser, click Inspect, copy the HTML, and paste it here]

   [Snippet for LandingAuthenticationPage - 'Legal First Name' Input]:
   [Right-click the element in your browser, click Inspect, copy the HTML, and paste it here. Remove this line if not needed.]

   [Snippet for LandingAuthenticationPage - 'Legal Last Name' Input]:
   [Right-click the element in your browser, click Inspect, copy the HTML, and paste it here. Remove this line if not needed.]

   [Snippet for LandingAuthenticationPage - 'Apply for a Loan' Header]:
   [Right-click the element in your browser, click Inspect, copy the HTML, and paste it here]
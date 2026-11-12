Using the workspace context of the active #codebase:

Role: You are a Principal QA Automation Engineer specializing in Playwright and TypeScript.

Task:
Parse the provided CSV test data and use it to update/expand our global constants file located at `utils/TestConstants.ts`. 

Instructions:
1. Do not delete or modify existing structures unless explicitly specified in the CSV.
2. Nest all new properties under their appropriate application parent block using clear capital lettering (matching the existing file's convention).
3. Ensure the file structure remains wrapped inside a strictly typed, frozen block (e.g., `export const TestConstants = { ... } as const`) so VS Code IntelliSense works perfectly and values remain immutable.
4. Clean and sanitize raw CSV values (strip unexpected whitespace or malformed quotes) before mapping them to TypeScript properties.
5. If a duplicate key is encountered within a parent block, update its value rather than creating a duplicate property.

CSV Test Data to Add:
[Paste your raw CSV rows here]
# Easy GitHub Actions Workflow Prompt

Copy this prompt, fill in what you know, and give it to the AI assistant. You can write **"please choose the right setting for this project"** if you are not sure.

---

Using the workspace context of the active `#codebase`:

## What I need

Please create or update a GitHub Actions workflow for this project. A workflow is a set of instructions that GitHub runs for me, such as running tests when I update my code.

## Please follow these steps

1. Look at the workflow files, `package.json`, lockfile, Playwright settings, and project notes before changing anything.
2. Use the tools and commands this project already uses. Do not guess at missing commands, passwords, or secret values. Tell me if something important is missing.
3. Only make the workflow run at the times or events I ask for. Do not add extra schedules, buttons, or release steps on your own.
4. If this is a Playwright workflow, install the project's packages and browsers, then run the right tests.
5. Save the Playwright HTML report as a GitHub artifact, even if a test fails. An artifact is a file I can download from the GitHub Actions run.
6. Give the workflow only the permissions it needs. Keep passwords and other secrets private.
7. Do not change app code, tests, or package files unless the workflow cannot work without that change.
8. Check the changes with tools available in this project. Tell me what you checked and whether anything could not be checked.
9. At the end, tell me in simple words what files you changed and what the workflow will do.

## When should it run?

Fill in the choices you want. Remove the choices you do not want.

- **When code is pushed:** [Yes or no. If yes, which branches? For example: `main`]
- **When a pull request is opened or updated:** [Yes or no. If yes, which branches should receive the pull request?]
- **On a timer:** [Yes or no. If yes, how often and what time? Include your time zone. Example: every night at 2:30 a.m. Mountain Time.]
- **When a Git tag is added:** [Yes or no. If yes, which tag names? Example: tags starting with `v`, such as `v1.0.0`. A Git tag is a label for a version of the code.]
- **When I click a button in GitHub:** [Yes or no. This lets me start a run by hand.]

For a timer, use the time zone I gave you to work out the schedule GitHub needs. GitHub schedules use UTC, so the local run time may move by an hour when daylight saving time starts or ends. Tell me the UTC time you chose. If I need it to stay at the same local time all year, explain that GitHub's timer does not handle that change by itself and ask me what I prefer.

## Which tests should run?

- **Tests to run:** [All tests, or only tests with a Playwright tag such as `@smoke` or `@e2e`.]

There are two different kinds of tags:

- A **Git tag** labels a version of the code, like `v1.0.0`. It can start a workflow when that version tag is added.
- A **Playwright test tag** labels tests, like `@smoke`. It can choose which tests the workflow runs.

Do not treat these as the same thing. Before filtering by a Playwright test tag, check that tests with that tag exist. If they do not, tell me instead of making up tests or tags.

## Other details

- **Workflow name:** [A short name, or choose one that fits.]
- **Workflow file:** [File path, or use the project's usual workflow folder.]
- **Node.js version:** [Version, or use the one this project already expects.]
- **Secrets or special settings needed:** [List them, or write "none" or "not sure".]
- **Report or other files to save:** [Name and file location, or use the project's existing report.]
- **Anything else:** [Optional. Write "none" if there is nothing else.]

## Example request

> Please run the Playwright tests every night at 2:30 a.m. Mountain Time. Run only the tests marked `@smoke`. Also run the tests when a pull request is opened for `main`. Please check that the `@smoke` tests exist and tell me what UTC time you used for the nightly schedule.

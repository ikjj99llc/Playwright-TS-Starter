# Playwright & TypeScript Test Automation Suite

Welcome to your automated test suite! This repository contains an end-to-end (E2E) testing framework built with **Playwright**, **TypeScript**, and the **Page Object Model (POM)** pattern. 

This guide provides step-by-step instructions for downloading required applications, setting up your environment on Windows or macOS, configuring environment variables (`.env`), running tests locally via Visual Studio Code, and setting up your own GitHub ecosystem (Repositories, Projects, and GitHub Actions) to take full ownership and scale your test automation suite.

---

## Table of Contents
1. [Prerequisites & Software Installation](#1-prerequisites--software-installation)
   * [Windows Instructions](#a-windows-installation)
   * [macOS Instructions](#b-macos-installation)
2. [Configuring Environment Variables (.env)](#2-configuring-environment-variables-env)
3. [Setting Up Your Environment & Repository](#3-setting-up-your-environment--repository)
4. [Local Development Setup in VS Code](#4-local-development-setup-in-vs-code)
5. [Running Tests & Viewing Reports](#5-running-tests--viewing-reports)
6. [Configuring GitHub Actions for CI/CD](#6-configuring-github-actions-for-cicd)
7. [Setting Up GitHub Projects (Kanban Board)](#7-setting-up-github-projects-kanban-board)
8. [Repository Structure](#8-repository-structure)

---

## 1. Prerequisites & Software Installation

Before getting started, ensure the following applications are installed on your computer. Follow the section specific to your operating system.

### A. Windows Installation

#### 1. Node Version Manager (NVM) & Node.js
* Download and run `nvm-setup.exe` from the official release page: [github.com/coreybutler/nvm-windows/releases](https://github.com/coreybutler/nvm-windows/releases).
* Open a fresh **Command Prompt (CMD)** window and execute:
```cmd
:: Install the latest LTS version of Node.js
nvm install lts

:: Set your system to use the active LTS version
nvm use lts

:: Verify installation (Node version should display)
node -v
npm -v
```

#### 2. Visual Studio Code & Git
* **VS Code:** Download and install from [code.visualstudio.com](https://code.visualstudio.com/).
* **Git:** Download and install from [git-scm.com](https://git-scm.com/).
* **GitHub Desktop (Optional):** Download from [desktop.github.com](https://desktop.github.com/).

---

### B. macOS Installation

#### 1. Node Version Manager (NVM) & Node.js
* Open **Terminal** (`Cmd + Space`, type `Terminal`, press Enter) and run the NVM installation script:
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
```
* Close and reopen your Terminal window, then run:
```bash
# Install the latest LTS version of Node.js
nvm install lts

# Set your system to use the active LTS version
nvm use lts

# Verify installation (Node version should display)
node -v
npm -v
```

#### 2. Visual Studio Code & Git
* **VS Code:** Download and install from [code.visualstudio.com](https://code.visualstudio.com/).
* **Git:** Xcode command line tools usually provide Git. Verify or install by running `xcode-select --install` in Terminal.
* **GitHub Desktop (Optional):** Download from [desktop.github.com](https://desktop.github.com/).

---

### Recommended VS Code Extensions (Both OS)
Open VS Code, click the **Extensions** icon on the left sidebar (`Ctrl+Shift+X` on Windows or `Cmd+Shift+X` on Mac), and install:
1. **Playwright Test for VS Code** (published by Microsoft) – Adds test runner UI, play buttons, and debugging.
2. **GitHub Copilot** (published by GitHub) – Optional AI assistant for rapidly scaffolding tests.

---

## 2. Configuring Environment Variables (.env)

Environment variables store sensitive data (like user login credentials, API tokens, and environment-specific base URLs) outside of the main code base so credentials are never checked into source control.

### Setting Up Your Local `.env` File

1. Locate the `.env.example` template file in the root of the project directory.
2. Create a copy of `.env.example` in the same directory and rename the new file `.env`.
   * **Windows CMD:**
     ```cmd
     copy .env.example .env
     ```
   * **macOS Terminal:**
     ```bash
     cp .env.example .env
     ```
3. Open the newly created `.env` file in VS Code and fill in the missing secrets/values:

```env
# Base URL for the application under test
BASE_URL=https://www.saucedemo.com/

# Test User Credentials
TEST_USER_STANDARD=standard_user
TEST_PASSWORD=secret_sauce

# Headless mode setting (true/false)
HEADLESS=true
```

> ⚠️ **Security Note:** The `.env` file is included in `.gitignore` and must **never** be pushed to GitHub. Always use `.env.example` to track required variable keys for your team.

---

## 3. Setting Up Your Environment & Repository

If you are transferring this codebase to your own company GitHub account:

1. **Create a GitHub Account or Organization:**
   * Go to [github.com](https://github.com) and create an account or sign into your organization.
2. **Create a New Private Repository:**
   * Click **New Repository** -> Name your repository (e.g., `company-web-automation`).
   * Set visibility to **Private**.
3. **Connect Your Local Codebase:**
   * Open your Command Prompt (Windows) or Terminal (macOS) in the project root folder and execute:

* **Windows (CMD):**
```cmd
git init
git remote add origin https://github.com/YOUR_ORGANIZATION_OR_USERNAME/YOUR_REPO_NAME.git
git add .
git commit -m "Initial commit of Playwright automation framework"
git branch -M main
git push -u origin main
```

* **macOS (Terminal):**
```bash
git init
git remote add origin https://github.com/YOUR_ORGANIZATION_OR_USERNAME/YOUR_REPO_NAME.git
git add .
git commit -m "Initial commit of Playwright automation framework"
git branch -M main
git push -u origin main
```

---

## 4. Local Development Setup in VS Code

Once the codebase is cloned to your computer:

1. **Open the project in VS Code:**
   * Select **File > Open Folder...**, and choose the project directory.
   * Open the integrated terminal inside VS Code (`Ctrl + ~` on Windows or `Cmd + ~` on Mac).

2. **Install Dependencies & Browser Binaries:**
   Run the following commands in the VS Code terminal:

   * **Install Node Dependencies:**
     ```bash
     npm ci
     ```

   * **Install Playwright Browser Engine Binaries:**
     ```bash
     npx playwright install --with-deps
     ```

---

## 5. Running Tests & Viewing Reports

### Terminal Execution Commands

* **Run all tests in headless mode (background execution):**
  ```bash
  npx playwright test
  ```

* **Run tests in headed mode (visible browser window):**
  ```bash
  npx playwright test --headed
  ```

* **Run a specific test file:**
  ```bash
  npx playwright test tests/saucedemo-checkout.spec.ts
  ```

* **Run tests by tag (e.g., `@happypath` or `@regression`):**
  ```bash
  npx playwright test --grep "@happypath"
  ```

* **Open the Interactive HTML Test Report:**
  View full test results, video recordings, trace files, and screenshots:
  ```bash
  npx playwright show-report
  ```

### VS Code Testing Interface
1. Click the **Testing (Flask)** icon on the left sidebar of VS Code.
2. Hover over any test or suite and click the green **Play** button to execute it directly inside the editor.

---

## 6. Configuring GitHub Actions for CI/CD

Automated scheduled nightly runs and pull-request triggers are handled by GitHub Actions.

### 1. Configure GitHub Secrets (for `.env` variables)
Because `.env` files are not pushed to GitHub, you must store your secrets in GitHub:
1. Navigate to your repository on **GitHub.com**.
2. Go to **Settings > Secrets and variables > Actions**.
3. Click **New repository secret** for each required variable (e.g., `BASE_URL`, `TEST_USER_STANDARD`, `TEST_PASSWORD`).

### 2. GitHub Actions Workflow Configuration
Ensure the workflow file at `.github/workflows/playwright.yml` maps your GitHub secrets to environment variables:

```yaml
name: Playwright Test Automation Suite

on:
  push:
    branches: [ main, master ]
  pull_request:
    branches: [ main, master ]
  schedule:
    # Runs daily at 6:00 AM UTC (Midnight MST)
    - cron: '0 6 * * *'
  workflow_dispatch: # Allows manual triggers from GitHub UI

jobs:
  test:
    timeout-minutes: 60
    runs-on: ubuntu-latest
    env:
      BASE_URL: ${{ secrets.BASE_URL }}
      TEST_USER_STANDARD: ${{ secrets.TEST_USER_STANDARD }}
      TEST_PASSWORD: ${{ secrets.TEST_PASSWORD }}
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 24
          cache: 'npm'
      - name: Install dependencies
        run: npm ci
      - name: Install Playwright Browsers
        run: npx playwright install --with-deps
      - name: Run Playwright tests
        run: npx playwright test
      - name: Upload Test Report Artifact
        if: always()
        uses: actions/upload-artifact@v4
        with:
          name: playwright-report
          path: playwright-report/
          retention-days: 30
```

3. To run cloud tests on-demand: Go to **GitHub.com** -> **Actions** tab -> Select **Playwright Test Automation Suite** -> Click **Run workflow**.

---

## 7. Setting Up GitHub Projects (Kanban Board)

To track test automation features, maintenance tasks, and bug reports:

1. In your GitHub Organization or account, go to the **Projects** tab and click **New Project**.
2. Select **Board** layout.
3. Configure columns:
   * 🎯 **Backlog / Planned Tests**
   * 🚧 **In Progress**
   * 🔍 **Monitoring (Nightly Runs)**
   * 🐛 **Bugs & Maintenance Spotted**
   * ✅ **Resolved / Completed**
4. Go to Project Settings -> **Linked repositories** -> Select your test automation repository.
5. Log issues in your repository to track maintenance or feature requests, and assign them directly to your board columns.

---

## 8. Repository Structure

```text
├── .github/
│   └── workflows/
│       └── playwright.yml                 # GitHub Actions CI/CD configuration
├── docs/
│   └── ai-prompts/                        # Prompt references
├── fixtures/                              # Shared Playwright fixtures; keep flat initially
├── pages/                                 # Page Object Model (POM) classes
│   └── components/                        # Reusable UI component objects
├── tests/                                 # End-to-end tests, grouped by SauceDemo feature
│   ├── auth/                              # Login and authentication scenarios
│   ├── inventory/                         # Product catalog scenarios
│   ├── cart/                              # Shopping cart scenarios
│   ├── checkout/                          # Checkout scenarios
│   └── example.spec.ts                    # Starter example test
├── utils/                                 # Shared constants and test helpers
├── playwright.config.ts                   # Core Playwright configuration & browsers
├── tsconfig.json                          # TypeScript compiler rules
└── README.md                              # Handover documentation & setup guide
```

Keep test files under the feature folder they exercise. Use `pages/components/` for UI objects that are reusable across page objects; page-specific elements and actions should remain with their page object. The `fixtures/` and `utils/` folders do not need additional subdivisions yet—add them only when their contents become large enough to benefit from grouping. Keep global constants in `utils/TestConstants.ts` when introduced.
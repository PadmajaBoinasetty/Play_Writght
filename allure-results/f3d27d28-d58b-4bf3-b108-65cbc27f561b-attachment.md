# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login\loginNegativeScenario.spec.js >> all negative scenarios >> login without username and password 
- Location: tests\login\loginNegativeScenario.spec.js:16:13

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('.errorMessage')
Expected substring: "Emai and Password is required"
Received string:    "Email and Password is required"
Timeout: 5000ms

Call log:
  - Expect "toContainText" locator('.errorMessage') with timeout 5000ms
  - waiting for locator('.errorMessage')
    14 × locator resolved to <h2 class="errorMessage">…</h2>
       - unexpected value "Email and Password is required"

```

```yaml
- heading "error Email and Password is required" [level=2]:
  - img "error"
  - text: Email and Password is required
```

# Test source

```ts
  1  | import { LoginPage } from "../../pages/LoginPage"
  2  | import { expect } from "@playwright/test"
  3  | import {test} from "../../fixtures/auth.fixture"
  4  | 
  5  | test.describe("all negative scenarios", () => {
  6  | 
  7  |         let loginPage
  8  | 
  9  |         test.beforeEach(async ({ page }) => {
  10 | 
  11 |                 loginPage = new LoginPage(page)
  12 |                 await loginPage.goToUrl()
  13 | 
  14 |         })
  15 | 
  16 |         test("login without username and password ", async ({ page }) => {
  17 | 
  18 |                 await loginPage.submit()
> 19 |                 await expect(page.locator(".errorMessage")).toContainText("Emai and Password is required")
     |                                                             ^ Error: expect(locator).toContainText(expected) failed
  20 | 
  21 |         })
  22 | 
  23 | 
  24 |         test("login with username and without password ", async ({ page }) => {
  25 | 
  26 |                 await loginPage.fillEmail("admin@email.com")
  27 |                 await loginPage.submit()
  28 |                 await expect(page.locator(".errorMessage")).toContainText("Password is required")
  29 | 
  30 |         })
  31 | 
  32 |         test("login without username and with password ", async ({ page }) => {
  33 | 
  34 |                 await loginPage.fillPassword("admin@123")
  35 |                 await loginPage.submit()
  36 |                 await expect(page.locator(".errorMessage")).toContainText("Email is required")
  37 | 
  38 |         })
  39 | 
  40 | })
  41 | 
  42 | 
  43 | 
  44 | 
  45 | 
  46 | 
  47 | 
```
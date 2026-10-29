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
    13 × locator resolved to <h2 class="errorMessage">…</h2>
       - unexpected value "Email and Password is required"

```

```yaml
- heading "error Email and Password is required" [level=2]:
  - img "error"
  - text: Email and Password is required
```

```
TypeError: page.screencast is not a function
```

# Test source

```ts
  1  | import { test as base } from "@playwright/test"
  2  | import { LoginPage } from "../pages/LoginPage";
  3  | import { readJson } from "../utils/readjson.js"
  4  | 
  5  | export const test = base.extend({
  6  | 
  7  |     loginPage: async ({ page }, use) => {
  8  | 
  9  |         console.log("Before running test");
  10 |         const login = new LoginPage(page)
  11 |         await login.goToUrl()
  12 |         await login.fillEmail("admin@email.com")
  13 |         await login.fillPassword("admin@123")
  14 |         await login.submit()
  15 | 
  16 |         await use(login)
  17 |         console.log("After running test");
  18 |     },
  19 | 
  20 |     loginPageJson: async ({ page }, use) => {
  21 |         console.log("Before running test with json fixture");
  22 |         const jsondata = readJson('./testdata/users.json')
  23 |         const login = new LoginPage(page)
  24 |         await login.goToUrl()
  25 |         await login.fillEmail(jsondata.username)
  26 |         await login.fillPassword(jsondata.password)
  27 |         await login.submit()
  28 | 
  29 |         await use(login)
  30 |         console.log("After running test");
  31 |     },
  32 | 
  33 |     page: async ({ page }, use, testInfo) => {
  34 | 
  35 |         await use(page)
  36 |         if (testInfo.status != testInfo.expectedStatus) {
  37 | 
> 38 |             const path = await page.screencast({ path: `screenshots/${testInfo.title}_${Date.now()}.png` })
     |                                     ^ TypeError: page.screencast is not a function
  39 |             await testInfo.attach('screenshot', { body: path, contentType: "image/png" })
  40 | 
  41 |         }
  42 | 
  43 |     }
  44 | 
  45 | })
```
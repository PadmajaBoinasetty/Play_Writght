import { test as base } from "@playwright/test"
import { LoginPage } from "../pages/LoginPage";
import { readJson } from "../utils/readjson.js"

export const test = base.extend({

    loginPage: async ({ page }, use) => {

        console.log("Before running test");
        const login = new LoginPage(page)
        await login.goToUrl()
        await login.fillEmail("admin@email.com")
        await login.fillPassword("admin@123")
        await login.submit()

        await use(login)
        console.log("After running test");
    },

    loginPageJson: async ({ page }, use) => {
        console.log("Before running test with json fixture");
        const jsondata = readJson('./testdata/users.json')
        const login = new LoginPage(page)
        await login.goToUrl()
        await login.fillEmail(jsondata.username)
        await login.fillPassword(jsondata.password)
        await login.submit()

        await use(login)
        console.log("After running test");
    },

    page: async ({ page }, use, testInfo) => {

        await use(page)
        if (testInfo.status != testInfo.expectedStatus) {

            const path = await page.screenshot({ path: `screenshots/${testInfo.title}_${Date.now()}.png` })
            await testInfo.attach('screenshot', { body: path, contentType: "image/png" })

        }

    }

})
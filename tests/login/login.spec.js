import { test } from "../../fixtures/auth.fixture.js"
import { LoginPage } from "../../pages/LoginPage.js"

test("login test with fixture", async ({ page,loginPage }) => {

        await page.waitForTimeout(5000)

})

test("login test with json ", async ({ page,loginPageJson }) => {

        await page.waitForTimeout(5000)

})

test("login test without fixture ", async ({ page }) => {

        const loginPage=new LoginPage(page)
        await loginPage.goToUrl()
        await loginPage.fillEmail("admin@email.com")
        await loginPage.fillPassword("admin@123")
        await loginPage.submit()

        await page.waitForTimeout(5000)

})


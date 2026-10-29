import { LoginPage } from "../../pages/LoginPage"
import { expect } from "@playwright/test"
import {test} from "../../fixtures/auth.fixture"

test.describe("all negative scenarios", () => {

        let loginPage

        test.beforeEach(async ({ page }) => {

                loginPage = new LoginPage(page)
                await loginPage.goToUrl()

        })

        test("login without username and password ", async ({ page }) => {

                await loginPage.submit()
                await expect(page.locator(".errorMessage")).toContainText("Emai and Password is required")

        })


        test("login with username and without password ", async ({ page }) => {

                await loginPage.fillEmail("admin@email.com")
                await loginPage.submit()
                await expect(page.locator(".errorMessage")).toContainText("Password is required")

        })

        test("login without username and with password ", async ({ page }) => {

                await loginPage.fillPassword("admin@123")
                await loginPage.submit()
                await expect(page.locator(".errorMessage")).toContainText("Email is required")

        })

})







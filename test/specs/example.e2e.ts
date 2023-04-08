import LoginPage from '../../login.page.ts'
import SecurePage from '../../secure.page.ts'

describe('Login/logout tests', () => {
    it('User should login with valid credentials to app', async () => {
        await LoginPage.open()
        await LoginPage.login('tomsmith', 'SuperSecretPassword!')
        await expect(SecurePage.flashAlert).toBeExisting()
        await expect(SecurePage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!')
    })

    it('User should be logged out from app', async () => {
        await SecurePage.logout()
        await expect(LoginPage.btnSubmit).toBeDisplayed()
    })
})
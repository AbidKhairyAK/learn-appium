const { remote } = require("webdriverio")

class LoginPage {
	// initialization
	constructor (driver) {
		/** @type {WebdriverIO.Browser} */
		this.driver = driver
	}

	// element locators
	get loginNavbarButton() { return this.driver.$('~Login') }
	get emailInput() { return this.driver.$('~input-email') }
	get passwordInput() { return this.driver.$('~input-password') }
	get loginSubmitButton() { return this.driver.$('~button-LOGIN') }
	get usernameError() { return this.driver.$('//android.widget.ScrollView[@content-desc="Login-screen"]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[4]/android.widget.TextView[1]') }

	// page actions
	async openPage () {
		await this.loginNavbarButton.click()
	}
	async loginProcess (username, password) {
		await this.emailInput.setValue(username)
		await this.passwordInput.setValue(password)
		await this.loginSubmitButton.click()
	}
	async getUsernameError () {
		return await this.usernameError.getText()
	}
}

module.exports = LoginPage
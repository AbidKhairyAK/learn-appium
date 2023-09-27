const { expect } = require('chai')
const setupDriver = require('../utils/setupDriver')
const LoginPage = require('../pageobjects/LoginPage')

describe.skip('LOGIN FEATURE TEST', function () {
	/** @type {WebdriverIO.Browser} */ let driver
	/** @type {LoginPage} */ let loginPage

	before(async function () {
		driver = await setupDriver()
		loginPage = new LoginPage(driver)
	})

	it('login tanpa email', async function () {
		await loginPage.openPage()
		await loginPage.loginProcess('', '12345678')

		await driver.pause(500)
		const errorText = await loginPage.getUsernameError()

		expect(errorText).to.equal('Please enter a valid email address')
	})

	after(async function () {
		await driver.deleteSession()
	})
})
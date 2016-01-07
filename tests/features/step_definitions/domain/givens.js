module.exports = function() {
	
	this.Given(/^I have an account with the email "([^"]*)" and the password "([^"]*)"$/, function(email, password) {

		fixtures.user.signup(email, password);

	});

	this.Given(/^I have logged in with the email "([^"]*)" and the password "([^"]*)"$/, function(email, password) {

		fixtures.user.login(email, password);

	});

}
module.exports = function() {
	
	this.When(/^I delete my account$/, function() {

		server.call('user.deleteMyAccount');

	});

}
module.exports = function() {

	this.Then(/^my account should be deleted$/, function () {
	  
		client.waitUntil(

			function() {

				return server.execute(

					function() {

						var user = Accounts.findUserByUsername('mememe');

						return (!user);

					}
				);

			}

		);

	});

}
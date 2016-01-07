Meteor.methods({

	'user.deleteMyAccount': function() {

		var user = Meteor.user();

		return Meteor.users.remove(user._id);

	}

});
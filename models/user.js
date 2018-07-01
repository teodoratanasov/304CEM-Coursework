var mongoose = require('mongoose');

// User Schema
var UserSchema = mongoose.Schema({
	username: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	}
});

var User = module.exports = mongoose.model('User', UserSchema);

//Add User
module.exports.addUser = function(user, callback){
	User.create(user, callback);
}

//Get User
module.exports.getUser = function(callback,limit){
	User.find(callback).limit(limit);
}

module.exports.getUserById = function(id, callback, limit){
	User.findById(id, callback);
}

// Delete User
module.exports.removeUser = function(id, callback){
    var query = {_id: id};
    User.remove(query,callback);
}

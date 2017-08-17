module.exports = function(app, settings){

	var url = require('url'),
		express = require('express'),
		usersRouter = express.Router();

	var users  = [
		{
			name: 'Marc'
		},
		{
			name: 'Joe'
		},
		{
			name: 'Steve'
		},
	];

	// Get a list of all the users
	usersRouter.get('/', function(req, res, next){
		res.json(users);
	});

	app.use('/api/users', usersRouter);

};

// Divide all of your modules in different files and
// require them here
module.exports = function(app, settings){
	require('./users')(app, settings);
};

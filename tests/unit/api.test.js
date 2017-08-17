var request = require('supertest'),
expect = require("chai").expect;

var express = require('express'),
ROOT_DIR = __dirname + '/../..',
bodyParser = require('body-parser'),
app = express();

// all environments
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

//This allows you to require files relative to the root in any file
requireFromRoot = (function(root) {
  return function(resource) {
    return require(root + " / " + resource);
  }
})(ROOT_DIR);

describe('/api/users/ ', function(){

  before(function(done){
		require(ROOT_DIR + '/routes/users')(app);
		done();
	});

  it('- should GET users', function(done){
  	request(app)
      .get('/api/users/')
      .end(function(err, res){

      	var data = JSON.parse(res.text);
        console.log(data);
      	expect(err).to.be.null;
				expect(data.length).to.equal(3);
      	done();
      });
  });
});

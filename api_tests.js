var supertest = require('supertest');
var should = require('should');

var server = supertest.agent("http://localhost:6001");

describe('API', function() {
	describe('/', function() {
		it('GET / should display home page with code 200', function() {
			return server
			.get('/')
			.expect(200);
		});
	});
});
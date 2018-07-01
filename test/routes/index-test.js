var app = require('../../app');
var supertest = require('supertest');
var config = require('../../config/config');

var api = supertest('http://' + config.serverIp + ':' + app.get('port'));

describe('Server should start', function () {

	it('Check for server status', function (done) {
		api.get('/')
			.set('Accept', 'application/json')
			.expect('Content-Type', 'text/html; charset=utf-8')
			.expect(200, done);
	});
});
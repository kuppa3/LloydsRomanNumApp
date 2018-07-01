var app = require('../../app');
var supertest = require('supertest');
var config = require('../../config/config');

var api = supertest('http://' + config.serverIp + ':' + app.get('port'));

describe('Roman To Decimal Api Test', function () {

	context('Basic Letter Conversions', function () {

		it('checks I to be 1', function (done) {
			api.get('/romanToDecimal')
				.set('Accept', 'application/json')
				.expect('Content-Type', 'application/json')
				.expect(200)
				.end(function (err, response) {
					var expJSONObj = {
						"roman":"I",
						"decimal":"1"
					};
					expect.deepEqual(response.body, expJSONObj, 'Response should match to expected');
					done();
				});
		});

		it('checks V to be 5', function (done) {
			api.get('/romanToDecimal')
				.set('Accept', 'application/json')
				.expect('Content-Type', 'application/json')
				.expect(200)
				.end(function (err, response) {
					var expJSONObj = {
						"roman":"V",
						"decimal":"5"
					};
					expect.deepEqual(response.body, expJSONObj, 'Response should match to expected');
					done();
				});
		});

		it('checks X to be 10', function (done) {
			api.get('/romanToDecimal')
				.set('Accept', 'application/json')
				.expect('Content-Type', 'application/json')
				.expect(200)
				.end(function (err, response) {
					var expJSONObj = {
						"roman":"X",
						"decimal":"10"
					};
					expect.deepEqual(response.body, expJSONObj, 'Response should match to expected');
					done();
				});
		});

		it('checks L to be 50', function (done) {
			api.get('/romanToDecimal')
				.set('Accept', 'application/json')
				.expect('Content-Type', 'application/json')
				.expect(200)
				.end(function (err, response) {
					var expJSONObj = {
						"roman":"L",
						"decimal":"50"
					};
					expect.deepEqual(response.body, expJSONObj, 'Response should match to expected');
					done();
				});
		});

		it('checks C to be 100', function (done) {
			api.get('/romanToDecimal')
				.set('Accept', 'application/json')
				.expect('Content-Type', 'application/json')
				.expect(200)
				.end(function (err, response) {
					var expJSONObj = {
						"roman":"C",
						"decimal":"100"
					};
					expect.deepEqual(response.body, expJSONObj, 'Response should match to expected');
					done();
				});
		});

		it('checks D to be 500', function (done) {
			api.get('/romanToDecimal')
				.set('Accept', 'application/json')
				.expect('Content-Type', 'application/json')
				.expect(200)
				.end(function (err, response) {
					var expJSONObj = {
						"roman":"D",
						"decimal":"500"
					};
					expect.deepEqual(response.body, expJSONObj, 'Response should match to expected');
					done();
				});
		});

		it('checks M to be 1000', function (done) {
			api.get('/romanToDecimal')
				.set('Accept', 'application/json')
				.expect('Content-Type', 'application/json')
				.expect(200)
				.end(function (err, response) {
					var expJSONObj = {
						"roman":"M",
						"decimal":"1000"
					};
					expect.deepEqual(response.body, expJSONObj, 'Response should match to expected');
					done();
				});
		});
	});

	context('Conversion of subtractive Roman numerals', function () {

		it('checks IV to be 4', function (done) {
			api.get('/romanToDecimal')
				.set('Accept', 'application/json')
				.expect('Content-Type', 'application/json')
				.expect(200)
				.end(function (err, response) {
					var expJSONObj = {
						"roman":"IV",
						"decimal":"4"
					};
					expect.deepEqual(response.body, expJSONObj, 'Response should match to expected');
					done();
				});
		});

		it('checks IX to be 9', function (done) {
			api.get('/romanToDecimal')
				.set('Accept', 'application/json')
				.expect('Content-Type', 'application/json')
				.expect(200)
				.end(function (err, response) {
					var expJSONObj = {
						"roman":"IX",
						"decimal":"9"
					};
					expect.deepEqual(response.body, expJSONObj, 'Response should match to expected');
					done();
				});
		});

		it('checks XL to be 40', function (done) {
			api.get('/romanToDecimal')
				.set('Accept', 'application/json')
				.expect('Content-Type', 'application/json')
				.expect(200)
				.end(function (err, response) {
					var expJSONObj = {
						"roman":"XL",
						"decimal":"40"
					};
					expect.deepEqual(response.body, expJSONObj, 'Response should match to expected');
					done();
				});
		});

		it('checks XC to be 90', function (done) {
			api.get('/romanToDecimal')
				.set('Accept', 'application/json')
				.expect('Content-Type', 'application/json')
				.expect(200)
				.end(function (err, response) {
					var expJSONObj = {
						"roman":"XC",
						"decimal":"90"
					};
					expect.deepEqual(response.body, expJSONObj, 'Response should match to expected');
					done();
				});
		});

		it('checks CD to be 400', function (done) {
			api.get('/romanToDecimal')
				.set('Accept', 'application/json')
				.expect('Content-Type', 'application/json')
				.expect(200)
				.end(function (err, response) {
					var expJSONObj = {
						"roman":"CD",
						"decimal":"400"
					};
					expect.deepEqual(response.body, expJSONObj, 'Response should match to expected');
					done();
				});
		});

		it('checks CM to be 900', function (done) {
			api.get('/romanToDecimal')
				.set('Accept', 'application/json')
				.expect('Content-Type', 'application/json')
				.expect(200)
				.end(function (err, response) {
					var expJSONObj = {
						"roman":"CM",
						"decimal":"900"
					};
					expect.deepEqual(response.body, expJSONObj, 'Response should match to expected');
					done();
				});
		});
	});

	context('Conversion of complex Roman numerals', function () {

		it('checks III to be 3', function (done) {
			api.get('/romanToDecimal')
				.set('Accept', 'application/json')
				.expect('Content-Type', 'application/json')
				.expect(200)
				.end(function (err, response) {
					var expJSONObj = {
						"roman":"III",
						"decimal":"3"
					};
					expect.deepEqual(response.body, expJSONObj, 'Response should match to expected');
					done();
				});
		});

		it('checks VIII to be 8', function (done) {
			api.get('/romanToDecimal')
				.set('Accept', 'application/json')
				.expect('Content-Type', 'application/json')
				.expect(200)
				.end(function (err, response) {
					var expJSONObj = {
						"roman":"VIII",
						"decimal":"8"
					};
					expect.deepEqual(response.body, expJSONObj, 'Response should match to expected');
					done();
				});
		});

		it('checks XIX to be 19', function (done) {
			api.get('/romanToDecimal')
				.set('Accept', 'application/json')
				.expect('Content-Type', 'application/json')
				.expect(200)
				.end(function (err, response) {
					var expJSONObj = {
						"roman":"XIX",
						"decimal":"19"
					};
					expect.deepEqual(response.body, expJSONObj, 'Response should match to expected');
					done();
				});
		});

		it('checks XXXVIII to be 38', function (done) {
			api.get('/romanToDecimal')
				.set('Accept', 'application/json')
				.expect('Content-Type', 'application/json')
				.expect(200)
				.end(function (err, response) {
					var expJSONObj = {
						"roman":"XXXVIII",
						"decimal":"38"
					};
					expect.deepEqual(response.body, expJSONObj, 'Response should match to expected');
					done();
				});
		});

		it('checks MCMIV to be 1904', function (done) {
			api.get('/romanToDecimal')
				.set('Accept', 'application/json')
				.expect('Content-Type', 'application/json')
				.expect(200)
				.end(function (err, response) {
					var expJSONObj = {
						"roman":"MCMIV",
						"decimal":"1904"
					};
					expect.deepEqual(response.body, expJSONObj, 'Response should match to expected');
					done();
				});
		});

		it('checks MMMCMXCIX to be 3999', function (done) {
			api.get('/romanToDecimal')
				.set('Accept', 'application/json')
				.expect('Content-Type', 'application/json')
				.expect(200)
				.end(function (err, response) {
					var expJSONObj = {
						"roman":"MMMCMXCIX",
						"decimal":"3999"
					};
					expect.deepEqual(response.body, expJSONObj, 'Response should match to expected');
					done();
				});
		});
	});
});
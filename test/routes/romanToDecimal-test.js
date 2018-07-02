/*
 * @FileName: romanToDecimal-test.js
 * @Author: Konark Uppal
 * @Description: test cases for romanToDecimal.js.
*/

let app = require('../../app');
let supertest = require('supertest');
let chai = require('chai');
let expect = chai.assert;
let config = require('../../config/config');

let api = supertest('http://' + config.serverIp + ':' + app.get('port'));

describe('Roman To Decimal Api Test', () => {

	context('Basic Letter Conversions', () => {

		it('checks I to be 1', (done) => {
			api.post('/romanToDecimal')
				.send({"roman":"I"})
				.set('Accept', 'application/json')
				.expect('Content-Type', 'application/json')
				.expect(200)
				.end((err, response) => {
					let expJSONObj = {
						"roman":"I",
						"decimal":"1"
					};
					expect.deepEqual(response.body, expJSONObj, 'Response should match to expected');
					done();
				});
		});

		it('checks V to be 5', (done) => {
			api.post('/romanToDecimal')
				.send({"roman":"V"})
				.set('Accept', 'application/json')
				.expect('Content-Type', 'application/json')
				.expect(200)
				.end((err, response) => {
					let expJSONObj = {
						"roman":"V",
						"decimal":"5"
					};
					expect.deepEqual(response.body, expJSONObj, 'Response should match to expected');
					done();
				});
		});

		it('checks X to be 10', (done) => {
			api.post('/romanToDecimal')
				.send({"roman":"X"})
				.set('Accept', 'application/json')
				.expect('Content-Type', 'application/json')
				.expect(200)
				.end((err, response) => {
					let expJSONObj = {
						"roman":"X",
						"decimal":"10"
					};
					expect.deepEqual(response.body, expJSONObj, 'Response should match to expected');
					done();
				});
		});

		it('checks L to be 50', (done) => {
			api.post('/romanToDecimal')
				.send({"roman":"L"})
				.set('Accept', 'application/json')
				.expect('Content-Type', 'application/json')
				.expect(200)
				.end((err, response) => {
					let expJSONObj = {
						"roman":"L",
						"decimal":"50"
					};
					expect.deepEqual(response.body, expJSONObj, 'Response should match to expected');
					done();
				});
		});

		it('checks C to be 100', (done) => {
			api.post('/romanToDecimal')
				.send({"roman":"C"})
				.set('Accept', 'application/json')
				.expect('Content-Type', 'application/json')
				.expect(200)
				.end((err, response) => {
					let expJSONObj = {
						"roman":"C",
						"decimal":"100"
					};
					expect.deepEqual(response.body, expJSONObj, 'Response should match to expected');
					done();
				});
		});

		it('checks D to be 500', (done) => {
			api.post('/romanToDecimal')
				.send({"roman":"D"})
				.set('Accept', 'application/json')
				.expect('Content-Type', 'application/json')
				.expect(200)
				.end((err, response) => {
					let expJSONObj = {
						"roman":"D",
						"decimal":"500"
					};
					expect.deepEqual(response.body, expJSONObj, 'Response should match to expected');
					done();
				});
		});

		it('checks M to be 1000', (done) => {
			api.post('/romanToDecimal')
				.send({"roman":"M"})
				.set('Accept', 'application/json')
				.expect('Content-Type', 'application/json')
				.expect(200)
				.end((err, response) => {
					let expJSONObj = {
						"roman":"M",
						"decimal":"1000"
					};
					expect.deepEqual(response.body, expJSONObj, 'Response should match to expected');
					done();
				});
		});
	});

	context('Conversion of subtractive Roman numerals', () => {

		it('checks IV to be 4', (done) => {
			api.post('/romanToDecimal')
				.send({"roman":"IV"})
				.set('Accept', 'application/json')
				.expect('Content-Type', 'application/json')
				.expect(200)
				.end((err, response) => {
					let expJSONObj = {
						"roman":"IV",
						"decimal":"4"
					};
					expect.deepEqual(response.body, expJSONObj, 'Response should match to expected');
					done();
				});
		});

		it('checks IX to be 9', (done) => {
			api.post('/romanToDecimal')
				.send({"roman":"IX"})
				.set('Accept', 'application/json')
				.expect('Content-Type', 'application/json')
				.expect(200)
				.end((err, response) => {
					let expJSONObj = {
						"roman":"IX",
						"decimal":"9"
					};
					expect.deepEqual(response.body, expJSONObj, 'Response should match to expected');
					done();
				});
		});

		it('checks XL to be 40', (done) => {
			api.post('/romanToDecimal')
				.send({"roman":"XL"})
				.set('Accept', 'application/json')
				.expect('Content-Type', 'application/json')
				.expect(200)
				.end((err, response) => {
					let expJSONObj = {
						"roman":"XL",
						"decimal":"40"
					};
					expect.deepEqual(response.body, expJSONObj, 'Response should match to expected');
					done();
				});
		});

		it('checks XC to be 90', (done) => {
			api.post('/romanToDecimal')
				.send({"roman":"XC"})
				.set('Accept', 'application/json')
				.expect('Content-Type', 'application/json')
				.expect(200)
				.end((err, response) => {
					let expJSONObj = {
						"roman":"XC",
						"decimal":"90"
					};
					expect.deepEqual(response.body, expJSONObj, 'Response should match to expected');
					done();
				});
		});

		it('checks CD to be 400', (done) => {
			api.post('/romanToDecimal')
				.send({"roman":"CD"})
				.set('Accept', 'application/json')
				.expect('Content-Type', 'application/json')
				.expect(200)
				.end((err, response) => {
					let expJSONObj = {
						"roman":"CD",
						"decimal":"400"
					};
					expect.deepEqual(response.body, expJSONObj, 'Response should match to expected');
					done();
				});
		});

		it('checks CM to be 900', (done) => {
			api.post('/romanToDecimal')
				.send({"roman":"CM"})
				.set('Accept', 'application/json')
				.expect('Content-Type', 'application/json')
				.expect(200)
				.end((err, response) => {
					let expJSONObj = {
						"roman":"CM",
						"decimal":"900"
					};
					expect.deepEqual(response.body, expJSONObj, 'Response should match to expected');
					done();
				});
		});
	});

	context('Conversion of complex Roman numerals', () => {

		it('checks III to be 3', (done) => {
			api.post('/romanToDecimal')
				.send({"roman":"III"})
				.set('Accept', 'application/json')
				.expect('Content-Type', 'application/json')
				.expect(200)
				.end((err, response) => {
					let expJSONObj = {
						"roman":"III",
						"decimal":"3"
					};
					expect.deepEqual(response.body, expJSONObj, 'Response should match to expected');
					done();
				});
		});

		it('checks VIII to be 8', (done) => {
			api.post('/romanToDecimal')
				.send({"roman":"VIII"})
				.set('Accept', 'application/json')
				.expect('Content-Type', 'application/json')
				.expect(200)
				.end((err, response) => {
					let expJSONObj = {
						"roman":"VIII",
						"decimal":"8"
					};
					expect.deepEqual(response.body, expJSONObj, 'Response should match to expected');
					done();
				});
		});

		it('checks XIX to be 19', (done) => {
			api.post('/romanToDecimal')
				.send({"roman":"XIX"})
				.set('Accept', 'application/json')
				.expect('Content-Type', 'application/json')
				.expect(200)
				.end((err, response) => {
					let expJSONObj = {
						"roman":"XIX",
						"decimal":"19"
					};
					expect.deepEqual(response.body, expJSONObj, 'Response should match to expected');
					done();
				});
		});

		it('checks XXXVIII to be 38', (done) => {
			api.post('/romanToDecimal')
				.send({"roman":"XXXVIII"})
				.set('Accept', 'application/json')
				.expect('Content-Type', 'application/json')
				.expect(200)
				.end((err, response) => {
					let expJSONObj = {
						"roman":"XXXVIII",
						"decimal":"38"
					};
					expect.deepEqual(response.body, expJSONObj, 'Response should match to expected');
					done();
				});
		});

		it('checks MCMIV to be 1904', (done) => {
			api.post('/romanToDecimal')
				.send({"roman":"MCMIV"})
				.set('Accept', 'application/json')
				.expect('Content-Type', 'application/json')
				.expect(200)
				.end((err, response) => {
					let expJSONObj = {
						"roman":"MCMIV",
						"decimal":"1904"
					};
					expect.deepEqual(response.body, expJSONObj, 'Response should match to expected');
					done();
				});
		});

		it('checks MMMCMXCIX to be 3999', (done) => {
			api.post('/romanToDecimal')
				.send({"roman":"MMMCMXCIX"})
				.set('Accept', 'application/json')
				.expect('Content-Type', 'application/json')
				.expect(200)
				.end((err, response) => {
					let expJSONObj = {
						"roman":"MMMCMXCIX",
						"decimal":"3999"
					};
					expect.deepEqual(response.body, expJSONObj, 'Response should match to expected');
					done();
				});
		});
	});
});
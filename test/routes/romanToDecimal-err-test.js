/*
* @FileName: romanToDecimal-err-test.js
* @Author: Konark Uppal
* @Description: negative test cases for romanToDecimal.js.
*/

let app = require('../../app')
let supertest = require('supertest')
let chai = require('chai')
let expect = chai.assert
let config = require('../../config/config')

let api = supertest('http://' + config.serverIp + ':' + app.get('port'))

describe('Error Scenarios for Roman To Decimal Api', () => {
  context('Checks for input', () => {
    it('throws error for no input provided', (done) => {
      api.post('/romanToDecimal')
        .set('Accept', 'application/json')
        .expect('Content-Type', 'application/json')
        .expect(400)
        .end((err, response) => {
          let expJSONObj = {
            'error': 'Input is missing.'
          }
          expect.deepEqual(response.body, expJSONObj, 'Response should match to expected')
          done()
        })
    })

    it('checks that all symbols belong to roman numeral system', (done) => {
      api.post('/romanToDecimal')
        .send({ 'roman': 'XIQ' })
        .set('Accept', 'application/json')
        .expect('Content-Type', 'application/json')
        .expect(400)
        .end((err, response) => {
          let expJSONObj = {
            'error': 'Incorrect input.'
          }
          expect.deepEqual(response.body, expJSONObj, 'Response should match to expected')
          done()
        })
    })

    it('checks that V,L,D are not repeated', (done) => {
      api.post('/romanToDecimal')
        .send({ 'roman': 'VV' })
        .set('Accept', 'application/json')
        .expect('Content-Type', 'application/json')
        .expect(400)
        .end((err, response) => {
          let expJSONObj = {
            'error': 'Incorrect input.'
          }
          expect.deepEqual(response.body, expJSONObj, 'Response should match to expected')
          done()
        })
    })

    it('checks that I,X,C,M are not repeated more than thrice', (done) => {
      api.post('/romanToDecimal')
        .send({ 'roman': 'XXXX' })
        .set('Accept', 'application/json')
        .expect('Content-Type', 'application/json')
        .expect(400)
        .end((err, response) => {
          let expJSONObj = {
            'error': 'Incorrect input.'
          }
          expect.deepEqual(response.body, expJSONObj, 'Response should match to expected')
          done()
        })
    })

    it('checks that input string is in descending order', (done) => {
      api.post('/romanToDecimal')
        .send({ 'roman': 'XIXX' })
        .set('Accept', 'application/json')
        .expect('Content-Type', 'application/json')
        .expect(400)
        .end((err, response) => {
          let expJSONObj = {
            'error': 'Incorrect input.'
          }
          expect.deepEqual(response.body, expJSONObj, 'Response should match to expected')
          done()
        })
    })

    it('checks that subtractive symbol is not placed at 2nd position from itself', (done) => {
      api.post('/romanToDecimal')
        .send({ 'roman': 'IXI' })
        .set('Accept', 'application/json')
        .expect('Content-Type', 'application/json')
        .expect(400)
        .end((err, response) => {
          let expJSONObj = {
            'error': 'Incorrect input.'
          }
          expect.deepEqual(response.body, expJSONObj, 'Response should match to expected')
          done()
        })
    })
  })
})

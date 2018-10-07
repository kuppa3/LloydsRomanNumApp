/*
* @FileName: romanToDecimal-test.js
* @Author: Konark Uppal
* @Description: positive test cases for romanToDecimal.js.
*/

let app = require('../../app')
let supertest = require('supertest')
let chai = require('chai')
let expect = chai.assert
let config = require('../../config/config')

let api = supertest('http://' + config.serverIp + ':' + app.get('port'))

describe('Roman To Decimal Api Test', () => {
  context('Basic Letter Conversions', () => {
    it('checks L to be 50', (done) => {
      api.post('/romanToDecimal')
        .send({ 'roman': 'L' })
        .set('Accept', 'application/json')
        .expect('Content-Type', 'application/json')
        .expect(200)
        .end((err, response) => {
          let expJSONObj = {
            'roman': 'L',
            'decimal': '50'
          }
          expect.deepEqual(response.body, expJSONObj, 'Response should match to expected')
          done()
        })
    })

    it('checks D to be 500', (done) => {
      api.post('/romanToDecimal')
        .send({ 'roman': 'D' })
        .set('Accept', 'application/json')
        .expect('Content-Type', 'application/json')
        .expect(200)
        .end((err, response) => {
          let expJSONObj = {
            'roman': 'D',
            'decimal': '500'
          }
          expect.deepEqual(response.body, expJSONObj, 'Response should match to expected')
          done()
        })
    })

    it('checks M to be 1000', (done) => {
      api.post('/romanToDecimal')
        .send({ 'roman': 'M' })
        .set('Accept', 'application/json')
        .expect('Content-Type', 'application/json')
        .expect(200)
        .end((err, response) => {
          let expJSONObj = {
            'roman': 'M',
            'decimal': '1000'
          }
          expect.deepEqual(response.body, expJSONObj, 'Response should match to expected')
          done()
        })
    })
  })

  context('Conversion of subtractive Roman numerals', () => {
    it('checks CD to be 400', (done) => {
      api.post('/romanToDecimal')
        .send({ 'roman': 'CD' })
        .set('Accept', 'application/json')
        .expect('Content-Type', 'application/json')
        .expect(200)
        .end((err, response) => {
          let expJSONObj = {
            'roman': 'CD',
            'decimal': '400'
          }
          expect.deepEqual(response.body, expJSONObj, 'Response should match to expected')
          done()
        })
    })

    it('checks CM to be 900', (done) => {
      api.post('/romanToDecimal')
        .send({ 'roman': 'CM' })
        .set('Accept', 'application/json')
        .expect('Content-Type', 'application/json')
        .expect(200)
        .end((err, response) => {
          let expJSONObj = {
            'roman': 'CM',
            'decimal': '900'
          }
          expect.deepEqual(response.body, expJSONObj, 'Response should match to expected')
          done()
        })
    })
  })

  context('Conversion of complex Roman numerals', () => {
    it('checks MCMIV to be 1904', (done) => {
      api.post('/romanToDecimal')
        .send({ 'roman': 'MCMIV' })
        .set('Accept', 'application/json')
        .expect('Content-Type', 'application/json')
        .expect(200)
        .end((err, response) => {
          let expJSONObj = {
            'roman': 'MCMIV',
            'decimal': '1904'
          }
          expect.deepEqual(response.body, expJSONObj, 'Response should match to expected')
          done()
        })
    })

    it('checks MMMCMXCIX to be 3999', (done) => {
      api.post('/romanToDecimal')
        .send({ 'roman': 'MMMCMXCIX' })
        .set('Accept', 'application/json')
        .expect('Content-Type', 'application/json')
        .expect(200)
        .end((err, response) => {
          let expJSONObj = {
            'roman': 'MMMCMXCIX',
            'decimal': '3999'
          }
          expect.deepEqual(response.body, expJSONObj, 'Response should match to expected')
          done()
        })
    })
  })
})

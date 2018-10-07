/*
* @FileName: index-test.js
* @Author: Konark Uppal
* @Description: test-case for index.js file.
*/

let app = require('../../app')
let supertest = require('supertest')
let config = require('../../config/config')

let api = supertest('http://' + config.serverIp + ':' + app.get('port'))

describe('Server should start', () => {
  it('Check for server status', (done) => {
    api.get('/')
      .set('Accept', 'application/json')
      .expect('Content-Type', 'text/html; charset=utf-8')
      .expect(200, done)
  })
})

/*
 * @FileName: helpers.js
 * @Author: Konark Uppal
 * @Description: contains all the helper functions for server & routes.
*/

/**
 * Normalize a port into a number, string, or false.
 */

let normalizePort = (val) => {
  let port = parseInt(val, 10)

  if (isNaN(port)) {
    // named pipe
    return val
  }

  if (port >= 0) {
    // port number
    return port
  }

  return false
}

module.exports = {
  normalizePort
}

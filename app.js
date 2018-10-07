/*
 * @FileName: app.js
 * @Author: Konark Uppal
 * @Description: creates the app and attaches to middlewares and routes.
*/

let createError = require('http-errors')
let express = require('express')
let path = require('path')
let cookieParser = require('cookie-parser')
let logger = require('morgan')
let helpers = require('./bin/helpers')
let config = require('./config/config')
let routes = require('./routes/index')
let cors = require('cors')

let app = express()

app.use(cors())

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'dist/UI')))

routes(app)

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404))
})

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

app.set('port', helpers.normalizePort(process.env.PORT || config.port))

module.exports = app

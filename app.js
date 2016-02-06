// ------------------------------
// Module Dependencies
// ------------------------------
var express = require('express'),
	stylus = require('stylus'),
	nib = require('nib')

// ------------------------------
// Initialize Express
// ------------------------------
var app = express()

function compile(str, path) {
  return stylus(str)
    .set('filename', path)
    .use(nib())
}
app.set('views', __dirname + '/app/views')
app.set('view engine', 'jade')
app.use(express.logger('dev'))
app.use(stylus.middleware(
  { src: __dirname + '/public/styles'
  , compile: compile
  }
))
app.use(express.static(__dirname + '/public'))

// ------------------------------
// Routes
// ------------------------------
app.get('/', function (req, res) {
  res.render('index',
  { title : 'Home' }
  )
})
app.listen(3000)

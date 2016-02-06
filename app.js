// ------------------------------
// Module Dependencies
// ------------------------------
var express = require('express')

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
app.use(express.static(__dirname + '/build'));

// ------------------------------
// Routes
// ------------------------------
app.get('/', function (req, res) {
  res.render('index',
  { title : 'Home' }
  )
})
app.listen(3000)

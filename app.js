process.env.PWD = process.cwd()
// ------------------------------
// Module Dependencies
// ------------------------------
var express = require('express');
var PORT = process.env.PORT || 3000;
var app = express();
var data = require('./app/data')

app.set('view engine', 'jade');
app.set('views', process.env.PWD + '/app/views');

app.use(express.static(process.env.PWD + '/build'));
// ------------------------------
// Routes
// ------------------------------

// app.get('/', function (req, res) {
//   res.render('index', {
//     title : 'testing!!'
//   })
// });

app.get('/', function (req, res) {
  res.render('fluff')
})

app.get('*', function (req, res) {
  var website = req.path.substring(1)
  if (!data[website]) {
    return res.render('404')
  }
  res.render('index', data[website])
})

app.listen(PORT);
console.log('Listening on port ' + PORT);

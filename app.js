// ------------------------------
// Module Dependencies
// ------------------------------
var express = require('express');
var PORT = 3000;
var app = express();

app.set('views', __dirname + '/app/views');
app.set('view engine', 'jade');
app.use(express.static(__dirname + '/build'));

// ------------------------------
// Routes
// ------------------------------
app.get('/', function (req, res) {
  res.render('index', { 
      title : 'Home' 
    }
  )
});

app.listen(PORT);
console.log('Listening on port ' + PORT);

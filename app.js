// ------------------------------
// Module Dependencies
// ------------------------------
var express = require('express');
var PORT = 3000;
var app = express();
var router = express.Router();  


app.set('views', __dirname + '/app/views');
app.set('view engine', 'jade');
app.use(express.static(__dirname + '/build'));

// ------------------------------
// Routes
// ------------------------------
router.get('/', function (req, res) {
  res.render('index', { 
      title : 'index' 
    }
  )
});

router.get('/works', function (req, res) {
  res.render('works', { 
      title : 'Works' 
    }
  )
});

app.use('/', router);

app.listen(PORT);
console.log('Listening on port ' + PORT);

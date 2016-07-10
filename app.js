process.env.PWD = process.cwd()
// ------------------------------
// Module Dependencies
// ------------------------------
var express = require('express');
var PORT = process.env.PORT || 4000;
var app = express();
var router = express.Router();  


app.set('views', process.env.PWD + '/app/views');
app.set('view engine', 'jade');
app.use(express.static(process.env.PWD + '/build'));

// ------------------------------
// Routes
// ------------------------------
router.get('/', function (req, res) {
  res.render('index', { 
      title : 'index'
    }
  )
});

router.get('/bma', function (req, res) {
  res.render('index', { 
      title : 'index' 
    }
  )
})

router.get('/barnegat-medical-associates', function (req, res) {
  res.render('index', { 
      title : 'index' 
    }
  )
})

router.get('/works', function (req, res) {
  res.render('works', { 
      title : 'works' 
    }
  )
});

router.get('/works/bossdock', function (req, res) {
  res.render('works/bossdock', { 
      title : 'bossdock' 
    }
  )
});

app.use('/', router);

app.listen(PORT);
console.log('Listening on port ' + PORT);

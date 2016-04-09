var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

exports.index = function(req, res){
  res.render('index', { title: 'ejs' });
};

router.post('/index', function (req, res, next) {
  res.render('second');
});

module.exports = router;

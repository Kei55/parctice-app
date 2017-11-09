var express = require('express');
var router = express.Router();
var fs = require('fs');
var json = JSON.parse(fs.readFileSync('./data/htmls.json', 'utf8'));
var htmls = json.htmls;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {jsonData: htmls[0] });
});

module.exports = router;

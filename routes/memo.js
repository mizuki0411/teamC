var express = require('express');
var router = express.Router();

let opt = {
    title: '交通費メモ'
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('memo', opt);
});

module.exports = router;

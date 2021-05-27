var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('rireki', { title: '交通費履歴ページ' });
});

module.exports = router;
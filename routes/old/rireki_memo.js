var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('rireki_memo', { title: '履歴編集ページ' });
});

module.exports = router;

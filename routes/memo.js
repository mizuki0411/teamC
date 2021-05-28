var express = require('express');
var router = express.Router();
var router = express.Router();


router.get('/',function(req,res,next){
    res.render('hello',opt);
})
    


let opt = {
    title: '交通費メモ'
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('memo', opt);
});

module.exports = router;

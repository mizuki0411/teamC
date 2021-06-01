var express = require('express');
var router = express.Router();
var router = express.Router();
const { query } = require('express');
//var express = require('express');
//const req = require('express/lib/request');
//const res = require('express/lib/response');
const { redirect } = require('express/lib/response');
var { Client } = require('pg');

var client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'teamc',
  password: 'Nnkrut102',
  port: 5432
});
client.connect()

// フォーム画面の呼び出し
router.get('/', async (req, res, next)=>{
  let opt = {
    title: '交通費メモ'
}
  res.render('memo', opt);
});

// データの送信、データベースへの反映
router.post('/', async (req, res, next)=>{
  //var f1 = req.body.id;
  var f2 = req.body.data;
  var f3 = rep.bady.syudan;
  var f4 = rep.bady.jousya;
  var f5 = rep.bady.kousya;
  var f6 = rep.bady.untin;
  var f6 = rep.bady.kaisu;
  var f7 = rep.bady.job;
  var f8 = rep.bady.memo;
  
  // データベースのカラムに紐づけ
  const query = {
      text: 'INSERT INTO teamc (data, syudan, jousya, kousya, untin, kaisu, job, memo) VALUES($1, $2, $3, $4, $5, $6, $7)',
      values: [f2, f3, f4, f5, f6, f7, f8],
  }
  client.query(query)
  .then(res => {
      console.log(res)
  })
  .catch(e => console.error(e.stack));

  res.redirect('/');    
});

module.exports = router;


/* 小嶋さんがもともと書いていたコード 
router.get('/',function(req,res,next){
    res.render('hello',opt);
})
    
let opt = {
    title: '交通費メモ'
}

router.get('/', function(req, res, next) {
  res.render('memo', opt);
}); */
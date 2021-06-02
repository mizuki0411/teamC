const { query } = require('express');
var express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
const { redirect } = require('express/lib/response');
var router = express.Router();
var { Client } = require('pg');
//const bodyParser = require('body-parser')
//const { decycle, encycle } = require('json-cyclic');

var client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'teamc',
    password: 'Nnkrut102',
    port: 5432
});
client.connect()

/* //データベースの情報を出力する処理
//router.get('/', async (req, res, next)=>{
//    client.query('SELECT * FROM teamc', function (err, result) {
//        let rireki = result.rows
      for(let i = 0; i <= result.rows; i++){
        rireki.push(result.rows[i])
      }
      let opt = {
        rireki:rireki,
      }
      res.render('db',opt);
      console.log(rireki); 
    });
  }
);

 */// フォーム画面の呼び出し
router.get('/', async (req, res, next)=>{
    let = opt = {
        title: 'hello',
    }
    res.render('db/create', opt);
});

// データの送信、データベースへの反映
router.post('/add', async (req, res, next)=>{
    var f1 = req.body.id;
    var f2 = req.body.name;
    
    const query = {
        text: 'INSERT INTO teamc (id, name) VALUES($1, $2)',
        values: [f1, f2],
    }
    client.query(query)
    .then(res => {
        console.log(res)
    })
    .catch(e => console.error(e.stack));

    res.redirect('/db');    
});

// フォームに出力
router.get('/edit', async (req, res, next)=>{
  let id = [req.query.id];
      console.log(id)
      
      client.query( { text: "select * from teamc where id = any($1::integer[])", values: [ id ] }, 
  function( err, result ){
      if( err ){
      console.log( 'error', err );
      }else{
      console.log( result );
  };
  res.redirect('/db');
  });
});

routert.post('/edit', async (req, res, next) =>{
  let id = req.body.id;
  let name = req.body.name;
  const sql = "UPDATE teamc set name='"+ name +"'where id=" + id;

  client.query(sql)
    .then(result => {
        console.log('Update completed');
        console.log(`Rows affected: ${result.rowCount}`);
        console.log(result)
    })
    .catch(err => {
        console.log(err);
        throw err;
    });
       res.redirect('/db');

});

module.exports = router;
const { query } = require('express');
var express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
const { redirect } = require('express/lib/response');
var router = express.Router();
var { Client } = require('pg');
// require('dotenv').config();
// const dbpassword = process.env.DBPW
//const bodyParser = require('body-parser')
//const { decycle, encycle } = require('json-cyclic');

/* // DB接続
var pg = require('pg');
router.get('/', function(req, res, next) {
  var pool = new pg.Pool({
    database: 'teamc',
    user: 'postgres', 
    password: 'Nnkrut1023', 
    port: 5432,
  });

// データベース上に行う処置。
pool.connect( function(err, client) {
  if (err) {
    console.log(err);
  } else {
    client.query('SELECT * FROM rireki', function (err, result) {
      let rireki = result.rows
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
});
});
 */
var client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'teamc',
  password: 'Nnkrut1023',
  port: 5432
});
client.connect()

//データベースの情報をブラウザへ出力する処理
// router.get('/', async (req, res, next)=>{
//   client.query('SELECT * FROM team', function (err, result) {
//       let rireki = result.rows
//     for(let i = 0; i <= result.rows; i++){
//       rireki.push(result.rows[i])
//     }
//     let opt = {
//       rireki:rireki,
//     }
//     res.render('db',opt);
//     //console.log(rireki); 
//   });
// }
// );

router.get('/', async (req, res, next)=>{
  client.query('SELECT * FROM rireki', function (err, result) {
      let rireki = result.rows
    for(let i = 0; i <= result.rows; i++){
      rireki.push(result.rows[i])
    }
    let opt = {
      rireki:rireki,
    }
    res.render('db',opt);
    //console.log(rireki); 
  });
}
);

 // フォーム画面の呼び出し
router.get('/add', async (req, res, next)=>{
  let = opt = {
      title: 'hello',
  }
  res.render('db/create', opt);
});

/* // データの送信、データベースへの反映 (memoへ移行)
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
 */
 
// 更新フォームにデータを呼び出し
// router.post('/edit', async (req, res, next)=>{
// let id = [req.body.id];
//   console.log(id)

//     client.query( { text: "select * from team where id = any($1::integer[])", values: [ id ] }, 
// function( err, result ){
//     if( err ){
//     console.log( 'error', err );
//     }else{
//     //console.log( result );
//     //console.log(Object.keys(result));
//     //console.log(result.rows[0].id);
//     //console.log(result.rows[0].name);
// };
// router.post('/edit', async (req, res, next)=>{
//   let id = [req.body.id];
//     console.log(id)
  
//       client.query( { text: "select * from team where id = any($1::integer[])", values: [ id ] }, 
//   function( err, result ){
//       if( err ){
//       console.log( 'error', err );
//       }else{
//       //console.log( result );
//       //console.log(Object.keys(result));
//       //console.log(result.rows[0].id);
//       //console.log(result.rows[0].name);
//   };
router.post('/edit', async (req, res, next)=>{
  let id = [req.body.id];
    console.log(id)
  
      client.query( { text: "select * from rireki where id = any($1::integer[])", values: [ id ] }, 
  function( err, result ){
      if( err ){
      console.log( 'error', err );
      }else{
      //console.log( result );
      //console.log(Object.keys(result));
      //console.log(result.rows[0].id);
      //console.log(result.rows[0].name);
  };
    let id = result.rows[0].id
    let date = result.rows[0].date
    let syudan = result.rows[0].syudan
    let jousya = result.rows[0].jousya
    let keiyu = result.rows[0].keiyu
    let kousya = result.rows[0].kousya
    let untin = result.rows[0].untin
    let kaisu = result.rows[0].kaisu
    let job = result.rows[0].job
    let memo = result.rows[0].memo

    let opt = {
        id: id,
        date: date,
        syudan: syudan,
        boardingstation: jousya,
        viastation: keiyu,
        getoffstation: kousya,
        untin: untin,
        kaisu: kaisu,
        job: job,
        memo:memo,
    }
    res.render('db/edit',opt); 
});

// 更新した情報をDBに送信
router.post('/edit/1', async (req, res, next) =>{
let id = req.body.id;
let date = req.body.date;
let syudan = req.body.syudan;
let jousya = req.body.boardingstation;
let keiyu = req.body.viastation;
let kousya = req.body. getoffstation;
let untin = req.body.untin;
let kaisu = req.body.kaisu;
let job = req.body.job;
let memo = req.body.memo;

// const sql = 
//   "UPDATE team set memo='"+ memo +"' job='"+ job +"' kaisu= '"+ kaisu +"' untin= '"+ untin +"' kousya='"+ kousya +"' keiyu= '"+ keiyu +"' jousya='"+ jousya +"' syudan='"+ syudan +"' date = '"+ date +"' where id=" + id;
const sql = 
  "UPDATE rireki set memo='"+ memo +"' job='"+ job +"' kaisu= '"+ kaisu +"' untin= '"+ untin +"' kousya='"+ kousya /*+"' keiyu= '"*/+ keiyu +"' jousya='"+ jousya +"' syudan='"+ syudan +"' date = '"+ date +"' where id=" + id;

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
});

 // 削除フォームにデータを呼び出し
 router.post('/del', async (req, res, next)=>{
  let id = [req.body.id];
    console.log(id)
  
  //     client.query( { text: "select * from team where id = any($1::integer[])", values: [ id ] }, 
  // function( err, result ){
  //     if( err ){
  //     console.log( 'error', err );
  //     }else{
    client.query( { text: "select * from rireki where id = any($1::integer[])", values: [ id ] }, 
  function( err, result ){
      if( err ){
      console.log( 'error', err );
      }else{
      //console.log( result );
      //console.log(Object.keys(result));
      //console.log(result.rows[0].id);
      //console.log(result.rows[0].name);
  };
      let id = result.rows[0].id
      let date = result.rows[0].date
      let syudan = result.rows[0].syudan
      let jousya = result.rows[0].jousya
      let keiyu = result.rows[0].keiyu
      let kousya = result.rows[0].kousya
      let untin = result.rows[0].untin
      let kaisu = result.rows[0].kaisu
      let job = result.rows[0].job
      let memo = result.rows[0].memo
  
      let opt = {
          id: id,
          date: date,
          syudan: syudan,
          boardingstation: jousya,
          viastation: keiyu,
          getoffstation: kousya,
          untin: untin,
          kaisu: kaisu,
          job: job,
          memo:memo,
      }
      res.render('db/del',opt); 
  });

// DBから情報を削除
// router.post('/del/1', async (req, res, next) =>{
//   let id = [req.body.id];
//   const sql = "delete from team where id=" + id;

//   client.query(sql, (err, result) => {
//       console.log(result)
//   });
//      res.redirect('/db');
// }); 
// });
router.post('/del/1', async (req, res, next) =>{
  let id = [req.body.id];
  const sql = "delete from rireki where id=" + id;

  client.query(sql, (err, result) => {
      console.log(result)
  });
     res.redirect('/db');
}); 
});

module.exports = router;

//insert into team (date, syudan, jousya, keiyu, kousya, untin, kaisu, job, memo) values (6/2, '電車', '電車', '電車', '電車', '111', '電車', '電車', '電車');
var express = require('express');
var router = express.Router();
var router = express.Router();
const request = require('request');
const { query } = require('express');
//var express = require('express');
//const req = require('express/lib/request');
//const res = require('express/lib/response');
const { redirect } = require('express/lib/response');
/*var { Client } = require('pg');

var client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'teamc',
  password: 'Nnkrut102',
  port: 5432
});
client.connect()*/

//フォーム画面の呼び出し
router.get('/', async (req, res, next)=>{
  let opt = {
    title: '交通費メモ'
}
  res.render('memo', opt);
});

// データの送信、データベースへの反映
/*router.post('/', async (req, res, next)=>{
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


router.get('/',function(req,res,next){
   /* let today = req.body.today;*/
    
router.post('/',function(req,res,next){              //フォームに送信された内容を受け取る

  let stationname1 = '&viaList=' + req.body.boardingstation +':' + req.body.viastation +':' + req.body.getoffstation + '&conditionDetail=T32212332323191:F3321121120000:A23121141:';
  

  let url1 = 'https://api.ekispert.jp/v1/json/';
  let url2 = 'search/course/extreme?';
  let key = 'key=test_U4mdPsXJvgg';
  let memodata1 = req.body.today;
  let memodata2 = req.body.memo_shudan_1;
  let memodata3 = req.body.boardingstation;
  let memodata4 = req.body.getoffstation;
  let memodata5 = req.body.number;  
  let memodata6 = req.body.job;
  let memodata7 = req.body.koutuuhimemo;
  let memodata8 = req.body.viastation;

  
  var stationurl = `${url1}${url2}${key}${stationname1}`;

  console.log(stationurl);

  request.get({
    uri:stationurl,
    headers: {'Content-type': 'application/json'},
    qs: {//key:test_U4mdPsXJvgg,
        viaList: req.body.boardingstation  + ':' + req.body.getoffstation
   },
    json: true
}, function(err, req, data){ 
    let search = []; 
    //for (let i = 0; i<search.length; i++){
      // if(search[i].equals("FareSummary")){
        //search = data.ResultSet.Course[0].Price[i].kind;
          // return search;
     //  } 
        
   //}
  
   search = data.ResultSet.Course[0].Price[2].Oneway;
  
   
    console.log(search); 
    let opt2 = {
        data:search,
        data1:memodata1,
        data2:memodata2,
        data3:memodata3,
        data4:memodata4,
        data5:memodata5,
        data6:memodata6,
        data7:memodata7,
        data8:memodata8};
    res.render('search',opt2);
    });
    
});

var { Client } = require('pg');
var client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'teamc',
  password: 'Nnkrut1023',
  port: 5432
});
client.connect()


// データの送信、データベースへの反映
router.post('/', async (req, res, next)=>{
  var f1 = req.body.today;
  var f2 = req.body.syudan;
  var f3 = req.body.boardingstation;
  var f4 = req.body.viastation;
  var f5 = req.body.getoffstation;
  var f6 = req.body.untin;
  var f7 = req.body.number;
  var f8 = req.body.job;
  var f9 = req.body.koutuuhimemo;

  const query = {
      text: 'INSERT INTO rireki (date, syudan,jousya, keiyu, kousya, untin, kaisu, job, memo) VALUES($1, $2, $3, $4, $5, $6,$7, $8, $9)',
      values: [f1, f2, f3, f4, f5, f6, f7, f8, f9],
  }
  client.query(query)
  .then(res => {
      console.log(res)
  })
  .catch(e => console.error(e.stack));

  res.redirect('/memo');    
});

module.exports = router;
//
/*var result = root['ResultSet']
    var course = result["Course"]
    var price = course["Price"]
    var oneway = price["Oneway"]
    var data = data.result.course.price.oneway;*/




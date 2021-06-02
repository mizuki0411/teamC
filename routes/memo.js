var express = require('express');
var router = express.Router();
var router = express.Router();
const request = require('request');


router.get('/',function(req,res,next){
   /* let today = req.body.today;*/
    res.render('memo',opt1);
});

let opt1 = {
    title: '交通費メモ'
    
};

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
    /*for (let i = 0; i<search.length; i++){
       if(search[i].equals("FareSummary")){
           break;
       } 
        search = data.ResultSet.Course[0].Price[i].Oneway;
   }*/
  
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


module.exports = router;
//
/*var result = root['ResultSet']
    var course = result["Course"]
    var price = course["Price"]
    var oneway = price["Oneway"]
    var data = data.result.course.price.oneway;*/




var express = require('express');
var router = express.Router();


// DB接続
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

module.exports = router;

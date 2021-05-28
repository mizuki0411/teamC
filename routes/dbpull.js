/*
var express = require('express');
var router = express.Router();
var pg = require('pg');
 
/* GET home page. */
/*
router.get('/', function(request, response, next) {
    var con = "tcp://postgres:skylight2021@localhost:5432/postgres";
    pg.connect(con, function(err, client) {
        var query = client.query('select * from teamc;');
        var rows = [];
        query.on('row', function(row) {
            rows.push(row);
        });
        query.on('end', function(row,err) {
            response.render('index', { 
                title: 'Express',
                data:rows
            });
        });
        query.on('error', function(error) {
            console.log("ERROR!!" + error);
            response.render('index', {
                title: title,
                data: null,
                message: "ERROR is occured!"
            });
        });
    });
});
 
module.exports = router;
 
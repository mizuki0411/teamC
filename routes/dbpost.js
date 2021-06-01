var express = require('express');
var router = express.Router();
var { Client } = require('pg');

 var client = new Client({
     user: 'postgres',
     host: 'localhost',
     database: 'teamc',
     password: 'skylight2021',
     port: 5432
 })
 
router.post('/', function(request, response, next) {
    var name_str = request.body["name"];
    var mail_str = request.body["mail"];
    var memo_str = request.body["memo"];
     
    var con = "tcp://postgres:skylight2021@localhost:5432/postgres";
    pg.connect(con, function(err, client) {
        var qstr = "insert into mydata (name,mail,memo) values($1, $2, $3);";
        var query = client.query(qstr,[name_str, mail_str, memo_str]);
        query.on('end', function(row,err) {
            response.redirect("/");
        });
        query.on('error', function(error) {
            console.log("ERROR!");
            response.render('index', {
                title: "ERROR",
                data: null,
                message: "ERROR is occured!"
            });
        });
    });
});
 

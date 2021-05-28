var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var rirekiRouter = require('./routes/rireki');
var topRouter = require('./routes/top');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/rireki', rirekiRouter);
app.use('/top', topRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;


var {Client} = require('pg');

var {Client} = require('pg');
var client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'teamc',
    password: 'Nnkrut1023',
    port: 5432
})
 
client.connect()

var query = 'select rireki.id as 履歴番号,rireki.date as 日付,　syudann as 交通手段, jousya as 乗車駅, untin as 運賃, kaisu as 回数, job as ジョブ名;';

app.get('/',(req,res)=>{

    client.query(query,(error,result)=>{
        console.log(result);
        res.render('rireki.ejs',{results: result}); // results に格納した取得結果を journal.ejs で表示
        client.end();
    });

});

app.listen(3000);
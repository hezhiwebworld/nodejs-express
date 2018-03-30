
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');
var admin = require('./routes/admin');

// 基础配置文件
var cors = require('./config/cors.js');
var swig = require('swig');
var mongoose = require('mongoose');
var app = express();

// view engine setup
app.engine('html', swig.renderFile)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));

// 解析json
app.use(bodyParser.json()); 
// 解析
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// 配置cors跨域
 app.all('*', cors)

app.use('/', index);
app.use('/users', users);
app.use('/admin', admin);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

mongoose.Promise = global.Promise
let ops = {mongos : true}
mongoose.connect('mongodb://localhost:27222/blog2', { useMongoClient: true }, (err) => {
  if(err) {
    console.log('数据库连接失败')
  }else{
    console.log('数据库连接成功')
  }
})

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

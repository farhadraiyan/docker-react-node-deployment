var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mysql      = require('mysql');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();
//database connection 
var connection = mysql.createConnection({
  connectionLimit: 10,
  host: 'mysql-node-depl',
  user: 'root',
  port: '3306',
  password: 'rootpassword',
  database : 'express_react_depl'

})

connection.connect();

//var sql = "CREATE TABLE Admin_User (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), address VARCHAR(255))";
var sql = "INSERT INTO Admin_User (name, address) VALUES ('Farhad Hossain 2', 'Silvio ave 2')";
connection.query(sql, function (error, results, fields) {
  if (error) throw error;
  console.log('Row Inserted');
});

connection.end();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

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

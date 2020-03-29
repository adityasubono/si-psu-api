var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
const bodyParser = require("body-parser");
var logger = require('morgan');
// const cors = require("cors");

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var perumahanRouter = require('./routes/perumahan');
var pertamananRouter = require('./routes/pertamanan');
var permukimanRouter = require('./routes/permukiman');

var app = express();
var corsOptions = {
  origin: "http://localhost:4201"
};

// app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
const db = require("./models");
db
.sequelize
.query('SET FOREIGN_KEY_CHECKS = 0', {raw: true})
.then(function(results) {
  db.sequelize.sync({force: true, logging: console.log}).then(()=>{
    console.log("Drop and re-sync db.");
  });
});
// db.sequelize.sync();
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/perumahans', perumahanRouter);
app.use('/pertamanans',pertamananRouter);
app.use('/permukimans',permukimanRouter);
const PORT = process.env.PORT || 7777;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
module.exports = app;

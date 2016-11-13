const path = require('path');
const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const expressSession = require('express-session');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mymoney', function(err, res) {
    if(err) throw err;
    console.log('succesfully connected');
});

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'src/views'));
app.set('view engine', 'jade');
// middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(expressSession({
  secret: 'my secretz are mine',
  resave: false,
  saveUninitialized: false
}));
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', function (req, res) {
    res.render('index');
});


module.exports = app;
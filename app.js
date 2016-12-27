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
const router = express.Router();
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
app.use(express.static(path.join(__dirname, 'public')));

const Income = require('./models/incomes')(mongoose);

app.get('/', function (req, res) {
    res.render('index');
});

app.get('/payment', function (req, res) {
    res.render('payment');
});

app.get('/spend', function (req, res) {
    res.render('spend');
});

app.get('/income', function (req, res) {
	Income.find({}, function(err, income){
		res.render('income', {
			income: JSON.stringify(income)
		});
	});
});

app.post('/income', function (req, res) {
    new Income({
        concept  : req.body.concept,
        amount   : req.body.amount
    }).save(function(err, doc){
        if(err) res.json(err);
        else res.redirect("/income");
    });

});

module.exports = app;
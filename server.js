// Dependencies
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var cookieParser = require('cookie-parser');
var expressValidator = require('express-validator');
var flash = require('connect-flash');
var session = require('express-session');
var passport = require('passport');
var promisify = require('es6-promisify');
var LocalStrategy = require('passport-local').Strategy;
var mongo = require('mongodb');

// Import environment variables from our .env file
require('dotenv').config();

// Requiring models
// var Note = require('./models/Note');
// var Article = require('./models/Article');

// Set mongoose to leverage built in JavaScript ES6 Promises
mongoose.Promise = Promise;

// Routes for User Auth
var users = require('./routes/users');

// Init app
var app = express();

// BodyParser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: 'topsecret',
  saveUninitialized: true,
  resave: true
}));

// Passport Init
app.use(passport.initialize());
app.use(passport.session());

// Express Validator
app.use(expressValidator({
  errorFormatter: function (param, msg, value) {
    var namespace = param.split('.'),
      root = namespace.shift(),
      formParam = root;

    while (namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }
    return {
      param: formParam,
      msg: msg,
      value: value
    };
  }
}));

// Connect Flash
app.use(flash());

// Global Vars
app.use(function (req, res, next) {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  res.locals.user = req.user || null;
  next();
});

// Database configuration with mongoose
mongoose.connect('mongodb://localhost/JoinCoin');
var db = mongoose.connection;

// Show any mongoose errors
db.on('error', function (error) {
  console.log('Mongoose Error: ', error);
});

// Once logged in to the db through mongoose, log a success message
db.once('open', function () {
  console.log('Mongoose connection successful.');
});

// Routes
app.use('/users', users);

app.get('*', function (req, res) {
  res.sendFile('index.html');
});

// Set Port
app.set('port', process.env.PORT || 3001);

app.listen(app.get('port'), function () {
  console.log('Server started on port ' + app.get('port'));
});

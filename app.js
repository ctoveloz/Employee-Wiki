// Variables
var express = require('express');
var app = express();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

app.use(app.router);
app.use(passport.initialize());
app.use(passport.session());

// Port
app.listen(3200);

// Routes
app.get('/', function(req, res) {

	res.end('Servidor ON!!!');
});

// Route Login
app.post('/login',
  passport.authenticate('local', {
    successRedirect: '/loginSuccess',
    failureRedirect: '/loginFailure'
  })
);
 
app.get('/loginFailure', function(req, res, next) {
  res.send('Failed to authenticate');
});
 
app.get('/loginSuccess', function(req, res, next) {
  res.send('Successfully authenticated');
});


passport.serializeUser(function(user, done) {
  done(null, user);
});
 
passport.deserializeUser(function(user, done) {
  done(null, user);
});

passport.use(new LocalStrategy(function(username, password, done) {
  process.nextTick(function() {

  });
}));
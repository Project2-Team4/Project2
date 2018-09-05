require("dotenv").config();
var express = require("express");
var app = express();
var flash      = require('connect-flash');
var passport = require("passport");
var session = require("express-session");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
var db = require("./models");

var env = require("dotenv").load();
var PORT = process.env.PORT || 3000;

// Middleware
// BodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));
//Passport
app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:true})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash());

// Handlebars
app.set('public', './public')
app.engine('hbs', exphbs({extname: '.hbs'}));
app.set('view engine', '.hbs');




var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

var models = require("./models");

// Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);
var authRoute = require('./routes/auth.js')(app,passport);

require('./config/passport/passport.js')(passport, models.parent , models.user);

models.sequelize.sync().then(function(){
  console.log('Database is working')
}).catch(function(err){
  console.log(err , " Something went wrong with the database")
})

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port 3306. Visit http://localhost:"+PORT + " in your browser."
    );
  });
});

module.exports = app;
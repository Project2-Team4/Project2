//require("dotenv").config();
var express    = require("express");
var app        = express();
var flash      = require('connect-flash')
var passport   = require('passport')
var session    = require('express-session')
var bodyParser = require('body-parser')
var env        = require('dotenv').load()
var exphbs     = require('express-handlebars')
var path       = require('path')
var db         = require("./models");
//var methodOverride = require("method-override");


var PORT = process.env.PORT || 3000;




// Middleware
// BodyParser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));
//app.use(methodOverride("_method"));

// For Passport
app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:true})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash());


 //For Handlebars
 app.set('views', './public')
 app.engine('hbs', exphbs({extname: '.hbs'}));
 app.set('view engine', '.hbs');


//Models
var models = require("./models"); 

// Routes

var authRoute = require('./routes/auth.js')(app,passport);
require('./config/passport/passport.js')(passport, models.user);
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);
// require("./routes/loginRoutes")(app,passport);


var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
 syncOptions.force = true;
}

var models = require("./models");

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
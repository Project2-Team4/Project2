require("dotenv").config();
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
var db = require("./models");
var passport = require("passport");
var session = require("express-session");
var env = require("dotenv").load();
var PORT = process.env.PORT || 3000;

// Middleware
// BodyParser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));
//Passport
app.use(session({
  secret: 'keyboard cat', // Session Secret
  resave: true,
  saveUninitialized:true,
}));
app.use(passport.initialize());
app.use(passport.session()); // Persist login Session
require('./config/passport/passport.js')(passport);

// Handlebars
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");

// Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);
require("./routes/loginRoutes")(app,passport);


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
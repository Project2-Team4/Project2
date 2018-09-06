var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var exphbs = require("express-handlebars");

var routes = require("./controllers/listings_controller.js");

var port = process.env.PORT || 8000;

var app = express();

app.use(express.static(process.cwd() + "/public"));

app.use(bodyParser.urlencoded({ 
    extended: false 
}));

app.use(methodOverride("_method"));

app.engine("handlebars", exphbs({ 
    defaultLayout: "main" 
}));

app.set("view engine", "handlebars");


app.use("/", routes);

app.listen(port);

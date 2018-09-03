    var express    = require('express')
    var app        = express()
    var flash      = require('connect-flash')
    var passport   = require('passport')
    var session    = require('express-session')
    var bodyParser = require('body-parser')
    var env        = require('dotenv').load()
    var exphbs     = require('express-handlebars')
    var path       = require('path')



    //For BodyParser
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());


     // For Passport
    app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:true})); // session secret
    app.use(passport.initialize());
    app.use(passport.session()); // persistent login sessions
    app.use(flash());


     //For Handlebars
    app.set('views', './app/views')
    app.engine('hbs', exphbs({extname: '.hbs'}));
    app.set('view engine', '.hbs');
    

    app.get('/', function(req, res){
     // res.render("signin");
     res.sendFile(path.resolve('app/views/index.html'));
	});


	//Models
    var models = require("./app/models");


    //Routes
    var authRoute = require('./app/routes/auth.js')(app,passport);
    require("./app/routes/apiRoutes")(app);





    


    //load passport strategies
    require('./app/config/passport/passport.js')(passport,models.user);
    require('./app/config/passport/passport.js')(passport,models.parent);


    //Sync Database
   	models.sequelize.sync().then(function(){
    console.log('Nice! Database looks fine')

    }).catch(function(err){
    console.log(err,"Something went wrong with the Database Update!")
    });



	app.listen(5000, function(err){
		if(!err)
		console.log("Site is live on http://localhost:5000"); else console.log(err)

	});




    
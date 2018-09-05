var authController = require('../controllers/authcontrollers');

var path= require('path');

module.exports = function(app,passport){

app.get('/signup', authController.signup);


app.get('/signin', authController.signin);


app.post('/signup', passport.authenticate('parent-signup',  { successRedirect: '/dashboard',
                                                    failureRedirect: '/signup',
                                                    failureFlash: true,
                                                    session:false
                                                }
                                                    
                                                    ));

app.get('/logout',authController.logout);


app.post('/signin', passport.authenticate('parent-signin',  { successRedirect: '/dashboard',
                                                    failureRedirect: '/signin'}
                                                    ));


                                                    app.get('/dashboard',isLoggedIn, authController.dashboard);



app.get("/index", function(req, res) {
    res.sendFile(path.resolve('../public/index.html'));
    //res.render("index");
});

app.get("/job", function(req, res) {
    res.sendFile(path.resolve('../public/job.html'));
    //res.render("job"); // if use handlebars
});


app.get('/about', function(req,res) {
    res.render("about")
});

app.get('/settings', function(req,res) {
    res.render("settings")
});

app.get('/profile', function(req,res) {
    res.render("profile")
});



function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();

    res.redirect('/signin');
}


}

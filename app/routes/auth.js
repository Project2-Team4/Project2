var authController = require('../controllers/authcontroller.js');

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


app.get('/dashboard',isLoggedIn, authController.dashboard);

app.get("/index", function(req, res) {
    res.sendFile(path.resolve('app/views/index.html'));
    //res.render("index");
});

app.get("/job", function(req, res) {
    res.sendFile(path.resolve('app/views/job.html'));
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


app.get('/logout',authController.logout);


app.post('/signin', passport.authenticate('parent-signin',  { successRedirect: '/dashboard',
                                                    failureRedirect: '/signin'}
                                                    ));


function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();

    res.redirect('/signin');
}


}







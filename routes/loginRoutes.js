var db = require("../models");

module.exports = function(app , passport) {
  // Load index page
  app.get("/login", function(req, res) {
    res.render("login");
  });

  // Load example page and pass in an example by id
  app.post('/login',
  passport.authenticate('local-login', { successRedirect: '/',
                                   failureRedirect: '/login',
                                   failureFlash: true })
);

  app.get("/signup", function(req, res) {
       res.render('signup');
  });

  // Load example page and pass in an example by id
  app.post("/signup", function(req, res) {
    
    console.log(req.body);
      db.user.create({
        user_name: req.body.user_name,
        password: req.body.password,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        mob_no: req.body.mob_no,
        email: req.body.email,
      })
        .then(function(login_db){
          res.json(login_db);
        });
    });
      
 
    //    var sql = "INSERT INTO `users`(`first_name`,`last_name`,`mob_no`,`email`,`user_name`, `password`) VALUES ('" + fname + "','" + lname + "','" + mob + "', '" + email + "', '" + name + "','" + pass + "')";
 
    //    var query = db.query(sql, function(err, result) {
 
    //       message = "Succesfully! Your account has been created.";
    //       res.render('signup.ejs',{message: message});
    //    });
  app.get("/dashboard" , isLoggedIn , function(req,res){
    res.render("dashboard");
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });

function isLoggedIn(req,res,next){
  if(req.isAuthenticated())
  return next();

  res.redirect('/login')
}

};


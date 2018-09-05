var exports = module.exports = {}


exports.signup = function(req,res){
    //res.render('index'); //or use bottom
    res.sendFile(__dirname +'/../public/signup.html'); // use this if want to route to html page instead of handlebars
  }
  

exports.signin = function(req,res){
    //res.render('index'); //or use bottom
    res.sendFile(__dirname +'signin.html'); // use this if want to route to html page instead of handlebars
  }
  

exports.dashboard = function(req,res){

	res.render('dashboard'); 

}

exports.index = function(req,res){
  //res.render('index'); //or use bottom
  res.sendFile(__dirname +'index.html'); // use this if want to route to html page instead of handlebars
}

exports.job = function(req,res){
  //res.render('index'); //or use bottom
  res.sendFile(__dirname +'/../public/job.html'); // use this if want to route to html page instead of handlebars
}

exports.about = function(req,res){
  res.render('about');
}

exports.settings = function(req,res){
  res.render('settings');
}

exports.profile = function(req,res){
  res.render('profile');
}

exports.logout = function(req,res){

  req.session.destroy(function(err) {
  res.redirect('/index');
  });

}
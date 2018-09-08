var exports = module.exports = {}

let path = require("path");

exports.signup = function(req,res){

  res.render('signup');
  //res.sendFile(path.resolve(__dirname +'/../public/signup.html'));

}

exports.signin = function(req,res){

	res.render('signin'); 

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
  res.sendFile(__dirname +'job.html'); // use this if want to route to html page instead of handlebars
}

// exports.listings = function(req,res){
//   res.render('listings'); //or use bottom
//   //res.sendFile(__dirname +'listings.html'); // use this if want to route to html page instead of handlebars
// }

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
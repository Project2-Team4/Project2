
  //load bcrypt
  var bCrypt = require('bcrypt-nodejs');

  module.exports = function(passport,user){

  var User = user;
  var LocalStrategy = require('passport-local').Strategy;


  passport.serializeUser(function(user, done) {
          done(null, user.id);
      });


  // used to deserialize the user
  passport.deserializeUser(function(id, done) {
      User.findById(id).then(function(user) {
        if(user){
          done(null, user.get());
        }
        else{
          done(user.errors,null);
        }
      });

  });


  passport.use('user-signup', new LocalStrategy(

    {           
      usernameField : 'email',
      passwordField : 'password',
      passReqToCallback : true // allows us to pass back the entire request to the callback
    },

    function(req, email, password, done){
       

      var generateHash = function(password) {
      return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
      };

       User.findOne({where: {email:email}}).then(function(user){

      if(user)
      {
        console.log('Email is already in use');
        return done(null, false, {message: req.flash(' Email is already in use')} );
        
      }

      else
      {
        var userPassword = generateHash(password);
        var data =
        { email:email,
        password:userPassword,
        firstname: req.body.firstname,
        lastname: req.body.lastname
        };


        User.create(data).then(function(newUser,created){
          if(!newUser){
            return done(null,false);
          }

          if(newUser){
            return done(null,newUser);
            
          }


        });
      }


    }); 



  }



  ));
    
  //LOCAL SIGNIN
  passport.use('user-signin', new LocalStrategy(
    
  {

  // by default, local strategy uses username and password, we will override with email
  usernameField : 'email',
  passwordField : 'password',
  passReqToCallback : true // allows us to pass back the entire request to the callback
  },

  function(req, email, password, done) {

    var User = user;

    var isValidPassword = function(userpass,password){
      return bCrypt.compareSync(password, userpass);
    }

    User.findOne({ where : { email: email}}).then(function (user) {

      if (!user) {
        return done(null, false, { message: 'Email does not exist' });
      }

      if (!isValidPassword(user.password,password)) {

        return done(null, false, { message: 'Incorrect password.' });

      }

      var userinfo = user.get();

      return done(null,userinfo);

    }).catch(function(err){

      console.log("Error:",err);

      return done(null, false, { message: 'Something went wrong with your Signin' });


    });

  }
  ));

  }

    module.exports = function(passport,user){

  var User = user;
  var LocalStrategy = require('passport-local').Strategy;


  passport.serializeUser(function(user, done) {
          done(null, user.id);
      });


  // used to deserialize the user
  passport.deserializeUser(function(id, done) {
      User.findById(id).then(function(user) {
        if(user){
          done(null, user.get());
        }
        else{
          done(user.errors,null);
        }
      });

  });


  passport.use('user-signup', new LocalStrategy(

    {           
      usernameField : 'email',
      passwordField : 'password',
      passReqToCallback : true // allows us to pass back the entire request to the callback
    },

    function(req, email, password, done){
       

      var generateHash = function(password) {
      return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
      };

       User.findOne({where: {email:email}}).then(function(user){

      if(user)
      {
        console.log('Email is already in use');
        return done(null, false, {message: req.flash(' Email is already in use')} );
        
      }

      else
      {
        var userPassword = generateHash(password);
        var data =
        { email:email,
        password:userPassword,
        firstname: req.body.firstname,
        lastname: req.body.lastname
        };


        User.create(data).then(function(newUser,created){
          if(!newUser){
            return done(null,false);
          }

          if(newUser){
            return done(null,newUser);
            
          }


        });
      }


    }); 



  }



  ));
    
  //LOCAL SIGNIN
  passport.use('user-signin', new LocalStrategy(
    
  {

  // by default, local strategy uses username and password, we will override with email
  usernameField : 'email',
  passwordField : 'password',
  passReqToCallback : true // allows us to pass back the entire request to the callback
  },

  function(req, email, password, done) {

    var User = user;

    var isValidPassword = function(userpass,password){
      return bCrypt.compareSync(password, userpass);
    }

    User.findOne({ where : { email: email}}).then(function (user) {

      if (!user) {
        return done(null, false, { message: 'Email does not exist' });
      }

      if (!isValidPassword(user.password,password)) {

        return done(null, false, { message: 'Incorrect password.' });

      }

      var userinfo = user.get();

      return done(null,userinfo);

    }).catch(function(err){

      console.log("Error:",err);

      return done(null, false, { message: 'Something went wrong with your Signin' });


    });

  }
  ));

  }






  //---------------------------------- Parent Login/Sign Up auth -------------------------------------


  
  module.exports = function(passport,parent){
    var Parent = parent;
    var LocalStrategy = require('passport-local').Strategy;
  
  
    passport.serializeUser(function(parent, done) {
            done(null, parent.id);
        });
  
  
    // used to deserialize the user
    passport.deserializeUser(function(id, done) {
        Parent.findById(id).then(function(parent) {
          if(parent){
            done(null, parent.get());
          }
          else{
            done(parent.errors,null);
          }
        });
  
    });
  
  
    passport.use('parent-signup', new LocalStrategy(
  
      {           
        usernameField : 'email',
        passwordField : 'password',
        passReqToCallback : true // allows us to pass back the entire request to the callback
      },
  
      function(req, email, password, done){
         
  
        var generateHash = function(password) {
        return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
        };
  
         Parent.findOne({where: {email:email}}).then(function(parent){
  
        if(parent)
        {
          console.log('Email is already in use');
          return done(null, false, {message: req.flash(' Email is already in use')} );
          
        }
  
        else
        {
          var parentPassword = generateHash(password);
          var data =
          { email:email,
          password:parentPassword,
          firstname: req.body.firstname,
          lastname: req.body.lastname
          };
  
  
          Parent.create(data).then(function(newParent,created){
            if(!newParent){
              return done(null,false);
            }
  
            if(newParent){
              return done(null,newParent);
              
            }
  
  
          });
        }
  
  
      }); 
  
  
  
    }
  
  
  
    ));
      
    //LOCAL SIGNIN
    passport.use('parent-signin', new LocalStrategy(
      
    {
  
    // by default, local strategy uses username and password, we will override with email
    usernameField : 'email',
    passwordField : 'password',
    passReqToCallback : true // allows us to pass back the entire request to the callback
    },
  
    function(req, email, password, done) {
  
      var Parent = parent;
  
      var isValidPassword = function(parentpass,password){
        return bCrypt.compareSync(password, parentpass);
      }
  
      Parent.findOne({ where : { email: email}}).then(function (parent) {
  
        if (!parent) {
          return done(null, false, { message: 'Email does not exist' });
        }
  
        if (!isValidPassword(parent.password,password)) {
  
          return done(null, false, { message: 'Incorrect password.' });
  
        }
  
        var parentinfo = parent.get();
  
        return done(null,parentinfo);
  
      }).catch(function(err){
  
        console.log("Error:",err);
  
        return done(null, false, { message: 'Something went wrong with your Signin' });
  
  
      });
  
    }
    ));
  
    
  
      module.exports = function(passport,parent){
  
    var Parent = parent;
    var LocalStrategy = require('passport-local').Strategy;
  
  
    passport.serializeUser(function(parent, done) {
            done(null, parent.id);
        });
  
  
    // used to deserialize the user
    passport.deserializeUser(function(id, done) {
        Parent.findById(id).then(function(parent) {
          if(parent){
            done(null, parent.get());
          }
          else{
            done(parent.errors,null);
          }
        });
  
    });
  
  
    passport.use('parent-signup', new LocalStrategy(
  
      {           
        usernameField : 'email',
        passwordField : 'password',
        passReqToCallback : true // allows us to pass back the entire request to the callback
      },
  
      function(req, email, password, done){
         
  
        var generateHash = function(password) {
        return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
        };
  
         Parent.findOne({where: {email:email}}).then(function(parent){
  
        if(parent)
        {
          console.log('Email is already in use');
          return done(null, false, {message: req.flash(' Email is already in use')} );
          
        }
  
        else
        {
          var parentPassword = generateHash(password);
          var data =
          { email:email,
          password:parentPassword,
          firstname: req.body.firstname,
          lastname: req.body.lastname
          };
  
  
          Parent.create(data).then(function(newParent,created){
            if(!newParent){
              return done(null,false);
            }
  
            if(newParent){
              return done(null,newParent);
              
            }
  
  
          });
        }
  
  
      }); 
  
  
  
    }
  
  
  
    ));
      
    //LOCAL SIGNIN
    passport.use('parent-signin', new LocalStrategy(
      
    {
  
    // by default, local strategy uses username and password, we will override with email
    usernameField : 'email',
    passwordField : 'password',
    passReqToCallback : true // allows us to pass back the entire request to the callback
    },
  
    function(req, email, password, done) {
  
      var Parent = parent;
  
      var isValidPassword = function(userpass,password){
        return bCrypt.compareSync(password, userpass);
      }
  
      Parent.findOne({ where : { email: email}}).then(function (parent) {
  
        if (!parent) {
          return done(null, false, { message: 'Email does not exist' });
        }
  
        if (!isValidPassword(parent.password,password)) {
  
          return done(null, false, { message: 'Incorrect password.' });
  
        }
  
        var parentinfo = parent.get();
  
        return done(null,parentinfo);
  
      }).catch(function(err){
  
        console.log("Error:",err);
  
        return done(null, false, { message: 'Something went wrong with your Signin' });
  
  
      });
  
    }
    ));
  
    }
  
  
    }
  
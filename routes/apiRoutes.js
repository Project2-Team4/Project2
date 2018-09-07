// =========================
var db = require("../models");
// var parents = require("../models/parents.js");

module.exports = function(app) {
// Find All Listings and return them to the user with res.json
// ===========================================================================
 app.get("/api/listings/", function(req, res) {
   db.Listing.findAll({})
     .then(function(dbListing) {
       res.json(dbListing);
   });
 });

//Post a new listing
// ============================================================
 app.post("/api/listings", function(req, res) {
     console.log(req.body);
     db.Listing.create({
       listing_name: req.body.listing_name,
       listing_description: req.body.listing_description,
       listing_rate: req.body.listing_rate,
       listing_location: req.body.listing_location,
       listing_date: req.body.listing_date,
       // needs: req.body.needs,
     })
       .then(function(dbListing){
         res.json(dbListing);
       });
   });

 // Delete an example by id
 // app.delete("/api/examples/:id", function(req, res) {
 //   db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
 //     res.json(dbExample);
 //   });
 // });


 // Find Users and return them to the user with res.json
// ===========================================================================
app.get("/api/users/", function(req, res) {
 db.User.findAll({})
   .then(function(dbUser) {
     res.json(dbUser);
 });
});

//Post a new listing
// ============================================================
app.post("/api/users", function(req, res) {
   console.log(req.body);
   db.User.create({
     email: req.body.email,
     first_name: req.body.first_name,
     last_name: req.body.last_name,
     password: req.body.password
   })
     .then(function(dbUser){
       res.json(dbUser);
     });
 });

// Delete an example by id
// app.delete("/api/examples/:id", function(req, res) {
//   db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
//     res.json(dbExample);
//   });
// });
};
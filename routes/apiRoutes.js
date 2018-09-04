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
        location: req.body.location,
        duration: req.body.duration,
        dateTime: req.body.dateTime,
        payRate: req.body.payRate,
        totalKids: req.body.totalKids,
        // needs: req.body.needs,
        description: req.body.description
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
};

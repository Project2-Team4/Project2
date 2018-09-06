var express = require("express");
var router = express.Router();

var listing = require("../models/listing.js");

router.get("/", function(req, res) {
  listing.selectAll(function(data) {
    var hbsObject = {
      listings: data
    };
  console.log(hbsObject);
    res.render("listings", hbsObject);
  });
});

router.post("/listings", function(req, res) {
  listing.insertOne([
    "id",
    "listing_name", 
    "listing_location", 
    "listing_date"], 
    [req.body.id,
    req.body.listing_name, 
    req.body.listing_location, 
    req.body.listing_date],
    function(data) {
    res.redirect("/");
  });
});

router.put("/listings/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  listing.updateOne(function(data) {
    res.redirect("/");
  });
});




module.exports = router;

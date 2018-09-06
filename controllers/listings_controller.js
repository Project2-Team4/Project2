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
    "listing_name"
  ], [
    req.body.listing_name
  ], function(data) {
    res.redirect("/");
  });
});

router.put("/listings/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  listing.updateOne({
    expired: true
  }, condition, function(data) {
    res.redirect("/");
  });
});




module.exports = router;

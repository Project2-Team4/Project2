var db = require("../models");
var path = require("path");
var express = require("express");
var app = express();

module.exports = function(app) {

  // app.get("/listings", function (req, res) {
  //   res.sendFile(path.join(__dirname + "/../public/listings.html"));
  // }) 

  // app.get("/create-postings", function (req, res) {
  //   res.sendFile(path.join(__dirname + "/../public/job.html"));
  // }) 

  app.use("/", function (req, res) {
    res.sendFile(path.join(__dirname + "/../public/index.html"));
  })  

  // Load index page

  // app.get("/", function(req, res) {
  //   db.Example.findAll({}).then(function(dbExamples) {
  //     res.render("index", {
  //       msg: "Welcome!",
  //       examples: dbExamples
  //     });
  //   });
  // });

  // Load example page and pass in an example by id

  // app.get("/example/:id", function(req, res) {
  //   db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
  //     res.render("example", {
  //       example: dbExample
  //     });
  //   });
  // });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};

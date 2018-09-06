var orm = require("../config/orm.js");

var listing = {

  selectAll: function(cb) {
    orm.selectAll("listings", function(res) {
      cb(res);
    });
  },

  insertOne: function(cols, vals, cb) {
    orm.insertOne("listings", cols, vals, function(res) {
      cb(res);
    });
  },

  updateOne: function(objColVals, condition, cb) {
    orm.updateOne("listings", objColVals, condition, function(res) {
      cb(res);
    });
  }
};




module.exports = listing;

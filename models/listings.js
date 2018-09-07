module.exports = function(sequelize, DataTypes) {
  var Listing = sequelize.define("Listing", {
    listing_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    listing_description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    listing_rate: {
      type: DataTypes.STRING,
      allowNull: false
    },
    listing_location: {
      type: DataTypes.STRING,
      allowNull: false
    },
    listing_date: {
      type: DataTypes.STRING,
      allowNull: false
    },
  });
  return Listing;
 };




module.exports = listing;

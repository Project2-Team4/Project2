module.exports = function(sequelize, DataTypes) {
  var Listing = sequelize.define("Listing", {
    datetime: {
      type: DataTypes.DATE,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    tel: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false
    },
    hourRate: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });
  return Listing;
};

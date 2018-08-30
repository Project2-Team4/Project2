module.exports = function(sequelize, DataTypes) {
  var Listing = sequelize.define("Listing", {
    location: {
      type: DataTypes.STRING,
      allowNull: false
    },
    dateTime: {
      type: DataTypes.DATE,
      allowNull: false
    },
    duration: {
      type: DataTypes.INTEGER,
      allowNUll: false
    },
    payRate: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    totalKids: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    needs: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },    
  });
  return Listing;
};

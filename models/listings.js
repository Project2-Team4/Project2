module.exports = function(sequelize, DataTypes) {
    var Listing = sequelize.define("Listing", {
      location: {
        type: DataTypes.STRING,
        allowNull: false
      },
      duration: {
        type: DataTypes.STRING,
        allowNUll: false
      },
      dateTime: {
        type: DataTypes.STRING,
        allowNull: false
      },
      payRate: {
        type: DataTypes.STRING,
        allowNull: false
      },
      totalKids: {
        type: DataTypes.STRING,
        allowNull: false
      },
      // needs: {
      //   type: DataTypes.TEXT,
      //   allowNull: false
      // },
      description: {
        type: DataTypes.TEXT,
        allowNull: false
      },    
    });
    return Listing;
  };
  
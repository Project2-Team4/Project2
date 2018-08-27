module.exports = function(sequelize, DataTypes) {
    var Parent = sequelize.define("Parent", {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      age: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      city: {
        type: DataTypes.STRING,
        allowNull: false
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false
      },
      availability: {
        type: DataTypes.BOOLEAN,
        default: false
      },
      yearsOfExp: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      hourlyRate: {
        type: DataTypes.INTEGER,
      },
    });
    return Parent;
  };
  
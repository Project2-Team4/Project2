module.exports = function(sequelize, Sequelize) {
    var User = sequelize.define("user", {
      id: {
        autoIncrement:true,
        primaryKey:true,
        type:Sequelize.INTEGER
        },
      first_name:{
          type:Sequelize.STRING,
          notEmpty: true,
      },
      last_name:{
        type:Sequelize.STRING,
        notEmpty: true,
    },
    mob_no:{
        type:Sequelize.INTEGER,
        notEmpty: true,
    },
    email: {
        type:Sequelize.STRING,
    
    },
    user_name:{
        type:Sequelize.STRING,
        notEmpty: true,
    },
    password:{
        type:Sequelize.STRING,
        allowNull: false,
    },

      

    });
    return User;
  };
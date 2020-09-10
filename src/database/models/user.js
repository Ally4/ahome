// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class User extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   };
//   User.init({
//     firstname: DataTypes.STRING,
//     lastname: DataTypes.STRING,
//     email: DataTypes.STRING,
//     password: DataTypes.STRING,
//     address: DataTypes.STRING,
//     phonenumber: DataTypes.INTEGER,
//     role: DataTypes.STRING,
//     userId: DataTypes.INTEGER
//   }, {
//     sequelize,
//     modelName: 'User',
//   });
//   return User;
// };


module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('users', {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    address: DataTypes.STRING,
    phonenumber: DataTypes.STRING,
    role: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {});
  User.associate = function(models) {
    // associations can be defined here

    User.hasMany(models.houses, {
      foreignKey: 'houseId',
      as: 'houses',
      onDelete: 'CASCADE',
    });
  };
  return User;
};

// database/models/user.js
// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class houses extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   };
//   houses.init({
//     image: DataTypes.STRING,
//     description: DataTypes.STRING,
//     location: DataTypes.STRING,
//     numberofbedrooms: DataTypes.STRING,
//     numberofbathrooms: DataTypes.STRING,
//     status: DataTypes.STRING,
//     houseId: DataTypes.INTEGER
//   }, {
//     sequelize,
//     modelName: 'houses',
//   });
//   return houses;
// };



module.exports = (sequelize, DataTypes) => {
  const houses = sequelize.define('houses', {
    image: DataTypes.STRING,
    description: DataTypes.STRING,
    location: DataTypes.STRING,
    numberofbedrooms: DataTypes.STRING,
    numberofbathrooms: DataTypes.STRING,
    status: DataTypes.STRING,
    houseId: DataTypes.INTEGER
  }, {});
  houses.associate = function(models) {
    // associations can be defined here

    houses.hasMany(models.houses, {
      foreignKey: 'houseId',
      as: 'houses',
      onDelete: 'CASCADE',
    });
  };
  return houses;
};

// database/models/houses.js
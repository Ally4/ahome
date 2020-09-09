import sequelize from 'sequelize';
import database from '../config/database'

const Houses = database.define('users', {
  image: {
    type: sequelize.STRING
  },
  description: {
    type: sequelize.STRING
  },
  location: {
    type: sequelize.STRING
  },
  numberOfBedrooms: {
    type: sequelize.STRING
  },
  numberOfBathrooms: {
    type: sequelize.STRING
  },
  status: {
    type: sequelize.STRING
  }
});

export default Houses;
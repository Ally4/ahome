import sequelize from 'sequelize';
import database from '../config/database'

const Users = database.define('users', {
  firstname: {
    type: sequelize.STRING
  },
  lastname: {
    type: sequelize.STRING
  },
  email: {
    type: sequelize.STRING
  },
  password: {
    type: sequelize.STRING
  },
  address: {
    type: sequelize.STRING
  },
  phonenumber: {
    type: sequelize.STRING
  },
  role: {
    type: sequelize.STRING
  },
});

export default Users;

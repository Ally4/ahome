import sequelize from 'sequelize';
import database from '../config/database'

const Users = database.define('users', {
  name: {
    type: sequelize.STRING
  },
  email: {
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

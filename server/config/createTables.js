import dotenv from 'dotenv';
import pool from './config';

dotenv.config();

const createTables = async () => {
  const users = `CREATE TABLE IF NOT EXISTS
    users (
        id serial primary key,
        firstname VARCHAR,
        lastname VARCHAR,
        email VARCHAR,
        password VARCHAR,
        address VARCHAR,
        phonenumber INT,
        role VARCHAR DEFAULT 'user',
        createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )`;
  const houses = `CREATE TABLE IF NOT EXISTS
    houses (
        houseid serial primary key,
        image VARCHAR,
        description VARCHAR,
        location VARCHAR,
        numberOfBedrooms VARCHAR,
        numberOfBathrooms VARCHAR,
        status VARCHAR,
        createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )`;
  await pool.query(users);
  await pool.query(houses);
  console.log('tables created');
};
createTables();

export default createTables;
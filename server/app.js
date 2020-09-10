import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
// import database from './config/database';


dotenv.config();

// database.authenticate().then(() => console.log('The database is well connected ...')).catch(err => console.log(`This is the error ${err}`))

const app = express();

app.use(express.json());

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.status(200).json({
    status: 200,
    message: "Welcome home",
  });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`The server is running on ${port}`);
});

export default app;
import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import router from '../server/router/houses';


dotenv.config();


const app = express();

app.use(express.json());

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.status(200).json({
    status: 200,
    message: "Welcome home",
  });
});


app.use('/', router);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`The server is running on ${port}`);
});

export default app;
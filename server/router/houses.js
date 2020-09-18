import express from 'express';
import createHouse from '../controllers/createHouse';


const router = express.Router();

router.post('/create', createHouse);


export default router; 
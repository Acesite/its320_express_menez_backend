import express from 'express';
import { createUser } from '../controller/userController.js'; 

const router = express.Router();

router.post('/create', createUser);
router.get('/', (req, res) =>{
    res.send('Hello From Users Route')
})

export default router; 

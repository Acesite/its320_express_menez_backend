import express from 'express';
import { createQuote, fetchQuotes } from '../controller/quoteController.js'; 

const router = express.Router();

router.post('/createQuote', createQuote);
router.get('/', fetchQuotes);
// router.get('/', (req, res) => {
//     res.send({Message: "Hello From Quote Route" })
// });

export default router;

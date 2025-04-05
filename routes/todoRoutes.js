import express from 'express';
import { createTodo, fetchTodos } from '../controller/todoController.js';

const router = express.Router();

router.post('/createTodo', createTodo);
router.get('/', fetchTodos);

export default router;

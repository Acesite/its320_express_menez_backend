import express from 'express';
import { createTodo, fetchTodos, updateTodo, deleteTodo } from '../controller/todoController.js';

const router = express.Router();

router.post('/createTodo', createTodo);
router.get('/', fetchTodos);
router.put('/:id', updateTodo);
router.delete('/:id', deleteTodo);

export default router;

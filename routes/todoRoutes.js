import express from 'express';
import { createTodo, fetchTodos, updateTodo, deleteTodo } from '../controller/todoController.js';

const router = express.Router();

router.post('/createTodo', createTodo); // POST route for creating todo
router.get('/', fetchTodos); // GET route for fetching all todos
router.put('/:id', updateTodo); // PUT route for updating a specific todo
router.delete('/:id', deleteTodo); // DELETE route for deleting a specific todo

export default router;

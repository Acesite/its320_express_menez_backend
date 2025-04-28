import Todo from '../models/todoModel.js';

// Create new todo
export const createTodo = async (req, res) => {
  try {
    const { task, day, status = 'pending', user } = req.body;

if (!user) {
  return res.status(400).json({ message: 'User ID is required' });
}
if (!day) {
  return res.status(400).json({ message: 'Day is required' });
}

const newTodo = await Todo.create({ task, day, status, user });
res.status(201).json(newTodo);

    
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all todos for a specific user
export const fetchTodos = async (req, res) => {
  try {
    const { userId } = req.query;  // Get userId from query params
    if (!userId) {
      return res.status(400).json({ message: 'User ID is required to fetch todos' });
    }

    const todos = await Todo.find({ user: userId });  // Find todos belonging to the user
    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// Update todo
export const updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedTodo = await Todo.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedTodo) {
      return res.status(404).json({ message: 'Todo not found' });
    }
    res.status(200).json(updatedTodo);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete todo
export const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedTodo = await Todo.findByIdAndDelete(id);
    if (!deletedTodo) {
      return res.status(404).json({ message: 'Todo not found' });
    }
    res.status(200).json({ message: 'Todo deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

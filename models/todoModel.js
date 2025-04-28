import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema({
  task: {
    type: String,
    required: [true, 'Task is required']
  },
  day: {
    type: String,
    required: [true, 'Day is required']
  },
  status: {
    type: String,
    enum: ['pending', 'completed'],
    default: 'pending'
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Account',
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('Todo', todoSchema);

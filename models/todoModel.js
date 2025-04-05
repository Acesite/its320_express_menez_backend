import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema({
    task: {
        type: String,
        required: [true, 'Task is required']
    },
    status: {
        type: String,
        enum: ['pending', 'completed'],
        default: 'pending'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

export default mongoose.model('Todo', todoSchema);

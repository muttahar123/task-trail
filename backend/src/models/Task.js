import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
    enum: ['pending', 'completed'],
    default: 'pending',
  },
}, {
  timestamps: true,
});

taskSchema.index({ title: 'text', description: 'text' });

const Task = mongoose.model('Task', taskSchema);
export default Task;

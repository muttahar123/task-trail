import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { errorHandler } from './middlewares/errorMiddleware.js';
import authRoutes from './routes/authRoutes.js';
import taskRoutes from './routes/taskRoutes.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'));
}

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/tasks', taskRoutes);

// Error Middleware
app.use(errorHandler);

app.get('/', (req, res) => {
  res.send('Task Trail API is running');
});

export default app;

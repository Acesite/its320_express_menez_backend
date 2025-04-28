import express from 'express';
import connectDB from './config/db.js';
import cors from 'cors';

import accountRouter from './routes/accountRoutes.js';
import todoRouter from './routes/todoRoutes.js';

const port = process.env.PORT || 3001;
const app = express();

app.use(express.json());
app.use(cors());
connectDB();

// Routes
app.use('/api/accounts', accountRouter); // Renamed from /api/users
app.use('/api/todos', todoRouter);

// Test endpoint
app.post('/api/hello', (req, res) => {
  res.send('Hello World');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

import dotenv from 'dotenv';
import express from 'express';

import { cors } from './utils/cors-config.js';
import authRoutes from './routes/auth-routes.js';
import dbConnection from './utils/db-connection.js';

dotenv.config();

const app = express();

app.use(cors);
app.use(express.json());

dbConnection();

app.get('/', (req, res) => res.send('Hello, World!'));

app.use('/api/auth', authRoutes);

app.listen(process.env.PORT || 5000, () => console.log('Server Started!'));

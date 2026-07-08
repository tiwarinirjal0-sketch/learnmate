import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { connectDB } from './config/db.js';
import authRoute from './routes/auth.route.js';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.use('/api/auth', authRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, async () => {
    // await connectDB();
    console.log(`Server running on port ${PORT}`);
});

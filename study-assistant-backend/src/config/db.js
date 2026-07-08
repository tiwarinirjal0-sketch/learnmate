import mongoose from 'mongoose';

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('DB Connected');
    } catch (err) {
        console.log('DB Connection Failed', err);
        process.exit(1);
    }
}

// lib/connectMongo.ts
import mongoose from 'mongoose';

const connectMongo = async () => {
    if (mongoose.connection.readyState === 1) {
        console.log('Already connected to MongoDB');
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI!); // Mongoose will automatically use the new URL parser and unified topology
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        throw new Error('Failed to connect to MongoDB');
    }
};

export default connectMongo;

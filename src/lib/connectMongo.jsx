// lib/connectMongo.js
import mongoose from 'mongoose';

const connectMongo = async () => {
    if (mongoose.connection.readyState >= 1) return;

    // Connect without deprecated options
    return mongoose.connect(process.env.MONGODB_URI);
};

export default connectMongo;

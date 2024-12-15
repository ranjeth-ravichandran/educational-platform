// lib/mongodb.js
import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
    throw new Error("Please define the MONGODB_URI environment variable");
}

let cached = global.mongoose;

if (!cached) {
    cached = global.mongoose = { conn: null, promise: null };
}

export async function connectToDatabase() {
    if (cached.conn) {
        console.log("Reusing existing connection");
        return cached.conn;
    }

    if (!cached.promise) {
        const opts = { useNewUrlParser: true, useUnifiedTopology: true };
        cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
            console.log("Connected to database:", mongoose.connection.name); // Debugging
            console.log("Collections in DB:", mongoose.connection.collections); // Debug collections
            return mongoose;
        }).catch(err => {
            console.error("Failed to connect to database:", err); // Debugging
        });
    }

    cached.conn = await cached.promise;
    return cached.conn;
}

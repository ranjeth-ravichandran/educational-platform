import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        password: {
            type: String,
            required: true,
            trim: true
        },
    },
    {
        collection: "users", // Explicitly set the collection name
        timestamps: true, // Adds `createdAt` and `updatedAt` fields
    }
);

export default mongoose.models.User || mongoose.model("User", UserSchema);

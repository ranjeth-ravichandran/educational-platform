import mongoose, { Schema } from "mongoose";

const PostSchema = new Schema(
    {
        title: {
            type: String,
            required: [true, "Title is required"],
            trim: true,
        },
        summary: {
            type: String,
            required: [true, "Summary is required"],
            trim: true,
        },
        content: {
            type: String,
            required: [true, "Content is required"],
            trim: true,
        },
        author: {
            type: Schema.Types.ObjectId,
            ref: "User", // References the 'User' collection
            required: [true, "Author is required"],
        },
    },
    {
        collection: "posts", // Explicitly set the collection name
        timestamps: true, // Adds `createdAt` and `updatedAt` fields
    }
);

export default mongoose.models.Post || mongoose.model("Post", PostSchema);

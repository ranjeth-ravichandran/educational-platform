import mongoose, { Schema } from 'mongoose';

const PostSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Title is required'],
        trim: true,
    },
    summary: {
        type: String,
        required: [true, 'Summary is required'],
        trim: true,
    },
    content: {
        type: String,
        required: [true, 'Content is required'],
        trim: true,
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'Author is required'],
    },
}, { timestamps: true });

export default mongoose.models.Post || mongoose.model('Post', PostSchema);
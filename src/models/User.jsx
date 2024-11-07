// models/User.js
import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, minlength: 4, unique: true },
    password: { type: String, required: true },
});

// Check if the model is already compiled to avoid recompiling it on each import in Next.js
const User = mongoose.models.User || mongoose.model('User', UserSchema);

export default User;

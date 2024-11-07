// pages/api/posts.js
import connectMongo from '../../lib/connectMongo';
import Post from '../../models/Post';
import User from '../../models/User'; // Import the User model to register it

export default async function handler(req, res) {
    try {
        await connectMongo(); // Connect to MongoDB

        if (req.method === 'GET') {
            const posts = await Post.find()
                .populate('author', 'username') // Populate the 'author' field with 'username' from User model
                .sort({ createdAt: -1 })
                .limit(20);
            res.status(200).json(posts);
        } else {
            res.status(405).json({ error: 'Method Not Allowed' });
        }
    } catch (error) {
        console.error('Error in /api/posts:', error);
        res.status(500).json({ error: 'Failed to fetch posts' });
    }
}

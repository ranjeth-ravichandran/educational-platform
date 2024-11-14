// pages/api/posts.ts
import connectMongo from '../../lib/connectMongo';
import Post from '../../models/Post';
import { NextApiRequest, NextApiResponse } from 'next';

// Define the Post type to match the schema
interface Author {
    username: string;
}

interface PostType {
    _id: string;
    title: string;
    summary: string;
    content: string;
    cover: string;
    author: Author;
    createdAt: string;
    updatedAt: string;
    __v: number;
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    try {
        await connectMongo(); // Connect to MongoDB

        if (req.method === 'GET') {
            // Fetch posts with the author populated
            const posts: PostType[] = await Post.find()
                .populate('author', 'username') // Populate the 'author' field with 'username' from User model
                .sort({ createdAt: -1 })
                .limit(20); // Limit to 20 posts

            res.status(200).json(posts);
        } else {
            res.status(405).json({ error: 'Method Not Allowed' });
        }
    } catch (error) {
        console.error('Error fetching posts:', error);
        res.status(500).json({ error: 'Failed to fetch posts' });
    }
}

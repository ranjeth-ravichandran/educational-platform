/* eslint-disable no-use-before-define */
//import { NextApiRequest, NextApiResponse } from 'next';
import Post from '@/models/Post';
import { connectToDatabase } from '@/lib/mongodb';
import jwt from 'jsonwebtoken';

export default async function handler(req, res) {
    await connectToDatabase();

    switch (req.method) {
        case 'GET':
            try {
                const posts = await Post.find()
                    .populate('author', 'username')
                    .sort({ createdAt: -1 })
                    .limit(20);
                res.json(posts);
            } catch (error) {
                console.error(error);
                res.status(500).json({ message: 'Error fetching posts' });
            }
            break;

        case 'POST':
            try {
                const token = req.cookies.token;
                const decoded = jwt.verify(token, process.env.JWT_SECRET);

                const { title, summary, content } = req.body;
                const post = new Post({
                    title,
                    summary,
                    content,
                    author: decoded.id,
                });
                const savedPost = await post.save();
                res.json(savedPost);
            } catch (error) {
                console.error(error);
                res.status(500).json({ message: 'Error creating post' });
            }
            break;

        case 'PUT':
            try {
                const token = req.cookies.token;
                const decoded = jwt.verify(token, process.env.JWT_SECRET);

                const { id, title, summary, content } = req.body;
                const post = await Post.findById(id);
                if (!post || post.author.toString() !== decoded.id) {
                    return res.status(401).json({ message: 'Unauthorized' });
                }

                await post.updateOne({
                    title,
                    summary,
                    content,
                });
                res.json(post);
            } catch (error) {
                console.error(error);
                res.status(500).json({ message: 'Error updating post' });
            }
            break;

        case 'DELETE':
            try {
                const { id } = req.query;
                const post = await Post.findById(id);
                if (!post) {
                    return res.status(404).json({ message: 'Post not found' });
                }

                await post.delete();
                res.json({ message: 'Post deleted successfully' });
            } catch (error) {
                console.error(error);
                res.status(500).json({ message: 'Error deleting post' });
            }
            break;

        default:
            res.status(405).json({ message: 'Method not allowed' });
    }
}
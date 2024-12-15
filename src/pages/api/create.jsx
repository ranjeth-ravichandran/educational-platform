/* eslint-disable no-use-before-define */

// pages/api/posts/create.js
import Post from "@/models/Post";
import { connectToDatabase } from "@/lib/mongodb";
import jwt from "jsonwebtoken";

const secret = process.env.JWT_SECRET;

export default async function handler(req, res) {
    await connectToDatabase();
    const { token } = req.headers;

    try {
        const decoded = jwt.verify(token, secret);
        const { title, summary, content } = req.body;

        const post = await Post.create({
            title,
            summary,
            content,
            author: decoded.id,
        });

        res.status(201).json(post);
    } catch (error) {
        res.status(401).json({ error: "Unauthorized" });
    }
}

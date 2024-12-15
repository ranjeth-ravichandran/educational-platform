/* eslint-disable no-use-before-define */

import { connectToDatabase } from "@/lib/mongodb";
import Post from "@/models/Post";

export default async function handler(req, res) {
    const { id } = req.query; // Extract the blog ID from the request
    await connectToDatabase();

    if (req.method === "GET") {
        // Fetch a single post by ID
        try {
            const post = await Post.findById(id).populate("author", "username");
            if (!post) {
                return res.status(404).json({ error: "Post not found" });
            }
            res.status(200).json(post);
        } catch (error) {
            res.status(500).json({ error: "Failed to fetch post" });
        }
    } else if (req.method === "PUT") {
        // Update the post
        try {
            const { title, summary, content } = req.body;
            const updatedPost = await Post.findByIdAndUpdate(
                id,
                { title, summary, content },
                { new: true } // Return the updated document
            );
            if (!updatedPost) {
                return res.status(404).json({ error: "Post not found" });
            }
            res.status(200).json(updatedPost);
        } catch (error) {
            res.status(500).json({ error: "Failed to update post" });
        }
    } else {
        res.setHeader("Allow", ["GET", "PUT"]);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}

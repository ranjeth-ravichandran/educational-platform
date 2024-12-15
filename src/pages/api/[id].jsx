import { connectToDatabase } from "@/lib/mongodb";
import Post from "@/models/Post";

export default async function handler(req, res) {
    const { id } = req.query; // Extract the blog ID from the request
    await connectToDatabase();

    if (req.method === "GET") {
        try {
            const post = await Post.findById(id).populate("author", "username");
            if (!post) {
                return res.status(404).json({ error: "Post not found" });
            }
            res.status(200).json(post);
        } catch {
            res.status(500).json({ error: "Failed to fetch post" }); // Removed unused `error`
        }
    } else if (req.method === "PUT") {
        try {
            const { title, summary, content } = req.body;
            const updatedPost = await Post.findByIdAndUpdate(
                id,
                { title, summary, content },
                { new: true }
            );
            if (!updatedPost) {
                return res.status(404).json({ error: "Post not found" });
            }
            res.status(200).json(updatedPost);
        } catch {
            res.status(500).json({ error: "Failed to update post" }); // Removed unused `error`
        }
    } else {
        res.setHeader("Allow", ["GET", "PUT"]);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}

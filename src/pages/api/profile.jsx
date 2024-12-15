import jwt from "jsonwebtoken";
import User from "@/models/User"; // Import your User model
import { connectToDatabase } from "@/lib/mongodb"; // Utility to connect to MongoDB

const secret = process.env.JWT_SECRET;

export default async function handler(req, res) {
    await connectToDatabase();

    try {
        const token = req.cookies.token;

        if (!token) {
            return res.status(401).json({ error: "Not logged in" });
        }

        const decoded = jwt.verify(token, secret);
        const user = await User.findById(decoded.id).select("username");

        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        res.json({ username: user.username }); // Return only necessary user info
    } catch (err) {
        console.error("Error in profile route:", err);
        res.status(500).json({ error: "Internal server error" });
    }
}

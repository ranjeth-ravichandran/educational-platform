import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "@/models/User";
import { connectToDatabase } from "@/lib/mongodb";

const secret = process.env.JWT_SECRET;

export default async function handler(req, res) {
    await connectToDatabase();

    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method not allowed" });
    }

    const { username, password } = req.body;

    try {
        // Check if the user exists
        const user = await User.findOne({ username });
        if (!user || !bcrypt.compareSync(password, user.password)) {
            return res.status(400).json({ error: "Invalid credentials" });
        }

        // Generate JWT token
        const token = jwt.sign({ id: user._id, username }, secret, { expiresIn: "1d" });

        // Set token in an HttpOnly cookie
        res.setHeader("Set-Cookie", `token=${token}; Path=/; HttpOnly; Secure=${process.env.NODE_ENV === "production"}; SameSite=Strict`);

        return res.status(200).json({ message: "Login successful", username: user.username });
    } catch (error) {
        console.error("Login error:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}

/* eslint-disable no-use-before-define */

// pages/api/auth/signup.js
import bcrypt from "bcryptjs";
import User from "@/models/User";
import { connectToDatabase } from "@/lib/mongodb";

export default async function handler(req, res) {
    await connectToDatabase();
    const { username, password } = req.body;

    try {
        const hashedPassword = bcrypt.hashSync(password, 10);
        const user = await User.create({ username, password: hashedPassword });
        res.status(201).json(user);
    } catch {
        res.status(400).json({ error: "User already exists or invalid data" });
    }
}

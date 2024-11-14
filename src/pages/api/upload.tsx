// pages/api/upload.ts
import { IncomingForm } from 'formidable';
/* import fs from 'fs';
import path from 'path'; */
import connectMongo from '../../lib/connectMongo';
import Post from '../../models/Post';

// Disable default body parser to allow Formidable to handle the request
export const config = {
    api: {
        bodyParser: false,
    },
};

const handler = async (req: any, res: any) => {
    const form = new IncomingForm({
        keepExtensions: true, // Keep file extensions
        uploadDir: './public/uploads', // Directory where the uploaded file will be saved
    });

    form.parse(req, async (err: any, fields: any, files: any) => {
        if (err) {
            res.status(500).json({ error: 'Error parsing the form data' });
            return;
        }

        try {
            await connectMongo(); // Ensure MongoDB connection

            const { title, summary, content, author } = fields;
            const file = files.file[0]; // Assuming you are sending a single file with the name 'file'

            // Move the file to the 'public/uploads' directory
            const coverPath = `/uploads/${file.newFilename}`;

            // Save the post in the database
            const newPost = await Post.create({
                title,
                summary,
                content,
                cover: coverPath, // Save file path in the database
                author,
            });

            res.status(201).json(newPost);
        } catch (error) {
            res.status(500).json({ error: 'Error saving post to database' });
        }
    });
};

export default handler;

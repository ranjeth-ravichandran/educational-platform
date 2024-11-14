import { IncomingMessage } from 'http';   // Correct import for IncomingMessage
import { NextApiResponse } from 'next';   // Correct import for NextApiResponse
import { IncomingForm, Fields, Files } from 'formidable';
import connectMongo from '../../lib/connectMongo';
import Post from '../../models/Post';

// Disable default body parser to allow Formidable to handle the request
export const config = {
    api: {
        bodyParser: false,
    },
};

// Define the handler function with proper typing
const handler = async (req: IncomingMessage, res: NextApiResponse) => {
    const form = new IncomingForm({
        keepExtensions: true, // Keep file extensions
        uploadDir: './public/uploads', // Directory where the uploaded file will be saved
    });

    form.parse(req, async (_, fields: Fields, files: Files) => {
        // Connect to MongoDB
        await connectMongo();

        // Destructure fields and files
        const { title, summary, content, author } = fields;
        const file = files.file ? files.file[0] : null; // Assuming you are sending a single file with the name 'file'

        if (!file) {
            res.status(400).json({ error: 'No file uploaded' });
            return;
        }

        // Construct the file path
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
    });
};

export default handler;

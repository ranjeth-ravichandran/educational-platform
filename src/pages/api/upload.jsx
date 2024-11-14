import multer from 'multer';
import nc from 'next-connect';
import path from 'path';
import Post from '../../models/Post'; // Import your Post model
import connectMongo from '../../lib/connectMongo';

// Set up Multer storage
const storage = multer.diskStorage({
    destination: './public/uploads', // Save images in the public/uploads folder
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
        cb(null, uniqueSuffix + path.extname(file.originalname)); // Unique filename
    },
});
const upload = multer({ storage });

// Handler setup with next-connect
const handler = nc()
    .use(upload.single('file')) // Handle file upload
    .post(async (req, res) => {
        await connectMongo(); // Ensure MongoDB connection

        // Get data from request and create a new post
        const { title, summary, content, author } = req.body;
        const cover = `/uploads/${req.file.filename}`; // Path to the uploaded image

        const newPost = await Post.create({
            title,
            summary,
            content,
            cover, // Save the file path in the post document
            author,
        });

        res.status(201).json(newPost);
    });

export default handler;

// Disable Next.js's default body parser to allow Multer to handle file uploads
export const config = {
    api: {
        bodyParser: false, // Disable the body parser for this route
    },
};

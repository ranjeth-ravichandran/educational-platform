import { useState } from 'react';

const FileUploadForm = () => {
    const [file, setFile] = useState<File | null>(null);
    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');
    const [content, setContent] = useState('');
    const [loading, setLoading] = useState(false);
    const [post, setPost] = useState<any | null>(null); // State to store the uploaded post

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setFile(e.target.files[0]);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!file) {
            alert('Please select a file to upload.');
            return;
        }

        setLoading(true);

        const formData = new FormData();
        formData.append('file', file);
        formData.append('title', title);
        formData.append('summary', summary);
        formData.append('content', content);

        try {
            const response = await fetch('/api/upload', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                const uploadedPost = await response.json();
                setPost(uploadedPost); // Store the uploaded post data
                alert('Post uploaded successfully!');
            } else {
                alert('Error uploading post');
            }
        } catch (error) {
            console.error('Error uploading file:', error);
            alert('Error uploading file');
        }

        setLoading(false);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Title"
                />
                <input
                    type="text"
                    value={summary}
                    onChange={(e) => setSummary(e.target.value)}
                    placeholder="Summary"
                />
                <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Content"
                />
                <input type="file" onChange={handleFileChange} />
                <button type="submit" disabled={loading}>
                    {loading ? 'Uploading...' : 'Upload Post'}
                </button>
            </form>

            {/* Display the uploaded post after successful upload */}
            {post && (
                <div>
                    <h2>{post.title}</h2>
                    <p><strong>Summary:</strong> {post.summary}</p>
                    <div>
                        <strong>Content:</strong>
                        <div dangerouslySetInnerHTML={{ __html: post.content }} />
                    </div>
                    {post.cover && <img src={post.cover} alt="Post Cover" />}
                </div>
            )}
        </div>
    );
};

export default FileUploadForm;

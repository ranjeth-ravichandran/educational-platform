import { useState } from 'react';

const FileUploadForm = () => {
    const [file, setFile] = useState<File | null>(null);
    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');
    const [content, setContent] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null); // New error state

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const selectedFile = e.target.files[0];
            if (selectedFile && selectedFile.size > 10 * 1024 * 1024) {
                setError('File size should be less than 10MB');
            } else {
                setError(null);
                setFile(selectedFile);
            }
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Basic validation to ensure the form is filled out
        if (!title || !summary || !content || !file) {
            setError('Please fill in all fields and select a file.');
            return;
        }

        setLoading(true);
        setError(null);

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
                const post = await response.json();
                alert('Post uploaded successfully!');
                // Optionally, reset the form after successful upload
                setTitle('');
                setSummary('');
                setContent('');
                setFile(null);
            } else {
                const responseData = await response.json();
                setError(responseData.error || 'Error uploading post');
            }
        } catch (error) {
            console.error('Error uploading file:', error);
            setError('Error uploading file');
        }

        setLoading(false);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Title"
                />
            </div>
            <div>
                <input
                    type="text"
                    value={summary}
                    onChange={(e) => setSummary(e.target.value)}
                    placeholder="Summary"
                />
            </div>
            <div>
                <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Content"
                />
            </div>
            <div>
                <input type="file" onChange={handleFileChange} />
                {error && !file && <p style={{ color: 'red' }}>Please select a file</p>}
                {error && file && <p style={{ color: 'red' }}>{error}</p>}
            </div>
            <div>
                <button type="submit" disabled={loading}>
                    {loading ? 'Uploading...' : 'Upload Post'}
                </button>
            </div>
            {error && !loading && <div style={{ color: 'red' }}>{error}</div>}
        </form>
    );
};

export default FileUploadForm;

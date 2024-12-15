import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Navbar from "@/components/Navbar";
import { useUser } from "@/context/UserContext";
import Hero from "@/components/Hero";

export default function BlogPost() {
    const { user } = useUser();
    const router = useRouter();
    const { id } = router.query; // Get the blog ID from the URL
    const [blog, setBlog] = useState(null); // Blog post data
    const [isEditing, setIsEditing] = useState(false); // Edit mode state
    const [editedBlog, setEditedBlog] = useState({}); // Temp state for edits

    useEffect(() => {
        async function fetchBlog() {
            if (id) {
                const response = await fetch(`/api/${id}`);
                const data = await response.json();
                setBlog(data);
                setEditedBlog(data); // Initialize edited blog with fetched data
            }
        }
        fetchBlog();
    }, [id]);

    const handleEdit = () => {
        setIsEditing(true); // Enable edit mode
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedBlog((prev) => ({ ...prev, [name]: value })); // Update edited blog fields
    };

    const handleSave = async () => {
        const response = await fetch(`/api/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(editedBlog),
        });

        if (response.ok) {
            const updatedBlog = await response.json();
            setBlog(updatedBlog); // Update blog state with saved data
            setIsEditing(false); // Exit edit mode
            router.push("/blogs");
        } else {
            console.error("Failed to update blog");
        }
    };

    if (!blog) return <p>Loading...</p>;

    return (
        <>
            <Navbar />
            <Hero
                cName="hero"
                heroImg="https://images.unsplash.com/photo-1544411047-c491e34a24e0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                title={blog.title}
                buttonClass="hide" text={""} url={""} buttonText={""} />
            <div className="post-page-container">
                {isEditing ? (
                    <>
                        <input
                            type="text"
                            name="title"
                            value={editedBlog.title}
                            onChange={handleChange}
                            className="edit-input"
                        />
                        <textarea
                            name="summary"
                            value={editedBlog.summary}
                            onChange={handleChange}
                            className="edit-textarea"
                        />
                        <textarea
                            name="content"
                            value={editedBlog.content}
                            onChange={handleChange}
                            className="edit-textarea"
                        />
                        <button onClick={handleSave} className="save-btn">
                            Save
                        </button>
                    </>
                ) : (
                    <>
                        {/* <h1>{blog.title}</h1> */}
                        <p><strong>Summary:</strong> {blog.summary}</p>
                        <p><strong>Content:</strong> {blog.content}</p>
                        <p><strong>Author:</strong> {blog.author.username}</p>
                        {user && user.username === blog.author.username && (
                            <button onClick={handleEdit} className="edit-btn">
                                Edit
                            </button>
                        )}
                    </>
                )}
            </div>
        </>
    );
}

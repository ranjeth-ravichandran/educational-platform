// Blogs.js
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { useUser } from "../context/UserContext";
import Link from "next/link";

export default function Blogs() {
    const [posts, setPosts] = useState([]); // All posts fetched from the API
    const [filteredPosts, setFilteredPosts] = useState([]); // Posts filtered by search input
    const [searchTerm, setSearchTerm] = useState(""); // Search input value
    const { user } = useUser();

    useEffect(() => {
        async function fetchPosts() {
            const response = await fetch("/api/posts");
            const data = await response.json();
            setPosts(data);
            setFilteredPosts(data); // Initially display all posts
        }
        fetchPosts();
    }, []);

    // Function to handle search input changes
    const handleSearch = (e) => {
        const value = e.target.value.toLowerCase();
        setSearchTerm(value);

        // Filter posts based on title or summary matching the search term
        const filtered = posts.filter(
            (post) =>
                post.title.toLowerCase().includes(value) ||
                post.summary.toLowerCase().includes(value)
        );
        setFilteredPosts(filtered);
    };

    return (
        <>
            <Navbar />
            <Hero
                cName="hero"
                heroImg="https://images.unsplash.com/photo-1544411047-c491e34a24e0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                title="Blogs"
                buttonClass="hide" text={""} url={""} buttonText={""} />
            <div className="blog-function-container">
                <input
                    className="search-post"
                    type="text"
                    name="search"
                    placeholder="Search for Blog"
                    value={searchTerm} // Bind input value to state
                    onChange={handleSearch} // Trigger filtering when input changes
                />
                {user && (
                    <Link href="/create">
                        <button className="create">Create</button>
                    </Link>
                )}
            </div>

            <div className="blogs-container">
                {filteredPosts.length > 0 ? (
                    filteredPosts.map((post) => (
                        <Link className="post-container" href={`/blogs/${post._id}`} key={post._id}>
                            <h2>{post.title}</h2>
                            <p>{post.summary}</p>
                            <p>Author: {post.author.username}</p>
                        </Link>
                    ))
                ) : (
                    <p>No blogs match your search.</p> // Display this if no results are found
                )}
            </div>
        </>
    );
}

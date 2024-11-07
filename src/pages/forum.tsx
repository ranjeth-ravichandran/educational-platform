// pages/forum.js
import React, { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import ForumData from '../components/ForumData';

const Forum = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        // Use Next.js API routes
        fetch('/api/posts')
            .then(response => response.json())
            .then(data => setPosts(data));
    }, []);

    return (
        <>
            <Navbar />
            <Hero
                cName="hero"
                heroImg="https://images.unsplash.com/photo-1517897286832-ba927d20e824?q=80&w=2673&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                title="Forum"
                buttonClass="hide" text={''} url={''} buttonText={''} />
            <div className="posts-container">
                {posts.length > 0 && posts.map(post => <ForumData key={post._id} {...post} />)}
            </div>
        </>
    );
};

export default Forum;

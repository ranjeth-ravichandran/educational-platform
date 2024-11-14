// pages/forum.tsx
import React from 'react';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import ForumData from '../components/ForumData';

interface Author {
    username: string;
}

interface Post {
    _id: string;
    title: string;
    summary: string;
    content: string;
    cover: string;
    author: Author;
    createdAt: string;
    updatedAt: string;
    __v: number;
}

interface ForumProps {
    posts: Post[];
}

const Forum: React.FC<ForumProps> = ({ posts }) => {
    return (
        <>
            <Navbar />
            <Hero
                cName="hero"
                heroImg="https://images.unsplash.com/photo-1517897286832-ba927d20e824?q=80&w=2673&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                title="Forum"
                buttonClass="hide"
                text={''}
                url={''}
                buttonText={''}
            />
            <div className="posts-container">
                {posts.length > 0 &&
                    posts.map((post) => <ForumData key={post._id} {...post} />)}
            </div>
        </>
    );
};

// Fetch data on each request (Server-Side Rendering)
export async function getServerSideProps() {
    try {
        const res = await fetch('https://your-deployment-url/api/posts'); // Replace with your actual API URL
        const posts: Post[] = await res.json();

        // Pass the posts data as props to the Forum component
        return {
            props: {
                posts,
            },
        };
    } catch (error) {
        console.error('Error fetching posts:', error);
        return {
            props: {
                posts: [],
            },
        };
    }
}

export default Forum;

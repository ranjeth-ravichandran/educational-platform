import { useState } from 'react';
import { useUser } from '../context/UserContext';
import { useRouter } from 'next/router';
import axios from 'axios';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';

const CreatePost = () => {
  const { user } = useUser();
  const [form, setForm] = useState({ title: '', summary: '', content: '' });
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/posts', {
        ...form,
        author: user._id, // Include author's ID
      });
      console.log(response.data);
      router.push('/blogs');
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg="https://images.unsplash.com/photo-1544411047-c491e34a24e0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Create"
        buttonClass="hide" text={""} url={""} buttonText={""} />
      <form className="create-form" onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Post title"
        />

        <label>Summary:</label>
        <textarea
          name="summary"
          value={form.summary}
          onChange={handleChange}
          placeholder="Post summary"
        />

        <label>Content:</label>
        <textarea
          name="content"
          value={form.content}
          onChange={handleChange}
          placeholder="Post content"
        />

        <button type="submit">Create Post</button>
      </form>
    </>
  );
};

export default CreatePost;
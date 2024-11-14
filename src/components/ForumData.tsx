// components/ForumData.js
import React from 'react';
import { formatISO9075 } from 'date-fns';
import Link from 'next/link';
import Image from 'next/image';

interface ForumDataProps {
    _id: string; // _id as string (assuming it's a MongoDB ObjectId)
    title: string;
    summary: string;
    content: string;
    cover: string;
    author: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
}

const ForumData: React.FC<ForumDataProps> = ({ _id, title, summary, cover, updatedAt, author }) => {
    return (
        <Link href={`/post/${_id}`}>
            <div className={"post"}>
                <Image src={cover} alt="cover image" />
                <div className={"texts"}>
                    <h2>{title}</h2>
                    <p className={"info"}>
                        <span className={"author"}>{author}</span>
                        <time>{formatISO9075(new Date(updatedAt))}</time>
                    </p>
                    <p className={"summary"}>{summary}</p>
                </div>
            </div>
        </Link>
    );
};

export default ForumData;

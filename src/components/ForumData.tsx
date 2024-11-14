// components/ForumData.tsx
import React from 'react';
import { formatISO9075 } from 'date-fns';
import Link from 'next/link';
import Image from 'next/image';

interface Author {
    username: string;
}

interface ForumDataProps {
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

const ForumData: React.FC<ForumDataProps> = ({ _id, title, summary, cover, updatedAt, author }) => {
    return (
        <Link href={`/post/${_id}`}>
            <div className="post">
                <Image src={cover} alt="cover image" width={300} height={200} />
                <div className="texts">
                    <h2>{title}</h2>
                    <p className="info">
                        <span className="author">{author?.username}</span>
                        <time>{formatISO9075(new Date(updatedAt))}</time>
                    </p>
                    <p className="summary">{summary}</p>
                </div>
            </div>
        </Link>
    );
};

export default ForumData;

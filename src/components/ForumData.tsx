// components/ForumData.js
import React from 'react';
import { formatISO9075 } from 'date-fns';
import Link from 'next/link';
import Image from 'next/image';

interface ForumDataProps {
    _id: string;
    title: string;
    summary: string;
    cover: string;
    content: string;
    createdAt: string;
    author: { username: string };
}

const ForumData: React.FC<ForumDataProps> = ({ _id, title, summary, cover, createdAt, author }) => {
    return (
        <Link href={`/post/${_id}`}>
            <div className={"post"}>
                <Image src={cover} alt="cover image" />
                <div className={"texts"}>
                    <h2>{title}</h2>
                    <p className={"info"}>
                        <span className={"author"}>{author?.username}</span>
                        <time>{formatISO9075(new Date(createdAt))}</time>
                    </p>
                    <p className={"summary"}>{summary}</p>
                </div>
            </div>
        </Link>
    );
};

export default ForumData;

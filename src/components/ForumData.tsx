import React from 'react';
import { formatISO9075 } from 'date-fns';
import Link from 'next/link';
import Image from 'next/image';

export interface Post {
    _id: string;
    title: string;
    summary: string;
    content: string;
    cover: string;
    author: { username: string }; // Simplify for demonstration
    createdAt: Date;
}

interface ForumDataProps {
    post: Post;
}

const ForumData: React.FC<ForumDataProps> = ({ post }) => {
    const { _id, title, summary, cover, author, createdAt } = post;

    return (
        <Link href={`/${_id}`}>
            <div className="post">
                <Image src={cover} alt="img" width={100} height={100} />
                <div className="texts">
                    <h2>{title}</h2>
                    <p className="info">
                        <span ref="/" className="author">
                            {author.username}
                        </span>
                        <time>{formatISO9075(new Date(createdAt))}</time>
                    </p>
                    <p className="summary">{summary}</p>
                </div>
            </div>
        </Link>
    );
};

export default ForumData;
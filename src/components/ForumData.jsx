import Link from "next/link";
import { formatISO9075 } from "date-fns";

export default function ForumData({ post }) {
    return (
        <Link href={`/post/${post._id}`}>
            <div className="post">
                <img src={post.cover} alt={post.title} />
                <div className="texts">
                    <h2>{post.title}</h2>
                    <p className="info">
                        <span>{post.author.username}</span>
                        <time>{formatISO9075(new Date(post.createdAt))}</time>
                    </p>
                    <p className="summary">{post.summary}</p>
                </div>
            </div>
        </Link>
    );
}
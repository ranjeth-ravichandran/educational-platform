import Image from "next/image";
import { useRouter } from "next/router";

interface TopicProps {
    image: string;
    heading: string;
    text: string;
    route: string;
}

export default function TopicData({ image, heading, text, route }: TopicProps) {
    const router = useRouter();

    const navigateToTopic = () => {
        router.push(route);
    };

    return (
        <div className="t-card" onClick={navigateToTopic}>
            <div className="t-image">
                <Image src={image} alt="Topic Image" />
            </div>
            <h4>{heading}</h4>
            <p>{text}</p>
        </div>
    );
}

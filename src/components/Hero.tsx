import Image from 'next/image';

interface HeroProps {
    cName: string;
    heroImg: string;
    title: string;
    text: string;
    url: string;
    buttonClass: string;
    buttonText: string;
}

export default function Hero({ cName, heroImg, title, text, url, buttonClass, buttonText }: HeroProps) {
    return (
        <div className={cName} style={{ position: 'relative', width: '100%', height: '100vh' }}>
            <Image
                alt="Hero Image"
                src={heroImg}
                fill
                style={{ objectFit: 'cover' }}
            />
            <div className="hero-text">
                <h1>{title}</h1>
                <p>{text}</p>
                <a href={url} className={buttonClass}>
                    {buttonText}
                </a>
            </div>
        </div>
    );
}

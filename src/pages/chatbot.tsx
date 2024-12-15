
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Chatbot() {
    return (
        <>
            <Navbar />
            <Hero
                cName="hero"
                heroImg="https://images.unsplash.com/photo-1533134486753-c833f0ed4866?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                title="Chatbot"
                buttonClass="hide" text={""} url={""} buttonText={""} />
            <h3>ChatBot has been removed, this Video is a walkthrough of the working Bot.</h3>
            <video width="800" height="500" controls preload="true">
                <source src="video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </>
    )
}
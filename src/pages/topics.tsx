import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import TopicsInformation from "@/components/TopicsInformation";

export default function Topics() {
    return (
        <>
            <Navbar />
            <Hero
                cName="hero"
                heroImg="https://images.unsplash.com/photo-1544411047-c491e34a24e0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                title="Topics"
                buttonClass="hide" text={""} url={""} buttonText={""} />
            <TopicsInformation />
        </>
    )
}
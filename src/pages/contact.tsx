import ContactForm from "@/components/ContactForm";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";


export default function Contact() {
    return (
        <>
            <Navbar />
            <Hero
                cName="hero"
                heroImg="https://images.unsplash.com/photo-1502239608882-93b729c6af43?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                title="Contact"
                buttonClass="hide" text={""} url={""} buttonText={""} />
            <ContactForm />
        </>
    );
}
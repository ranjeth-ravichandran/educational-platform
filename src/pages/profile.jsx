import Navbar from "@/components/Navbar";
import { useUser } from "../context/UserContext";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Hero from "@/components/Hero";

export default function Profile() {
    const { user } = useUser();
    const router = useRouter();

    useEffect(() => {
        if (!user) {
            router.push("/login"); // Redirect to login if not logged in
        }
    }, [user, router]);

    if (!user) return null; // Avoid rendering until user data is available

    return (
        <>
            <Navbar />
            <Hero
                cName="hero"
                heroImg="https://images.unsplash.com/photo-1544411047-c491e34a24e0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                title="Profile"
                buttonClass="hide" text={""} url={""} buttonText={""} />
            <h1>Welcome, {user.username}</h1>
            <p>This is your profile page.</p>
        </>
    );
}

import { useState } from "react";
import { useRouter } from "next/router";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

export default function Signup() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const router = useRouter();

    const handleSignup = async (e) => {
        e.preventDefault();
        setError(null);

        const response = await fetch("/api/signup", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password }),
        });

        if (response.ok) {
            alert("Signup successful! Redirecting to login...");
            router.push("/login");
        } else {
            const errorData = await response.json();
            setError(errorData.error || "An error occurred during signup.");
        }
    };

    return (
        <>
            <Navbar />
            <Hero
                cName="hero"
                heroImg="https://images.unsplash.com/photo-1544411047-c491e34a24e0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                title="Sign In"
                buttonClass="hide" text={""} url={""} buttonText={""} />
            <form onSubmit={handleSignup} className="login-form">
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Sign Up</button>
            </form>
            {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
        </>
    );
}

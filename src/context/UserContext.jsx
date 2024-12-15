import { createContext, useContext, useState, useEffect } from "react";

// Create the User Context
const UserContext = createContext();

// User Provider Component
export function UserProvider({ children }) {
    const [user, setUser] = useState(null); // Stores logged-in user info
    const [loading, setLoading] = useState(true); // Loading state for user fetching

    useEffect(() => {
        // Fetch user profile if logged in (using token stored in cookies)
        async function fetchProfile() {
            try {
                const response = await fetch("/api/profile", { credentials: "include" }); // Include cookies
                if (response.ok) {
                    const userData = await response.json();
                    setUser(userData); // Save user info in state
                } else {
                    setUser(null); // Clear user if not logged in
                }
            } catch (err) {
                console.error("Failed to fetch profile:", err);
                setUser(null); // Clear user if fetch fails
            } finally {
                setLoading(false); // Mark loading as complete
            }
        }
        fetchProfile();
    }, []);

    return (
        <UserContext.Provider value={{ user, setUser, loading }}>
            {children}
        </UserContext.Provider>
    );
}

// Hook to use User Context
export function useUser() {
    return useContext(UserContext);
}

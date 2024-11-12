import { createContext, useState, ReactNode } from "react";

// Define the expected shape of userInfo
interface User {
    id?: string;
    name?: string;
    email?: string;
    [key: string]: unknown; // For any additional fields
}

interface UserContextProviderProps {
    children: ReactNode;
}

interface UserContextType {
    userInfo: User;
    setUserInfo: React.Dispatch<React.SetStateAction<User>>;
}

// Create UserContext with the specified type
export const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserContextProvider({ children }: UserContextProviderProps) {
    // Initialize userInfo with the User type
    const [userInfo, setUserInfo] = useState<User>({});

    return (
        <UserContext.Provider value={{ userInfo, setUserInfo }}>
            {children}
        </UserContext.Provider>
    );
}

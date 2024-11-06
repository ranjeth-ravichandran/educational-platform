import { createContext, useState, ReactNode } from "react";

interface UserContextProviderProps {
    children: ReactNode;
}

interface UserContextType {
    userInfo: Record<string, any>;
    setUserInfo: React.Dispatch<React.SetStateAction<Record<string, any>>>;
}

export const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserContextProvider({ children }: UserContextProviderProps) {
    const [userInfo, setUserInfo] = useState<Record<string, any>>({});

    return (
        <UserContext.Provider value={{ userInfo, setUserInfo }}>
            {children}
        </UserContext.Provider>
    );
}

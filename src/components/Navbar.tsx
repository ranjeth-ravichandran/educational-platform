import Link from "next/link";
import { useUser } from "../context/UserContext";
import { useState } from "react";
import { MenuItems } from "./MenuItems";
import { MenuIcon } from "./SvgIcons";

export default function Navbar() {
    const { user, setUser } = useUser();
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleLogout = async () => {
        await fetch("/api/logout", { method: "POST", credentials: "include" });
        setUser(null); // Clear user state after logout
    };

    return (
        <nav className="navbar">
            {user ? (
                <h1 className="navbar-title">Educational, Welcome <span className="user-title">{user.username}</span></h1>
            ) : (
                <h1 className="navbar-title">Educational</h1>
            )}

            {/* Burger Menu Icon */}
            <div className="menu-icon" onClick={toggleMenu}>
                <MenuIcon className="navbar-icon" color="white" />
            </div>

            <ul className={`nav-menu ${menuOpen ? "active" : ""}`}>
                {MenuItems.filter(item => {
                    if (item.title === 'Login') return !user;
                    if (item.title === 'Logout' || item.title === 'Profile') return user;
                    return true;
                }).map((item, index) => (
                    <li key={index} className="nav-item">
                        {item.title === 'Logout' ? (
                            <Link className={item.cName} href={item.url} onClick={handleLogout}>
                                <item.icon className="navbar-icon" color="white" />
                                {item.title}
                            </Link>
                        ) : (
                            <Link className={item.cName} href={item.url}>
                                <item.icon className="navbar-icon" color="white" />
                                {item.title}
                            </Link>
                        )}
                    </li>
                ))}
            </ul>
        </nav>
    );
}
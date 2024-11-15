import { useState } from "react";
import { MenuItems } from "./MenuItems";
import Link from "next/link";
import { MenuIcon } from "./SvgIcons"; // Replace with your SVG icon for the burger menu

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    // Toggle menu open/close state
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="navbar">
            <h1 className="navbar-title">Educational</h1>

            {/* Burger Menu Icon */}
            <div className="menu-icon" onClick={toggleMenu}>
                <MenuIcon className="navbar-icon" color="white" />
            </div>

            {/* Dropdown Menu */}
            <ul className={`nav-menu ${menuOpen ? "active" : ""}`}>
                {MenuItems.map((item, index) => (
                    <li key={index} className="nav-item">
                        <Link className={item.cName} href={item.url}>
                            <item.icon className="navbar-icon" color="white" />
                            {item.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;

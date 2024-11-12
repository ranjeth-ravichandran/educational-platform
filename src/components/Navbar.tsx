
import { MenuItems } from "./MenuItems";
import Link from "next/link";

export const Navbar = () => {

    return (
        <nav className="navbar">
            <h1 className="navbar-title">Educational</h1>
            <ul className={"nav-menu"}>
                {MenuItems.map((item, index) => (
                    <li key={index}>
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
import { Link } from "react-router-dom";

import "./Navbar.css";
const Navbar = () => {
    return (
        <nav>
            <div className="content">
                <ul>
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
export default Navbar;
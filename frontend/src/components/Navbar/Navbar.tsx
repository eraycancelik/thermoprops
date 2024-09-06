import { Link } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
    return (
        <nav>
            <div className="content">
                <ul>
                    <li>
                        <Link to="/home">Calculator</Link>
                    </li>
                    <li>
                        <Link to="/unit_converter">Unit Converter</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
export default Navbar;
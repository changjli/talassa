import { useState } from "react";

const Navbar = () => {

    const [show, setShow] = useState(false);

    return (
        <nav className="navbar">
            <img src="assets/images/Logo.svg" alt="" className="Logo" />
            <ul className={`nav-menu ${show && 'active'}`}>
                <li className="nav-item">
                    <a href="#" className="nav-link">
                        Home
                    </a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link">
                        Group
                    </a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link">
                        About Us
                    </a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link">
                        Support
                    </a>
                </li>
            </ul>
            <div className={`hamburger ${show && 'active'}`} onClick={() => {
                if (show) {
                    setShow(false);
                } else {
                    setShow(true);
                }
            }}>
                <span className="bar" />
                <span className="bar" />
                <span className="bar" />
            </div>
        </nav >
    );
}

export default Navbar;
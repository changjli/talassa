import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

    const [show, setShow] = useState(false);

    return (
        <nav className="navbar">
            <img src={require('./Asset/Logo.svg').default} alt="" className="Logo" />
            <ul className={`nav-menu ${show && 'active'}`}>
                <li className="nav-item">
                    <Link to='/home' className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to='/group' className="nav-link">Group</Link>
                </li>
                <li className="nav-item">
                    <Link to='/about' className="nav-link">About</Link>
                </li>
                <li className="nav-item">
                    <Link to='/support' className="nav-link">Support</Link>
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
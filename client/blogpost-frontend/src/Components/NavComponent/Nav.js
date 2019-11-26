import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
const Nav = (props) => {
    return (
        <nav className="nav">
            <ul className="nav_ul">
                <li ><Link to="/" className="logo">Logo</Link></li>
                <li className="nav-lgsn"><Link to="/login"><span>Login</span></Link></li>
                <li className="nav-lgsn"><Link to="/register"><span>Signup</span></Link></li>
                <li className="nav-lgsn"><Link to="/my_profile"><span>Profile</span></Link></li>
            </ul>
        </nav>
    );
}

export default Nav;
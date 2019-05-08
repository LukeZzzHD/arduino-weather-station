import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <div className="nav-wrapper indigo">
                <Link to="/" className="white-text brand-logo center">AWS</Link>
            </div>
        </nav>
    )
}

export default Navbar;
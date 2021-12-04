import React from 'react';
import { Link } from "react-router-dom";
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <ul className="options">
                <li className="option"></li>
                    <Link to="/">Home</Link>
                <li className="option"></li>
                    <Link to="/posts">Post</Link>
            </ul>
        </div>
    );
};

export default Header;

import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import '../styles/NavBar.css';

const NavBar = () => {
    const [showNavBar, setShowNavBar] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            if (location.pathname === '/'){
                setShowNavBar(window.scrollY > 150);
            } else {
                setShowNavBar(true);
            }
        };

        handleScroll();

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [location.pathname]);
    return (
        <nav className={showNavBar ? 'visible' : 'hidden'}>
            <ul>
                <li>
                    <a href="https://github.com/CarterClackson/" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-github"></i>
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/carter-clackson-25a2a5159/" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin"></i>
                    </a>
                </li>
            </ul>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/projects">Projects</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
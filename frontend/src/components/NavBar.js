import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import '../styles/NavBar.css';

const NavBar = () => {
    const [showNavBar, setShowNavBar] = useState(false);
    const [showMobileMenu, setShowMobileMenu] = useState(false);
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

    const toggleMobileMenu = () => {
        setShowMobileMenu(!showMobileMenu);
    };

    const closeMobileMenu = () => {
        setShowMobileMenu(false);
    };
    return (
        <React.Fragment>
        <button className="mobile-menu-button" onClick={toggleMobileMenu}>
                {showMobileMenu ? (
                    <i className="fas fa-times"></i> // Close (X) icon
                ) : (
                    <i className="fas fa-bars"></i> // Hamburger icon
                )}
            </button>
        <nav className={`desktop-nav ${showNavBar ? 'visible' : 'hidden'}`}>
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
        <nav className={`mobile-menu ${showMobileMenu ? 'mobile-menu-show' : 'mobile-menu-hide'}`}>
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
                    <Link to="/" onClick={closeMobileMenu}>Home</Link>
                </li>
                <li>
                    <Link to="/about" onClick={closeMobileMenu}>About</Link>
                </li>
                <li>
                    <Link to="/projects" onClick={closeMobileMenu}>Projects</Link>
                </li>
                <li>
                    <Link to="/contact" onClick={closeMobileMenu}>Contact</Link>
                </li>
            </ul>
        </nav>
        </React.Fragment>
    );
};

export default NavBar;
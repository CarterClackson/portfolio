import React from 'react';

import '../styles/Hero.css';

const Hero = () => {
    return (
        <main className="hero">
            <div>
            <span className="socials">
                <a href="https://github.com/CarterClackson/" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/carter-clackson-25a2a5159/" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin"></i>
                </a>
            </span>
            <h1>
                Hi, my name is Carter.
            </h1>
            <span>
                I'm a fullstack developer with a UX specialty based in Manitoba, Canada.
            </span>
            </div>
        </main>
    );
};

export default Hero;
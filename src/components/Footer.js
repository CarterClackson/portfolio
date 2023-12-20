import React from 'react';

import '../styles/Footer.css';

const Footer = () => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    return (
        <footer>
            <p>
                © {currentYear} Carter Clackson. All Rights Reserved.
            </p>
        </footer>
    );
};

export default Footer;
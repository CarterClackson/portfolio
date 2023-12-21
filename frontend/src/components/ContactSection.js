import React from 'react';

import { Link } from 'react-router-dom';

import '../styles/Contact.css';


const ContactSection = () => {
    return (
        <section id="home-contact">
            <h2 className="subheader">Get in touch</h2>
            <span>Like what you see and want to reach out? Click the button below.</span>
            <Link to="/contact" className="button">Contact Carter</Link>
        </section>
    );
};

export default ContactSection;
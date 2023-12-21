import React from 'react';

import ContactForm from '../components/ContactForm';

const Contact = () => {
    return (
        <React.Fragment>
        <section id="contact">
            <h1>Contact Carter</h1>
            <span>I'm always open to new opportunites, use the form below to get in touch with me.</span>
            <ContactForm />
        </section>
        </React.Fragment>
    );

}


export default Contact;
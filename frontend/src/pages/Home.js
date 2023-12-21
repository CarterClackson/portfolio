import React from 'react';

import Hero from '../components/Hero';
import ProjectGrid from '../components/ProjectGrid';
import ContactSection from '../components/ContactSection';

const Home = () => {
    return (
        <React.Fragment>
            <Hero />
            <ProjectGrid />
            <ContactSection />
        </React.Fragment>
    );

}


export default Home;
import React from 'react';

import ProjectGrid from '../components/ProjectGrid';
import ContactSection from '../components/ContactSection';

const Projects = () => {
    return (
        <React.Fragment>
            <section id="projects">
            <h1>Projects</h1>
            <span>These projects are ones that I feel best showcase my skills and experience.</span>
                <ProjectGrid />
                <ContactSection />
            </section>
        </React.Fragment>
    );

}


export default Projects;
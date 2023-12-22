import React from 'react';

import ContactSection from '../components/ContactSection';

import '../styles/About.css'

const About = () => {
    return (
        <React.Fragment>
            <section id="about">
                <h1>About</h1>
                <div className="flex-half">
                    <img src="/assets/images/carter-clackson.png" alt="Portrait of Carter Clackson"/>
                    <div>
                        <p>I'm Carter Clackson, a passionate fullstack developer from the city of Winnipeg, Manitoba, Canada. With a wealth of experience in crafting seamless web solutions, I currently serve as a Senior UX Developer at Manitoba Public Insurance.</p>

                        <h3>Professional Journey:</h3>
                        <p>My journey in the digital realm has taken me through diverse landscapes, from the dynamic challenges of contracting to the collaborative energy of agency life. These experiences have not only honed my technical prowess but also enriched my ability to adapt and thrive in varied work environments, particularly within the structured and strategic landscape of corporate development.</p>

                        <h3>Expertise:</h3>
                        <p>As a seasoned developer, I excel in bridging the gap between design and functionality. My skill set encompasses a broad spectrum, ranging from front-end technologies like React, HTML, CSS, and JavaScript, to back-end languages such as Node.js. I have a keen eye for user experience, ensuring that every line of code contributes to creating intuitive and engaging digital experiences.</p>

                        <h3>Current Role:</h3>
                        <p>In my current role at Manitoba Public Insurance, I am dedicated to pushing the boundaries of user experience. Collaborating with a talented and varied team, I contribute to innovative solutions that meet the evolving needs of our users whether they are fully custom build solutions or extensions that solve a specific need.</p>

                        <h3>Portfolio Goal:</h3>
                        <p>This portfolio is more than a collection of projects—it's a testament to my commitment to excellence in fullstack development. I've curated a showcase that reflects not only the technical proficiency I bring to the table but also the creativity and problem-solving mindset that defines my approach.</p>
                    </div>
                </div>
            <ContactSection />
            </section>
        </React.Fragment>
    );

}


export default About;
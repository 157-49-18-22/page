import React from 'react';
import './About.css';

const About = () => {
    return (
        <section id="about" className="about section">
            <div className="container">
                <h2 className="about-main-title">About Me</h2>

                <div className="about-grid">
                    <div className="about-image-wrapper">
                        <img
                            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop"
                            alt="Business Team Collaboration"
                            className="about-image"
                        />
                    </div>

                    <div className="about-content">
                        <h3 className="about-title">Professional Business Development</h3>
                        <p className="about-description">
                            I am a results-driven Business Development Manager with a strong background in client acquisition, partnership development, and revenue growth strategies. I work closely with startups, enterprises, and decision-makers to build long-term value and scalable growth models.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;

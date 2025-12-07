import React from 'react';
import './About.css';

const About = () => {
    const expertise = [
        'Lead Generation & Client Acquisition',
        'Strategic Partnerships',
        'Market Research & Analysis',
        'Sales Funnel Optimization',
        'Revenue Growth Planning'
    ];

    return (
        <section id="about" className="about section">
            <div className="container">
                <div className="about-grid">
                    <div className="about-content">
                        <h2 className="about-title">About Me</h2>
                        <p className="about-description">
                            I am a results-driven Business Development Manager with a strong background in client acquisition, partnership development, and revenue growth strategies. I work closely with startups, enterprises, and decision-makers to build long-term value and scalable growth models.
                        </p>
                    </div>

                    <div className="expertise-card">
                        <h3 className="expertise-title">Core Expertise</h3>
                        <ul className="expertise-list">
                            {expertise.map((item, index) => (
                                <li
                                    key={index}
                                    className="expertise-item"
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                >
                                    <span className="expertise-bullet">•</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;

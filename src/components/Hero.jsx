import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-background">
                <img
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&h=1080&fit=crop"
                    alt="Business Meeting"
                    className="hero-bg-image"
                />
                <div className="hero-gradient"></div>
                <div className="hero-pattern"></div>
            </div>

            <div className="container hero-container">
                <div className="hero-content">
                    <h1 className="hero-title animate-fade-in-up">
                        Driving Business Growth & Strategic Partnerships
                    </h1>
                    <p className="hero-subtitle animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                        I help businesses scale revenue, build partnerships, and unlock new market opportunities.
                    </p>
                    <button className="hero-cta animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                        Get in Touch
                    </button>
                </div>

                <div className="hero-card animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                    <div className="hero-card-content">
                        <h2 className="hero-card-name">GAURAV SINGH</h2>
                        <p className="hero-card-title">Business Development Manager</p>
                        <p className="hero-card-company">Representing MAYDIV</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

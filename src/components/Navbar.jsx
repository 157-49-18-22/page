import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
            <div className="container navbar-container">
                <div className="navbar-brand">
                    <img src="/Lo.png" alt="MAYDIV Logo" className="brand-logo-img" />
                    <span className="brand-logo">MAYDIV</span>
                </div>

                <div className="navbar-links">
                    <button onClick={() => scrollToSection('about')} className="nav-link">About</button>
                    <button onClick={() => scrollToSection('services')} className="nav-link">Services</button>
                    <button onClick={() => scrollToSection('contact')} className="nav-link">Contact</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

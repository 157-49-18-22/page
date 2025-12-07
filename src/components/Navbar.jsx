import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
        setMobileMenuOpen(false);
    };

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
            <div className="container navbar-container">
                <div className="navbar-brand">
                    <img src="/Lo.png" alt="MAYDIV Logo" className="brand-logo-img" />
                    <span className="brand-logo">MAYDIV</span>
                </div>

                {/* Desktop Navigation */}
                <div className="navbar-links desktop-nav">
                    <button onClick={() => scrollToSection('about')} className="nav-link">About</button>
                    <button onClick={() => scrollToSection('services')} className="nav-link">Services</button>
                    <button onClick={() => scrollToSection('contact')} className="nav-link">Contact</button>
                </div>

                {/* Mobile Hamburger Menu */}
                <button
                    className={`hamburger ${mobileMenuOpen ? 'active' : ''}`}
                    onClick={toggleMobileMenu}
                    aria-label="Toggle menu"
                >
                    <span className="hamburger-line"></span>
                    <span className="hamburger-line"></span>
                    <span className="hamburger-line"></span>
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`mobile-menu ${mobileMenuOpen ? 'active' : ''}`}>
                <div className="mobile-menu-links">
                    <button onClick={() => scrollToSection('about')} className="mobile-nav-link">About</button>
                    <button onClick={() => scrollToSection('services')} className="mobile-nav-link">Services</button>
                    <button onClick={() => scrollToSection('contact')} className="mobile-nav-link">Contact</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

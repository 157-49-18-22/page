import React from 'react';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <p className="footer-text">
                    © {currentYear} MAYDIV. All Rights Reserved.
                </p>
                <p className="footer-tagline">
                    www.maydiv.com | Designed for Business Development Representation
                </p>
            </div>
        </footer>
    );
};

export default Footer;

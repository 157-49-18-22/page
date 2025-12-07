import React from 'react';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-bottom" style={{ paddingTop: 0, borderTop: 'none', justifyContent: 'center', flexDirection: 'column', gap: '10px' }}>
                    <p className="footer-copyright">
                        © {currentYear} Maydiv. All rights reserved.
                    </p>
                    <p className="footer-credit">
                        Crafted by MayDiv Infotech
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

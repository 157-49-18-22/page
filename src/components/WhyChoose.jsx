import React from 'react';
import './WhyChoose.css';

const WhyChoose = () => {
    const reasons = [
        'Trusted Business Partner',
        'Proven Market Experience',
        'Transparent Communication',
        'Scalable Growth Models'
    ];

    return (
        <section className="why-choose section">
            <div className="container">
                <h2 className="section-title">Why Choose Us</h2>

                <div className="reasons-grid">
                    {reasons.map((reason, index) => (
                        <div
                            key={index}
                            className="reason-card"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="reason-content">
                                <h3 className="reason-title">{reason}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChoose;

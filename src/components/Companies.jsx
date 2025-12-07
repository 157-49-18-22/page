import React from 'react';
import './Companies.css';

const Companies = () => {
    const companies = [
        {
            title: 'Web Development',
            description: 'Custom web solutions, responsive design, and modern web applications.'
        },
        {
            title: 'App Development',
            description: 'Mobile app development for iOS and Android platforms.'
        },
        {
            title: 'Automation Lab',
            description: 'Process automation and workflow optimization solutions.'
        },
        {
            title: 'API Development',
            description: 'RESTful APIs and integration services for seamless connectivity.'
        },
        {
            title: 'Cloud Integration',
            description: 'Cloud migration, deployment, and integration services.'
        },
        {
            title: 'Digital Marketing',
            description: 'SEO, Social Media Marketing, and online brand building.'
        },
        {
            title: 'SEO Services',
            description: 'Search engine optimization to improve online visibility.'
        },
        {
            title: 'CRM Development',
            description: 'Customer Relationship Management solutions for business growth.'
        },
        {
            title: 'ERP Solutions',
            description: 'Enterprise Resource Planning systems for efficient operations.'
        },
        {
            title: 'IT Consulting',
            description: 'Strategic IT consulting and technology advisory services.'
        }
    ];

    return (
        <section id="services" className="companies section">
            <div className="container">
                <h2 className="section-title">Our Services</h2>

                <div className="services-master-card">
                    <div className="companies-grid">
                        {companies.map((company, index) => (
                            <div
                                key={index}
                                className="company-card"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <h3 className="company-title">{company.title}</h3>
                                <p className="company-description">{company.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Companies;

import React, { useState, useEffect } from 'react';
import './Companies.css';

const Companies = () => {
    const companies = [
        {
            title: 'Web Development',
            description: 'Custom web solutions, responsive design, and modern web applications.',
            icon: '💻'
        },
        {
            title: 'App Development',
            description: 'Mobile app development for iOS and Android platforms.',
            icon: '📱'
        },
        {
            title: 'Automation Lab',
            description: 'Process automation and workflow optimization solutions.',
            icon: '⚙️'
        },
        {
            title: 'API Development',
            description: 'RESTful APIs and integration services for seamless connectivity.',
            icon: '🔌'
        },
        {
            title: 'Cloud Integration',
            description: 'Cloud migration, deployment, and integration services.',
            icon: '☁️'
        },
        {
            title: 'Digital Marketing',
            description: 'SEO, Social Media Marketing, and online brand building.',
            icon: '📈'
        },
        {
            title: 'SEO Services',
            description: 'Search engine optimization to improve online visibility.',
            icon: '🔍'
        },
        {
            title: 'CRM Development',
            description: 'Customer Relationship Management solutions for business growth.',
            icon: '🤝'
        },
        {
            title: 'ERP Solutions',
            description: 'Enterprise Resource Planning systems for efficient operations.',
            icon: '🏭'
        },
        {
            title: 'IT Consulting',
            description: 'Strategic IT consulting and technology advisory services.',
            icon: '💡'
        }
    ];

    const [activeIndex, setActiveIndex] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(3);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setItemsPerPage(1);
            } else if (window.innerWidth < 1024) {
                setItemsPerPage(2);
            } else {
                setItemsPerPage(3);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const maxIndex = Math.max(0, companies.length - itemsPerPage);

    const nextSlide = () => {
        setActiveIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setActiveIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
    };

    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);

    // Minimum swipe distance
    const minSwipeDistance = 50;

    const onTouchStart = (e) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    };

    const onTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;

        if (isLeftSwipe) {
            nextSlide(); // Swipe Left -> Next
        }
        if (isRightSwipe) {
            prevSlide(); // Swipe Right -> Prev
        }
    };

    return (
        <section id="services" className="companies section">
            <div className="container">
                <h2 className="section-title">Our Services</h2>

                <div className="carousel-wrapper">
                    <button className="carousel-button prev" onClick={prevSlide} aria-label="Previous">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
                    </button>

                    <div className="carousel-viewport">
                        <div
                            className="carousel-track"
                            style={{
                                transform: `translateX(-${activeIndex * (100 / itemsPerPage)}%)`
                            }}
                            onTouchStart={onTouchStart}
                            onTouchMove={onTouchMove}
                            onTouchEnd={onTouchEnd}
                        >
                            {companies.map((company, index) => (
                                <div
                                    key={index}
                                    className="carousel-item"
                                    style={{ flex: `0 0 ${100 / itemsPerPage}%` }}
                                >
                                    <div className="company-card">
                                        <div className="card-header">
                                            <div className="service-icon">{company.icon}</div>
                                        </div>
                                        <div className="card-content">
                                            <h3 className="company-title">{company.title}</h3>
                                            <p className="company-description">{company.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <button className="carousel-button next" onClick={nextSlide} aria-label="Next">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                    </button>
                </div>

                <div className="carousel-indicators">
                    {Array.from({ length: companies.length - itemsPerPage + 1 }).map((_, idx) => (
                        <button
                            key={idx}
                            className={`indicator-dot ${idx === activeIndex ? 'active' : ''}`}
                            onClick={() => setActiveIndex(idx)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Companies;

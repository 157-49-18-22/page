import React, { useState, useEffect } from 'react';
import './Clients.css';

const Clients = () => {
    const clients = [
        { name: 'Bajaj Finserve', logo: '/Bajaj.jpg', isImage: true },
        { name: 'TMSquare', logo: '/TM.png', isImage: true },
        { name: 'JK Homes', logo: '/JK.png', isImage: true },
        { name: 'Fika', logo: '/Fika.png', isImage: true },
        { name: 'DrSquare', logo: '/Dr.png', isImage: true },
        { name: 'IDFC', logo: '/Idfc.png', isImage: true },
        { name: 'Melanie', logo: '/Melanie.png', isImage: true },
        { name: 'Tech9', logo: '/Tech9.jpg', isImage: true },
        { name: 'Tvara', logo: '/Tvara.png', isImage: true },
        { name: 'Magad University', logo: '/Magad.png', isImage: true },
        { name: 'NTPC', logo: '/Ntpc.png', isImage: true }
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

    const maxIndex = Math.max(0, clients.length - itemsPerPage);

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
        <section id="clients" className="clients section">
            <div className="container">
                <h2 className="section-title">Our Clients</h2>
                <p className="section-subtitle">Trusted by leading companies across industries</p>

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
                            {clients.map((client, index) => (
                                <div
                                    key={index}
                                    className="carousel-item"
                                    style={{ flex: `0 0 ${100 / itemsPerPage}%` }}
                                >
                                    <div className="client-card">
                                        <div className="client-logo">
                                            {client.isImage ? (
                                                <img src={client.logo} alt={client.name} />
                                            ) : (
                                                client.logo
                                            )}
                                        </div>
                                        <h3 className="client-name">{client.name}</h3>
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
                    {Array.from({ length: clients.length - itemsPerPage + 1 }).map((_, idx) => (
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

export default Clients;

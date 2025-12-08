import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        try {
            const response = await fetch('https://formspree.io/f/meoylgrv', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setStatus('success');
                alert('Message sent successfully! We will get back to you soon.');
                setFormData({ name: '', email: '', subject: '', message: '' });
                setTimeout(() => setStatus(''), 3000);
            } else {
                setStatus('error');
                alert('Failed to send message. Please try again.');
                setTimeout(() => setStatus(''), 3000);
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setStatus('error');
            alert('An error occurred. Please try again later.');
            setTimeout(() => setStatus(''), 3000);
        }
    };

    return (
        <section id="contact" className="contact section">
            <div className="contact-background">
                <div className="contact-gradient"></div>
            </div>

            <div className="container contact-container">
                <div className="contact-info">
                    <h2 className="contact-title">Contact Information</h2>
                    <p className="contact-subtitle">Let's discuss how we can grow your business together.</p>

                    <div className="contact-details">
                        <div className="contact-detail">
                            <strong>Email:</strong> gaurav.singh@maydiv.com
                        </div>
                        <div className="contact-detail">
                            <strong>Phone:</strong> +91 - 80770 06580
                        </div>

                        <div className="contact-detail">
                            <strong>Location:</strong> SCO 105, Second Floor, Omaxe World Street, Faridabad, Haryana - 121004
                        </div>
                    </div>
                </div>

                <div className="contact-form-wrapper">
                    <h3 className="form-title">Send a Message</h3>
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            className="form-input"
                            required
                        />

                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={handleChange}
                            className="form-input"
                            required
                        />

                        <input
                            type="text"
                            name="subject"
                            placeholder="Subject"
                            value={formData.subject}
                            onChange={handleChange}
                            className="form-input"
                            required
                        />

                        <textarea
                            name="message"
                            placeholder="Your Message"
                            value={formData.message}
                            onChange={handleChange}
                            className="form-textarea"
                            rows="5"
                            required
                        ></textarea>

                        <button
                            type="submit"
                            className="form-submit"
                            disabled={status === 'sending'}
                        >
                            {status === 'sending' ? 'Sending...' : 'Submit'}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;

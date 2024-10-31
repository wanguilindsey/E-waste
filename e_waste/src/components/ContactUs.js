import React from 'react';
import Header from './Header';
import { FaEnvelope, FaPhone } from 'react-icons/fa';

const ContactUs = () => {
    return (
        <div className="contact-us-container">
            <Header title="Contact Us" titleIcon="fas fa-address-book" />
            <p>Have questions about e-waste disposal, want to provide feedback, or need help with your submissions?</p>
            <p>Reach out to us, and we'll be happy to assist you!</p>

            <div className="contact-info">
                <p><FaEnvelope /> Email: <a href="mailto:ouremail@gmail.com">ouremail@gmail.com</a></p>
                <p><FaPhone /> Phone1: <a href="tel:+25470000000">(254) 70000000</a></p>
                <p><FaPhone /> Phone2: <a href="tel:+254711111111"> (254) 7111111111</a></p>
            </div>
        </div>
    );
};

export default ContactUs;
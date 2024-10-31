import React from 'react';
import { FaRecycle, FaExclamationCircle, FaHandsHelping, FaInfoCircle } from 'react-icons/fa';
import Header from './Header';

const LearnMore = () => {
    return (
        <div className="learn-more-container">
            <Header title="Learn About E-waste" titleIcon="fas fa-lightbulb" />

            <section className="info-section">
                <h3><FaInfoCircle className="icon" />What is E-Waste?</h3>
                <p>E-waste refers to discarded electrical or electronic devices. Common examples include old phones, computers, TVs, and batteries. As technology advances, the amount of e-waste grows rapidly, creating environmental and health concerns.</p>
            </section>

            <section className="info-section">
                <h3><FaExclamationCircle className="icon" />Why E-Waste Matters</h3>
                <p>When e-waste is not disposed of correctly, hazardous materials like lead, mercury, and cadmium can harm the environment and human health. Recycling and responsible disposal reduce pollution, save energy, and conserve valuable materials.</p>
            </section>

            <section className="info-section">
                <h3><FaHandsHelping className="icon" />How Can I Help?</h3>
                <ul>
                <li>Recycle E-Waste: Use local recycling centers.</li>
                    <li>Join Drives: Participate in community e-waste events.</li>
                    <li>Spread Awareness: Educate others about e-waste.</li>
                    <li>Advocate: Support e-waste policies.</li>
                    <li>Stay Informed: Keep up with e-waste news.</li>
                </ul>
            </section>

            <section className="info-section did-you-know">
                <h3><FaRecycle className="icon" />Did You Know?</h3>
                <ul>
                    <li>Over 50 million tons of e-waste is generated globally each year.</li>
                    <li>Only 20% of e-waste is formally recycled.</li>
                    <li>Recycling 1 million laptops saves the energy equivalent to the electricity used by 3,500 homes annually.</li>
                </ul>
            </section>
        </div>
    );
};

export default LearnMore;
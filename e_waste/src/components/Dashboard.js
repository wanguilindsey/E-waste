import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

const Dashboard = () => {
    const recentSubmissions = [
        {
            type: "Laptop",
            brand: "Dell",
            condition: "Functional",
            date: "September 20, 2024",
            status: "Pending Review",
        },
        {
            type: "Mobile Phone",
            brand: "Samsung",
            condition: "Damaged",
            date: "September 18, 2024",
            status: "Categorized",
        },
    ];

    return (
        <div className="dashboard-container">
            {/* Header with title and icon */}
            <Header title="Dashboard" titleIcon="fas fa-tachometer-alt" />

            <section className="report-ewaste-section">
                <h2>Have e-waste to dispose of?</h2>
                <p>Click here to easily report your electronic waste for proper recycling and help protect the environment!</p>
                <div className="button-container">
                    <Link to="/report-ewaste" className="report-button">Report E-waste</Link>
                </div>
            </section>

            <section className="recent-submissions-section">
                <h3>Recent Submissions</h3>
                <div className="submissions-container">
                    {recentSubmissions.map((submission, index) => (
                        <div key={index} className="submission-card">
                            <h4>{submission.type}</h4>
                            <p><strong>Brand:</strong> {submission.brand}</p>
                            <p><strong>Condition:</strong> {submission.condition}</p>
                            <p><strong>Submission Date:</strong> {submission.date}</p>
                            <p><strong>Status:</strong> {submission.status}</p>
                        </div>
                    ))}
                </div>
                <div className="button-container">
                    <Link to="/all-submissions" className="view-all-link">View All</Link>
                </div>
            </section>

            <section className="learn-more-section">
                <h3>Did you know improper e-waste disposal harms the environment?</h3>
                <p>Learn how to safely dispose of your electronics, reduce e-waste, and discover the impact of recycling on the planet. Explore tips, articles, and more!</p>
                <div className="button-container">
                    <Link to="/learn-more" className="learn-more-button">Learn More</Link>
                </div>
            </section>

            <section className="contact-support-section">
                <h3>Need assistance?</h3>
                <p>We're here to help! Explore our FAQs, get tips on using the platform, or contact support for further assistance with your e-waste submissions and account.</p>
                <div className="button-container">
                    <Link to="/contact-us" className="contact-button">Contact Us</Link>
                </div>
            </section>
        </div>
    );
};

export default Dashboard;
import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

const Submissions = () => {
    const submissions = [
        {
            id: 1,
            type: 'Laptop (Dell)',
            condition: 'Functional',
            date: 'Sept 21, 2024',
            status: 'Pending Review',
            imageUrl: 'e-waste.jpg',
        },
        {
            id: 2,
            type: 'Phone (Samsung)',
            condition: 'Damaged',
            date: 'Sept 18, 2024',
            status: 'Reviewed',
            imageUrl: 'e-waste.jpg',
        },
        {
            id: 3,
            type: 'Printer (HP)',
            condition: 'Broken',
            date: 'Sept 15, 2024',
            status: 'Categorized',
            imageUrl: 'e-waste.jpg',
        },
    ];

    return (
        <div className="all-submissions-container">
            <Header title="Your Submissions" titleIcon="fas fa-clipboard-list" />
            <input type="text" placeholder="Search" className="search-bar" />

            {submissions.map((submission) => (
                <div key={submission.id} className="all-submission-card">
                    <img src={submission.imageUrl} alt={submission.type} className="submission-image" />
                    <div className="submission-details">
                        <h4>{submission.type}</h4>
                        <p><strong>Condition:</strong> {submission.condition}</p>
                        <p><strong>Submitted on:</strong> {submission.date}</p>
                        <p><strong>Status:</strong> {submission.status}</p>
                        <Link to="/edit-ewaste">
                            <button className="edit-button">Edit</button>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Submissions;
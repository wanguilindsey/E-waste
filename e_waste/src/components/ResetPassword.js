import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ResetPassword = () => {
    const [email, setEmail] = useState('');
    const [notification, setNotification] = useState(false);
    const [submittedEmail, setSubmittedEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        //API call
        console.log('Reset password for:', email);

        setSubmittedEmail(email);

        setNotification(true);

        setEmail('');

    };

    return (
        <div className="auth-container">
            <h2>Reset your password</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <button type="submit" className="auth-button">
                    Reset Password
                </button>
            </form>

            {/* Show the notification if the email has been sent */}
            {notification && (
                <p className="notification">
                An email has been sent to <strong>{submittedEmail}</strong> with instructions to reset your password.
                </p>
            )}

            <p className="login-link">
                <Link to="/">Log in</Link>
            </p>
        </div>
    );
};

export default ResetPassword;
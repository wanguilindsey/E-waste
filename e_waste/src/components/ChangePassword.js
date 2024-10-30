import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ChangePassword = () => {
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleChangePassword = (e) => {
        e.preventDefault();

        if (newPassword !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }

        if (newPassword.length < 8) {
            alert('Password must be at least 8 characters long!');
            return;
        }

        console.log('Password changed to:', newPassword);

        setNewPassword('');
        setConfirmPassword('');
    };

    return (
        <div className="auth-container">
            <h2>Change Password</h2>
            <p className="password-instructions">Your password must have at least 8 characters.</p>

            <form onSubmit={handleChangePassword}>
            <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="New Password"
                required
            />
            <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm Password"
                required
            />
            <button type="submit" className="auth-button">Change My Password</button>
            </form>

            <p className="login-link">
                <Link to="/">Log in</Link>
            </p>
            
        </div>
    );
};

export default ChangePassword;
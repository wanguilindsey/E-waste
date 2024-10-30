import React from 'react';
import { Link } from 'react-router-dom';

const SignupConfirmation = () => {
  return (
    <div className="auth-container">
      <h2>Thank You for Signing Up!</h2>
      <p>
        We've sent a verification link to your email. Please check your inbox to verify your email address.
      </p>
      <p className="resend-text">
        Didn’t receive the email? <Link to="/resend" className="resend-link">Resend</Link>
      </p>
    </div>
  );
};

export default SignupConfirmation;
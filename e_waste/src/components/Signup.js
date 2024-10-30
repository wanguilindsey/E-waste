import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    // Logic for signup
    console.log('Signing up with:', firstName, email, phone, password, confirmPassword);
    navigate('/signup-confirmation');
  };

  const handleGoogleSignup = () => {
    // Logic for Google signup
    console.log('Signing up with Google');
  };

  return (
    <div className="auth-container">
      <h2>Create Password</h2>
      <form onSubmit={handleSignup}>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="First Name"
          required
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Phone Number"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm Password"
          required
        />

        <button type="submit" className="auth-button">
          Sign Up
        </button>
      </form>

      {/* Or separator between buttons */}
      <div className="or-container">
        <hr className="line" />
        <span className="or-text">Or</span>
        <hr className="line" />
      </div>

      <button onClick={handleGoogleSignup} className="google-signup-button">
        <i className="fab fa-google"></i> Sign Up with Google
      </button>

      <p className="login-link">
        Already have an account? <Link to="/">Log in</Link>
      </p>
    </div>
  );
};

export default Signup;
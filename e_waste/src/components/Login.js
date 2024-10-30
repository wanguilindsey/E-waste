import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
  
    const handleLogin = (e) => {
      e.preventDefault();
      // Logic for login
      console.log('Logging in with:', email, password);
      navigate('/dashboard');
    };
  
    const handleGoogleLogin = () => {
      // Logic for Google login
      console.log('Logging in with Google');
    };
  
    return (
    <div className="auth-container">
        <h2>Welcome back!👋🏿</h2>
        <form onSubmit={handleLogin}>
          <div className="input-field">
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>
  
          <div className="input-field">
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
            <a href="/reset-password" className="forgot-password">
              Forgot Password?
            </a>
          </div>
  
          <button type="submit" className="auth-button">
            Login
          </button>
        </form>
        
        <div className="or-container">
        <hr className="line" />
        <span className="or-text">Or</span>
        <hr className="line" />
        </div>

        <button onClick={handleGoogleLogin} className="google-login-button">
        <i className="fab fa-google"></i> Login with Google
        </button>
  
        <p className="signup-link">
          Don't have an account? <Link to="/signup">Signup</Link>
        </p>
    </div>
    );
};
  
export default Login;
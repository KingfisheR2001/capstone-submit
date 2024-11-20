import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles.css';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === 'admin') {
      navigate('/admin/home');
    } else {
      navigate('/user/home');
    }
  };

  return (
    <div className="login-page">
      <div className="login-form-container">
        <h2 className="login-title">Login</h2>
        <form className="login-form">
          <input
            type="text"
            className="login-input"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            className="login-input"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="button" className="login-button" onClick={handleLogin}>
            Login
          </button>
        </form>
        <p className="signup-link">
          Don't have an account? <a href="/signup">Signup</a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;

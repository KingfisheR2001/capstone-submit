import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles.css';

const SignupPage = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = () => {
    if (!name || !phoneNumber || !username || !password) {
      alert('All fields are required!');
      return;
    }
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    // Save user details (for now, use localStorage for simplicity)
    const userDetails = { name, phoneNumber, username };
    localStorage.setItem('userDetails', JSON.stringify(userDetails));
    alert('Signup successful!');
    navigate('/');
  };

  return (
    <div className="signup-page">
      <div className="signup-form-container">
        <h2 className="signup-title">Signup</h2>
        <form className="signup-form">
          <input
            type="text"
            className="signup-input"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            className="signup-input"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <input
            type="text"
            className="signup-input"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            className="signup-input"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            className="signup-input"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button type="button" className="signup-button" onClick={handleSignup}>
            Signup
          </button>
        </form>
        <p className="login-link">
          Already have an account? <a href="/">Login</a>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;

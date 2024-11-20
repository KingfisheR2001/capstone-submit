import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">Sarthak Bank</div>
      <ul className="navbar-links">
        <li><Link to="/">Login</Link></li>
        <li><Link to="/signup">Signup</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;

import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

const UserHomePage = () => {
  const [userDetails, setUserDetails] = useState({});

  useEffect(() => {
    // Fetch user details from localStorage
    const savedDetails = JSON.parse(localStorage.getItem('userDetails'));
    if (savedDetails) {
      setUserDetails(savedDetails);
    }
  }, []);

  return (
    <div className="user-home-page">
      <h2>Welcome, {userDetails.name || 'User'}!</h2>
      <div>
        <h3>Account Details</h3>
        <p><strong>Account Number:</strong> 1234567890</p>
        <p><strong>Name:</strong> {userDetails.name}</p>
        <p><strong>Phone Number:</strong> {userDetails.phoneNumber}</p>
        
      </div>
      <button><Link to ="/send-money">Money Transfer</Link></button>
      <button>Deposit/Withdraw</button>
      <button><Link to ="/view-balance">View Balance</Link></button>
      <button><Link to="/view-transaction">View Transactions</Link></button>
    </div>
  );
};

export default UserHomePage;

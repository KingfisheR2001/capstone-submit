import React, { useState } from 'react';

const ViewBalance = () => {
  // Assuming the balance is a static value for now
  const [balance, setBalance] = useState(145366);  // Example: $10,000

  return (
    <div className="view-balance-container">
      <h2>Account Balance</h2>
      <div className="balance-card">
        <p>Your Current Balance is:</p>
        <h3>Rs.{balance.toLocaleString()}</h3>
      </div>
    </div>
  );
};

export default ViewBalance;

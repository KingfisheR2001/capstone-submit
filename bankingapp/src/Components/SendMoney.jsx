import React, { useState } from 'react';
import './SendMoney.css'; // Import the CSS for styling

const SendMoney = () => {
  const [formData, setFormData] = useState({
    receiverAccountNumber: '',
    ifscCode: '',
    bankName: '',
    amount: '',
    pin: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here, such as sending the data to an API
    console.log(formData);
  };

  return (
    <div className="send-money-form-container">
      <h2>Send Money</h2>
      <form onSubmit={handleSubmit} className="send-money-form">
        <div className="form-group">
          <label htmlFor="receiverAccountNumber">Receiver Account Number:</label>
          <input
            type="text"
            id="receiverAccountNumber"
            name="receiverAccountNumber"
            value={formData.receiverAccountNumber}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="ifscCode">IFSC Code:</label>
          <input
            type="text"
            id="ifscCode"
            name="ifscCode"
            value={formData.ifscCode}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="bankName">Bank Name:</label>
          <input
            type="text"
            id="bankName"
            name="bankName"
            value={formData.bankName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="amount">Amount to Transfer:</label>
          <input
            type="number"
            id="amount"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="pin">PIN Number:</label>
          <input
            type="password"
            id="pin"
            name="pin"
            value={formData.pin}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="submit-btn">Transfer Money</button>
      </form>
    </div>
  );
};

export default SendMoney;

import React from "react";
import "./TransactionHistory.css";

const TransactionHistory = () => {
  const transactions = [
    {
      id: 1,
      date: "2024-11-01",
      description: "Salary Credited",
      type: "Credit",
      amount: 2000,
      balance: 12000,
    },
    {
      id: 2,
      date: "2024-11-05",
      description: "Grocery Shopping",
      type: "Debit",
      amount: 500,
      balance: 11500,
    },
    {
      id: 3,
      date: "2024-11-10",
      description: "Electricity Bill",
      type: "Debit",
      amount: 200,
      balance: 11300,
    },
    {
      id: 4,
      date: "2024-11-15",
      description: "Refund Received",
      type: "Credit",
      amount: 150,
      balance: 11450,
    },
    {
      id: 5,
      date: "2024-11-18",
      description: "Dining Out",
      type: "Debit",
      amount: 300,
      balance: 11150,
    },
  ];

  return (
    <div className="transaction-history-container">
      <h2>Transaction History</h2>
      <div className="current-balance">
        Current Balance: <span>$11,150</span>
      </div>
      <table className="transaction-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Type</th>
            <th>Amount</th>
            <th>Balance</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.date}</td>
              <td>{transaction.description}</td>
              <td
                className={
                  transaction.type === "Credit" ? "credit" : "debit"
                }
              >
                {transaction.type}
              </td>
              <td>${transaction.amount}</td>
              <td>${transaction.balance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionHistory;

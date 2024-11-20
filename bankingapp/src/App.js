import logo from './logo.svg';
import './App.css';

import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './Components/LoginPage';
import UserHomePage from './Components/UserHomePage';
import AdminHomePage from './Components/AdminHomePage';
import SignupPage from './Components/SignupPage';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import ViewTransaction from './Components/ViewTransaction';
import ViewBalance from './Components/ViewBalance';
import SendMoney from './Components/SendMoney';
function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/user/home" element={<UserHomePage />} />
            <Route path="/admin/home" element={<AdminHomePage />} />
            <Route path="/view-transaction" element={<ViewTransaction />} />
            <Route path="/view-balance" element={<ViewBalance />} />
            <Route path="send-money" element={<SendMoney/>} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

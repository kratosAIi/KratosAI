import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import ForgotPassword from './components/Auth/ForgotPassword';
import GoogleCallback from './components/Auth/GoogleCallback';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/auth/callback" element={<GoogleCallback />} />
        {/* Add more routes as needed */}
        <Route path="/dashboard" element={<div style={{ padding: '20px' }}>Dashboard (TODO: Create Dashboard Component)</div>} />
      </Routes>
    </Router>
  );
};

export default App;

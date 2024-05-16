import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WelcomePage from './WelcomePage';
import DashboardPage from './DashboardPage';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/" element={<WelcomePage />} />
      </Routes>
    </Router>
  );
}

export default App;

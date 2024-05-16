import React from 'react';
import { Link } from 'react-router-dom';
import './WelcomePage.css';  // Create this CSS file for custom styles

const WelcomePage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white">
      <h1 className="text-6xl font-bold mb-8">Welcome to Our Dashboard</h1>
      {/* <p className="text-2xl mb-8">Your one-stop solution for all financial insights</p> */}
      <Link to="/dashboard">
        <button className="bg-white text-blue-700 font-bold py-2 px-4 rounded-full hover:bg-gray-200">
          Go to Dashboard
        </button>
      </Link>
    </div>
  );
}

export default WelcomePage;

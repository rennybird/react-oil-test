import React from 'react';
import './DashboardPage.css';  // Create this CSS file for custom styles

const DashboardPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-8">This is PowerBI Financial Dashboard</h1>
      <div className="w-full h-full mt-8">
        <iframe
          title="try_finance"
          className="w-full h-full"
          src="https://app.powerbi.com/view?r=eyJrIjoiZGVmNzIwNTktY2ZlYy00ZWQwLTg1NTYtYTJlNTU1NzIxNmExIiwidCI6IjZmNDQzMmRjLTIwZDItNDQxZC1iMWRiLWFjMzM4MGJhNjMzZCIsImMiOjEwfQ%3D%3D"
          frameBorder="0"
          allowFullScreen={true}
        ></iframe>
      </div>
    </div>
  );
}

export default DashboardPage;

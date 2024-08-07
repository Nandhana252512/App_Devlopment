import React from 'react';
import Sidebar from './Sidebar';
import BarGraph from './BarGraph';
import './Dashboard.css'; // Add styles as needed

const Dashboard = () => {
  const data = {
    totalOrders: 150,
    totalSwapping: 75,
  };

  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="dashboard-content">
        <h1>Dashboard</h1>
        <div className="dashboard-stats">
          <div className="stat-item">
            <h2>Total Orders</h2>
            <p>{data.totalOrders}</p>
          </div>
          <div className="stat-item">
            <h2>Total Swapping Occurs</h2>
            <p>{data.totalSwapping}</p>
          </div>
        </div>
        <div className="dashboard-graph">
          <BarGraph data={data} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

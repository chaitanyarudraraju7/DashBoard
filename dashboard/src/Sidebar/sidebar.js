// src/components/Sidebar.js
import React from 'react';
import './sidebar.css'
const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Dashboard</h2>
      <ul>
        <li>Overview</li>
        <li>Reports</li>
        <li>Analytics</li>
        <li>Settings</li>
      </ul>
    </div>
  );
};

export default Sidebar;

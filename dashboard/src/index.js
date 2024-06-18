import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Sidebar from "./Sidebar/sidebar";
import DataTable from './DataTable/DataTable';
// import Chart from './Chart/Chat';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Sidebar/>
    <DataTable/>
    {/* <Chart/> */}
  </React.StrictMode>
);



// src/components/DataTable.js
import React, { useState } from 'react';
import './DataTable.css';

const DataTable = () => {
  const [data, setData] = useState([
    { id: 1, name: 'John Doe', value: 50 },
    { id: 2, name: 'Jane Smith', value: 75 },
    { id: 3, name: 'Doe', value: 50 },
    { id: 4, name: 'Smith', value: 75 },
    { id: 5, name: 'John', value: 50 },
    { id: 6, name: 'Jane', value: 75 },
    // Add more data as needed
  ]);

  return (
    <div className="data-table">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;

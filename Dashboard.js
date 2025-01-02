
import React from 'react';

const Dashboard = ({ companies }) => {
  return (
    <div>
      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border p-2">Company</th>
            <th className="border p-2">Last 5 Communications</th>
            <th className="border p-2">Next Communication</th>
          </tr>
        </thead>
        <tbody>
          {companies.map((company) => (
            <tr key={company.id}>
              <td className="border p-2">{company.name}</td>
              <td className="border p-2">{/* Logic for last 5 communications */}</td>
              <td className="border p-2">{/* Logic for next communication */}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;


import React from 'react';
import Dashboard from './components/User/Dashboard';

function App() {
  const companies = [
    { id: 1, name: 'Company A' },
    { id: 2, name: 'Company B' },
  ];

  return (
    <div className="App">
      <h1 className="text-2xl font-bold">Company Dashboard</h1>
      <Dashboard companies={companies} />
    </div>
  );
}

export default App;

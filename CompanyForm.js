
import React, { useState } from 'react';

const CompanyForm = ({ onSave }) => {
  const [company, setCompany] = useState({
    name: '',
    location: '',
    linkedIn: '',
    emails: '',
    phone: '',
    comments: '',
    periodicity: 14,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCompany({ ...company, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(company);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="name"
        placeholder="Company Name"
        value={company.name}
        onChange={handleChange}
        className="border p-2 w-full"
      />
      <button type="submit" className="bg-blue-500 text-white p-2">Save</button>
    </form>
  );
};

export default CompanyForm;

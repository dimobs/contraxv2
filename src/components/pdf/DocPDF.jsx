import React, { useState } from 'react';
import { jsPDF } from 'jspdf';

const ReactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleDownload = () => {
    const pdf = new jsPDF();
    pdf.text(`Name: ${formData.name}`, 20, 20);
    pdf.text(`Email: ${formData.email}`, 20, 30);
    pdf.save('formData.pdf');
  };

  const handleView = () => {
    // Implement view logic here using formData
    console.log('Viewing data:', formData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleDownload();
    handleView();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
        </label>
        <button type="submit">Submit</button>
      </form>
      <div>
        <button onClick={handleDownload}>Download as PDF</button>
        <button onClick={handleView}>View</button>
      </div>
    </div>
  );
};

export default ReactForm;

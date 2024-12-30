// TrafficViolation.js
// import React from 'react';

// const TrafficViolation = () => {
//   return (
//     <div>
//       <h1>Traffic Violation Report</h1>
//       <form>
//         <label>Location:</label>
//         <input type="text" placeholder="Enter location" required />

//         <label>Vehicle Number:</label>
//         <input type="text" placeholder="Enter vehicle number" required />

//         <label>Violation Details:</label>
//         <textarea placeholder="Describe the violation" required></textarea>

//         <label>Upload Image/Video:</label>
//         <input type="file" accept="image/*, video/*" />

//         <button type="submit">Submit Report</button>
//       </form>
//     </div>
//   );
// };

// export default TrafficViolation;
import React, { useState } from 'react';
import axios from 'axios';

const TrafficViolation = () => {
  const [formData, setFormData] = useState({
    vehicleNumber: '',
    location: '',
    violationType: '',
    image: null,
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });

    try {
      const response = await axios.post('http://localhost:5000/api/traffic-violations/create', data, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setSuccessMessage(response.data.message);
      setErrorMessage('');
    } catch (error) {
      console.error('Error submitting traffic violation report:', error);
      setErrorMessage('Failed to submit the report. Please try again.');
      setSuccessMessage('');
    }
  };

  return (
    <div>
      <h1>Traffic Violation Report</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="location">Location:</label>
          <input
            type="text"
            id="location"
            name="location"
            placeholder="Enter location"
            value={formData.location}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <label htmlFor="vehicleNumber">Vehicle Number:</label>
          <input
            type="text"
            id="vehicleNumber"
            name="vehicleNumber"
            placeholder="Enter vehicle number"
            value={formData.vehicleNumber}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <label htmlFor="violationType">Violation Type:</label>
          <input
            type="text"
            id="violationType"
            name="violationType"
            placeholder="Enter violation type"
            value={formData.violationType}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <label htmlFor="image">Upload Image/Video:</label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*, video/*"
            onChange={handleFileChange}
            required
          />
        </div>

        <button type="submit">Submit Report</button>
      </form>

      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </div>
  );
};

export default TrafficViolation;

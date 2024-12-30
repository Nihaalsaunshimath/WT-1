// import React, { useState } from 'react';
// import axios from 'axios';

// const PotholeReport = () => {
//   const [location, setLocation] = useState('');
//   const [description, setDescription] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('/api/report/pothole', { location, description });
//       alert('Report submitted successfully!');
//     } catch (error) {
//       alert('Failed to submit report.');
//     }
//   };

//   return (
//     <div>
//       <h2>Pothole Report</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Location"
//           value={location}
//           onChange={(e) => setLocation(e.target.value)}
//         />
//         <textarea
//           placeholder="Description"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//         />
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default PotholeReport;
import React, { useState } from 'react';
import axios from 'axios';

const PotholeReport = () => {
  const [formData, setFormData] = useState({
    location: '',
    severity: '',
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
      const response = await axios.post('http://localhost:5000/api/potholes/create', data, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setSuccessMessage(response.data.message);
      setErrorMessage('');
    } catch (error) {
      setErrorMessage('Failed to submit report.');
      setSuccessMessage('');
    }
  };

  return (
    <div>
      <h2>Pothole Report</h2>
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
          <label htmlFor="severity">Severity:</label>
          <select
            id="severity"
            name="severity"
            value={formData.severity}
            onChange={handleInputChange}
            required
          >
            <option value="">Select Severity</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>

        <div>
          <label htmlFor="image">Upload Image:</label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={handleFileChange}
            required
          />
        </div>

        <button type="submit">Submit</button>
      </form>

      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </div>
  );
};

export default PotholeReport;

import React from 'react';
import { useNavigate } from 'react-router-dom';

const PotholeReportSuccess = () => {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Report Submitted Successfully!</h1>
      <p>Thank you for reporting a waste management issue. Your contribution helps improve the community!</p>
      <button
        style={{
          padding: '10px 20px',
          marginTop: '20px',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
        onClick={() => navigate('/dashboard')}
      >
        Back to Dashboard
      </button>
    </div>
  );
};

export default PotholeReportSuccess;

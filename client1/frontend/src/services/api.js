import axios from 'axios';
const API = process.env.REACT_APP_API_URL;

export const submitPotholeReport = async (data) => {
  return axios.post(`${API}/api/potholes/create`, data);
};

export const submitStrayAnimalReport = async (data) => {
  return axios.post(`${API}/api/stray-animals/create`, data);
};

export const submitTrafficViolationReport = async (data) => {
  return axios.post(`${API}/api/traffic-violations/create`, data);
};

export const submitWasteReport = async (data) => {
  try {
    const response = await axios.post(`${API}/api/waste-reports/create`, data);
    return response.data;
  } catch (error) {
    console.error('Error submitting report:', error);
    throw error;
  }
};
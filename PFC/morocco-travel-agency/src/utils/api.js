// src/utils/api.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api'; // À changer pour la production

export const fetchDestinations = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/destinations`);
    return response.data;
  } catch (error) {
    console.error('Error fetching destinations:', error);
    throw error;
  }
};

export const fetchTours = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/tours`);
    return response.data;
  } catch (error) {
    console.error('Error fetching tours:', error);
    throw error;
  }
};

// ... autres fonctions API
const API_BASE_URL = process.env.NODE_ENV === 'production' 
  ? 'https://backends-y6bg.onrender.com' 
  : 'http://localhost:3001';

export const apiCall = async (endpoint: string, options?: RequestInit) => {
  return fetch(`${API_BASE_URL}${endpoint}`, options);
};
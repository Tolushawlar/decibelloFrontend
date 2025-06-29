const API_BASE_URL = process.env.NODE_ENV === 'production' 
  ? 'https://your-production-domain.com' 
  : 'http://localhost:3001';

export const apiCall = async (endpoint: string, options?: RequestInit) => {
  return fetch(`${API_BASE_URL}${endpoint}`, options);
};
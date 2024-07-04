// src/api.js
const API_URL = process.env.PORT || 'https://reactprojectlca.onrender.com';

export const fetchData = async () => {
  const response = await fetch(`${https://reactprojectlca.onrender.com}/endpoint`);
  const data = await response.json();
  return data;
};

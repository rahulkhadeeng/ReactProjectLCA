// src/api.js
const API_URL = process.env.PORT || 4000;

export const fetchData = async () => {
  const response = await fetch(`${API_URL}/endpoint`);
  const data = await response.json();
  return data;
};

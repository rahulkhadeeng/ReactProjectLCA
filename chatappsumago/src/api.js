// src/api.js
const API_URL = process.env.REACT_APP_API_URL || "http://localhost:4000";

export const fetchData = async () => {
  const response = await fetch(`${API_URL}/endpoint`);
  const data = await response.json();
  return data;
};

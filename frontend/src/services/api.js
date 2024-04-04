import axios from 'axios';

const API_URL = 'http://localhost:3000'; 

const api = axios.create({
  baseURL: API_URL,
});

export const login = async (username, password) => {
  try {
    const response = await api.post('/login', { username, password });
    return response.data;
  } catch (error) {
    throw error;
  }
};
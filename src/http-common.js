import axios from 'axios';

export const HTTP = axios.create({
  baseURL: 'http://localhost:3000/',
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
  },
})

export const MultipartHTTP = axios.create({
  baseURL: 'http://localhost:3000/',
  headers: {
    'Content-Type': 'multipart/form-data',
  },
})
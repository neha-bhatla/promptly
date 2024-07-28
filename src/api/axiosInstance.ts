import axios, { AxiosInstance } from 'axios';

const axiosInstance: AxiosInstance = axios.create({
  baseURL: 'https://6c6e-2620-101-f000-700-00-d4f-2b4d.ngrok-free.app',
  headers: { "ngrok-skip-browser-warning": "true" }
});

export default axiosInstance;

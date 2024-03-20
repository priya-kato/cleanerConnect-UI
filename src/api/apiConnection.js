import {Platform} from 'react-native';
import axios from 'axios';
const baseURL = 'https://evolved-longhorn-implicitly.ngrok-free.app/';
console.log(baseURL, 'baseURL');
const connection = axios.create({
  baseURL,
  headers: {
    Accept: 'application/json',
    'Request-Source': Platform.OS,
  },
});

connection.interceptors.request.use(
  async config => {
    console.log(config.url, 'configurl');
    config.headers = {
      ...config.headers,
      'Content-Type': 'application/json',
    };

    return config;
  },
  error => {
    console.log(error.response.data, 'responsemessage');
    return Promise.reject(error);
  },
);
// Add a response interceptor
connection.interceptors.response.use(
  response => {
    // Do something with response data
    return response;
  },
  error => {
    // Do something with response error
    console.error('Response Error Interceptor:', JSON.stringify(error));
    return Promise.reject(error);
  },
);

export default connection;

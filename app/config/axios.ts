import axios from "axios";


// Axios instance with base url for all APIs (the realtive to axios default url in vuejs)
const axiosInstance = axios.create({
    baseURL: '/api',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  
  export default axiosInstance;
import axios from "axios";
const baseURL = import.meta.env.VITE_BACKEND_URL

// console.log(`base URL is ${baseURL}`)
const httpService = axios.create({
  baseURL
})

httpService.interceptors.request.use(
  (config)=> {
    const token = localStorage.getItem("authToken");
    if(token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
)

httpService.interceptors.response.use(
  (response) => response,
  (error) => {
    // debugger
    if( error.response && (error.response.status === 401 || error.response.status === 403)){
      localStorage.removeItem("authToken");
      window.location.href = '/login';
    }

    return Promise.resolve(error.response)
  }
)

export default httpService;

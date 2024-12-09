import axios from "axios";
const baseURL = import.meta.env.VITE_BACKEND_URL
debugger
console.log(`base URL is ${baseURL}`)
const httpService = axios.create({
  baseURL
})

httpService.interceptors.request.use(
  (config)=> {
    const token = localStorage.getItem("token");
    if(token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
)

export default httpService;

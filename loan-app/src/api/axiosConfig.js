import axios from "axios";
import NProgress from "nprogress";
import "./nprogress.css";

// Set your backend base URL
const api = axios.create({
  baseURL: "http://localhost:9000/api/v1", // change this when hosted online
  withCredentials: true, // if using cookies/auth
});

// Start NProgress on every request
api.interceptors.request.use((config) => {
  NProgress.start();
  return config;
});

// Stop NProgress on every response
api.interceptors.response.use(
  (response) => {
    NProgress.done();
    return response;
  },
  (error) => {
    NProgress.done();
    return Promise.reject(error);
  }
);

export default api;

/*import api from '../api/axiosConfig';

async function getPosts() {
  const res = await api.get('/post');
  console.log(res.data);
}
*/

import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000/api/v1", // backend base URL
  headers: {
    "Content-Type": "application/json"
  },
  withCredentials: false
});

// Optional: global response error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Network or server error
    if (!error.response) {
      console.error("Network error:", error);
    }
    return Promise.reject(error);
  }
);

export default api;

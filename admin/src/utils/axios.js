import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000/api", // Adjust this to your Laravel API URL
  headers: {
    "Content-Type": "application/json",
  },
});

// Add interceptors if needed (e.g., for token management)
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      console.error("Unauthorized! Redirecting to login...");
      // Add redirect logic if needed
    }
    return Promise.reject(error);
  }
);

export default api;

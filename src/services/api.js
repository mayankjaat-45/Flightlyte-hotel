import axios from "axios";
import { useAuthStore } from "../store/authStore";

export const publicApi = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

export const privateApi = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

// Attach access token to every request
privateApi.interceptors.request.use(
  (config) => {
    const token = useAuthStore.getState().token;

    console.log("Authorization token:", token);

    if (token) {
      config.headers = config.headers || {};
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

// Handle expired access tokens (optional refresh flow)
privateApi.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      const { refreshToken, setToken, logout } = useAuthStore.getState();

      try {
        // Call refresh endpoint
        const res = await publicApi.post("/api/auth/token/refresh/", {
          refresh: refreshToken,
        });

        const newAccessToken = res.data.data.access;
        setToken(newAccessToken);

        // Retry original request with new token
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        return privateApi(originalRequest);
      } catch (refreshError) {
        logout();
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);
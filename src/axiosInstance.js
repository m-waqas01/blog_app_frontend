import axios from "axios";

const API_URL =
  process.env.REACT_APP_API_BASE_URL ||
  "https://waqas-blog-app-backend.vercel.app/api";

const axiosInstance = axios.create({
  baseURL: API_URL,
});

// Attach access token to every request
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Handle refresh token on 401 errors
axiosInstance.interceptors.response.use(
  (response) => response,

  async (error) => {
    const originalRequest = error.config;

    // If access token expired
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refreshToken = localStorage.getItem("refreshToken");

        const res = await axios.post(`${API_URL}/refresh-token`, {
          refreshToken,
        });

        const newAccessToken = res.data.accessToken;

        // save new access token
        localStorage.setItem("token", newAccessToken);

        // retry request with new token
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

        return axiosInstance(originalRequest);
      } catch (err) {
        console.log("Refresh token expired, please login again.");
        localStorage.removeItem("token");
        localStorage.removeItem("refreshToken");
        window.location.href = "/login";
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;

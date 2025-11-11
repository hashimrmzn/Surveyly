// src/api/userApi.js
import axiosClient from "./axiosClient";

const userApi = {
  // Register a new user
  register: (userData) => axiosClient.post("/register", userData),

  // Login user
  login: (userData) => axiosClient.post("/login", userData),

  // Verify OTP after registration
  verifyOtp: (data) => axiosClient.post("/verify", data),

  // Resend OTP email
  resendOtp: (data) => axiosClient.post("/resend", data),
  
  // Optional: get current user info if you implement /me endpoint
  getCurrentUser: () => axiosClient.get("/me"),
};

export default userApi;

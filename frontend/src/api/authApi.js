
import { api } from "./api";

export const signupUser = async (userData) => {
  return await api.post(
    "/auth/signup",
    userData
  );
};

export const loginUser = async (credentials) => {
  return await api.post(
    "/auth/login",
    credentials
  );
};

export const getCurrentUser = async () => {
  return await api.get("/auth/me");
};

export const updateProfile = async (profileData) => {
  return await api.put(
    "/auth/profile",
    profileData
  );
};

export const changePassword = async (passwordData) => {
  return await api.put(
    "/auth/change-password",
    passwordData
  );
};

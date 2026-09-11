import { api } from "./api";

// ========================================
// Get Settings
// ========================================

export const getSettings = async () => {
  const response = await api.get(
    "/settings"
  );

  return response.data;
};


// ========================================
// General Settings
// ========================================

export const updateGeneralSettings = async (
  data
) => {
  const response = await api.put(
    "/settings/general",
    data
  );

  return response.data;
};


// ========================================
// Notification Settings
// ========================================

export const updateNotificationSettings =
  async (data) => {
    const response = await api.put(
      "/settings/notifications",
      data
    );

    return response.data;
  };


// ========================================
// Privacy Settings
// ========================================

export const updatePrivacySettings =
  async (data) => {
    const response = await api.put(
      "/settings/privacy",
      data
    );

    return response.data;
  };
import api from "./api";

export const getBeekeeperDashboard = async () => {
  const response = await api.get("/beekeeper/dashboard");

  return response.data;
};
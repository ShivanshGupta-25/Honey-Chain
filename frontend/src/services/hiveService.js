import api from "./api";

export const getHives = async () => {
  const response = await api.get("/hives");
  return response.data;
};

export const getHiveById = async (id) => {
  const response = await api.get(`/hives/${id}`);
  return response.data;
};

export const createHive = async (hiveData) => {
  const response = await api.post("/hives", hiveData);
  return response.data;
};

export const updateHive = async (id, hiveData) => {
  const response = await api.put(`/hives/${id}`, hiveData);
  return response.data;
};

export const deleteHive = async (id) => {
  const response = await api.delete(`/hives/${id}`);
  return response.data;
};
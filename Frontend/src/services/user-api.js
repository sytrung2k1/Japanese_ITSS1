import { axiosClient } from "./axios-client";

export const userApi = {
  getUsers() {
    return axiosClient.get(`/users`);
  },
  updateUser(id, profile) {
    return axiosClient.put(`/users/${id}`, profile);
  },
};

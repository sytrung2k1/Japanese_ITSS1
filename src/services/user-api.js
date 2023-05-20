import { axiosClient } from "./axios-client";

export const userApi = {
  getUsers() {
    return axiosClient.get(`/`);
  },
};

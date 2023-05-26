import { axiosClient } from "./axios-client";

export const authApi = {
  login(username, password) {
    return axiosClient.post("/login", { username, password });
  },
};

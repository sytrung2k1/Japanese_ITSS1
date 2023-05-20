import { axiosClient } from "./axios-client";

export const authApi = {
  //   getToken() {
  //     return axiosClient.get(`/`);
  //   },

  login(username, password) {
    return axiosClient.post("/login", { username, password });
  },
};

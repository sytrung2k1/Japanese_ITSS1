import { axiosClient } from "./axios-client";

export const authApi = {
  login(user_name, password) {
    return axiosClient.post("/users/login", { user_name, password });
  },
};

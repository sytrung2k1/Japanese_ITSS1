import { axiosClient } from "./axios-client";

export const teacherApi = {
  getTeachers() {
    return axiosClient.get(`/`);
  },
};

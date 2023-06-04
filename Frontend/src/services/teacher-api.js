import { axiosClient } from "./axios-client";

export const teacherApi = {
  getTeachers() {
    return axiosClient.get(`/teacher-profiles/`);
  },
  getTeacher(id) {
    return axiosClient.get(`/teacher-profiles/${id}`);
  },
};

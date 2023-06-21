import { axiosClient } from "./axios-client";

export const teacherApi = {
  getTeachers() {
    return axiosClient.get(`/teacher-profiles/`);
  },
  getTeacher(teacher_id) {
    return axiosClient.get(`/teacher-profiles/details/${teacher_id}`);
  },
  searchTeacher(appliedFilters) {
    return axiosClient.post(`/teacher-profiles/details/`, appliedFilters);
  },
  updateProfile(id, info) {
    return axiosClient.put(`/teacher-profiles/${id}`, info);
  },
};

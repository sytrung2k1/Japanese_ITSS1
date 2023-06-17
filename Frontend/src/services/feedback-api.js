import { axiosClient } from "./axios-client";

export const feedbackApi = {
  getFeedbacks() {
    return axiosClient.get(`/feedbacks`);
  },

  getFeedback(id) {
    return axiosClient.get(`/feedbacks/${id}`);
  },
};

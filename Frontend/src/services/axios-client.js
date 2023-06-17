import axios from "axios";
import { BASE_URL_API } from "../constants/config";

const token = localStorage.getItem("token");

export const axiosClient = axios.create({
  baseURL: BASE_URL_API,
  headers: {
    "Content-Type": "application/json",
  },
});

if (token) {
  axiosClient.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}

axiosClient.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    let res = {};
    // console.log("<<< check error:", error.name);
    // console.log("<<< check error:", error.message);
    if (error.response) {
      res.status = error.response.status;
      res.data = error.response.data;
      res.headers = error.response.headers;
    }

    // return Promise.reject(error);
    return res;
  }
);

axiosClient.interceptors.request.use(
  (config) => {
    // Do something before request is sent
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

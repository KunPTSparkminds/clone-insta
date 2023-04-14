import { BaseRequestQueryParam, HttpResponse, User } from "../models";
import axiosClient from "./axiosClient";

const api = {
  getPosts(params?: BaseRequestQueryParam): Promise<HttpResponse<User[]>> {
    const url = `users`;
    return axiosClient.get(url, { params });
  },
};

export default api;

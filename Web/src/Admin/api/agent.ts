import { UserLoginData, UsersData } from "Admin/models/userModel";
import axios, { AxiosResponse } from "axios";
import getUserToken from "helpers/getUserToken";

const sleep = (delay: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
};

axios.interceptors.response.use(async (response) => {
  try {
    await sleep(1000);
    return response;
  } catch (error) {
    console.log(error);
    return await Promise.reject(error);
  }
});

axios.interceptors.request.use((config) => {
  const token = getUserToken();
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

const requests = {
  get: <T>(url: string) => axios.get<T>(url).then(responseBody),
  post: <T>(url: string, body: {}) =>
    axios.post<T>(url, body).then(responseBody),
  put: <T>(url: string, body: {}) => axios.put<T>(url, body).then(responseBody),
  del: <T>(url: string) => axios.delete<T>(url).then(responseBody),
};

const Users = {
  getUsers: async () => {
    const response = await requests.get<UsersData[] | undefined>("/api/users");
    return response;
  },
  login: async (email: string, password: string) => {
    const response = await requests.post<UserLoginData>("/api/users/login", {
      email,
      password,
    });

    return response;
  },
  getUserById: (userId: string) =>
    requests.get<UsersData>(`/api/users/${userId}`),
  createUser: async (
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    isAdmin: boolean
  ) => {
    const response = await requests.post("http://localhost:5000/api/users/", {
      firstName,
      lastName,
      email,
      password,
      isAdmin,
    });
    return response;
  },
};

export { Users };

import type { CreateUserInfoObj } from "./type/user";

export function useGetGithubUserList() {
  return useHttpGet("github", "/home/category/head", {
    server: false,
  });
}

export const createUserApi = (obj: CreateUserInfoObj): any => {
  return useFetch("/api/user/create", { method: "POST", body: obj });
};

export function getCreateUserList() {
  return useFetch("/api/user/createUserList", {
    server: false,
  });
}

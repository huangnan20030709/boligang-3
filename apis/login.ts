import type { userNameAndPostbox } from "./type/login";

export const userLoginApi = (obj: userNameAndPostbox): any => {
  return useFetch("/api/user/login", { method: "POST", body: obj });
};

import { defineStore } from "pinia";
import type { CreateUserInfoObj } from "../../apis/type/user";
export default defineStore("user", {
  state: (): any => {
    return {
      userList: [],
      newUserInfo: {},
    };
  },
  actions: {
    async reqUserList(keyword: string) {
      let { data, error, execute, refresh } = await useFetch("/api/user/userList", { query: { keyword } });
      //@ts-ignore
      this.userList = [...this.userList, ...(data.value?.items || [])];
      // this.userList = data.value?.items || [];
    },
    setNewUserInfo(obj: CreateUserInfoObj) {
      this.newUserInfo = obj;
    },
  },

  getters: {
    maleList(): any {
      return this.userList.filter((item: any) => {
        return (item.id + "").length % 2 == 1;
      });
    },
    femaleList(): any {
      return this.userList.filter((item: any) => {
        return (item.id + "").length % 2 == 0;
      });
    },
  },
});

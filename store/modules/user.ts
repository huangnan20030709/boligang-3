import { defineStore } from "pinia";
export default defineStore("user", {
  state: (): any => {
    return {
      userList: [],
    };
  },
  actions: {
    async reqUserList(keyword: string) {
      let { data, error, execute, refresh } = await useFetch("/api/user/userList", { query: { keyword } });
      //@ts-ignore
      this.userList = [...this.userList, ...(data.value?.items || [])];
      // this.userList = data.value?.items || [];
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

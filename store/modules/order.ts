import { defineStore } from "pinia";
export default defineStore("order", {
  state: (): any => {
    return {
      orderList: [],
      showOrderList: [],
    };
  },
  actions: {
    setOrderList(list: any) {
      this.orderList = list;
      this.showOrderList = list;
    },
    setShowOrderList(list: any) {
      this.showOrderList = list;
    },
  },
});

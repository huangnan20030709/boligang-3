import { defineStore } from "pinia";
export default defineStore("currentTopic", {
  state: () => {
    return {
      currentTopic: "",
      topicList: ["day", "dark"],
    };
  },
  actions: {
    changeTopic(Topic: string) {
      this.currentTopic = Topic;
      window.localStorage.setItem("Topic", Topic);
      if (Topic == "dark") {
        document.body.setAttribute("arco-theme", "dark");
      } else {
        document.body.removeAttribute("arco-theme");
      }
    },
    fetchLocalStorage() {
      this.currentTopic = window.localStorage.getItem("Topic") || "day";
      this.changeTopic(this.currentTopic);
    },
  },
});

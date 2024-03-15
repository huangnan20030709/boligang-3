// import type { RouteMiddleware } from "vue-router";
export default defineNuxtRouteMiddleware(async (to: any, from: any) => {
  const user: any = useState("user");

  if (process.client) {
    if (window.localStorage.getItem("user") != null) {
      return true;
    }
  }

  if (!user?.value?.name) {
    Message.info("亲亲，请先登录后查看该页面");
    return "/login?from=" + to.fullPath;
  }
});

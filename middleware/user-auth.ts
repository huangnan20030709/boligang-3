// import type { RouteMiddleware } from "vue-router";
export default defineNuxtRouteMiddleware(async (to: any, from: any) => {
  const user: any = useState("user");

  if (!window) {
    return "/";
  }

  if (!user?.value?.name) {
    if (process.client) {
      Message.info("亲亲，请先登录后查看该页面");
    }
    return "/login?from=" + to.fullPath;
  }
});

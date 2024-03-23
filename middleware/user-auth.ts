// import type { RouteMiddleware } from "vue-router";
export default defineNuxtRouteMiddleware(async (to: any, from: any) => {
  const user: any = useState("user");
  const token = useCookie("token");

  if (!token.value) {
    if (process.client) {
      Message.error("请先登录");
    }

    return navigateTo("/login?from=" + to.fullPath);
  }

  if (!user?.value?.name) {
    if (process.client) {
      Message.info("亲亲，请先登录后查看该页面");
    }
    return "/login?from=" + to.fullPath;
  }
});

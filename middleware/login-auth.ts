// import type { RouteMiddleware } from "vue-router";
export default defineNuxtRouteMiddleware(async (to: any, from: any) => {
  const token = useCookie("token");

  if (!token.value) {
    if (process.client) {
      Message.warning({ content: "访问失败，请先登录" });
    }

    //路由切换时鉴权 返回啥，就是切换路由到哪，
    //不返回则直接切换到要去的页面
    return "/login?from=" + to.fullPath;
  }
});

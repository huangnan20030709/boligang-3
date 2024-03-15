// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from "nuxt/config";
export default defineNuxtConfig({
  ssr: false,
  css: ["~/assets/styles/base.scss"],
  build: { transpile: [/echarts/] },
  app: {
    head: {
      titleTemplate: "%s - nuxt3 + arcoDesign | 小楠",
      charset: "utf-8",
      htmlAttrs: {
        lang: "zh-CN",
      },
      meta: [
        { name: "keywords", content: "arco design,nuxt3,ssr,小楠同学,zain" },
        { name: "description", content: "基于vue3的nuxt3框架的项目" },
      ],
      link: [
        {
          rel: "icon",
          href: "https://unpkg.byted-static.com/latest/byted/arco-config/assets/favicon.ico",
        },
      ],
    },
  },
  devtools: { enabled: true },
  modules: ["@nuxtjs/i18n", "arco-design-nuxt-module", "@pinia/nuxt", "@pinia-plugin-persistedstate/nuxt", "@vueuse/nuxt", "@nuxtjs/tailwindcss"],

  i18n: {
    vueI18n: "./i18n.config.ts", // if you are using custom path, default
  },
  imports: {
    dirs: ["apis"],
  },
  ssr: true,

  routeRules: {
    "/datascreen": {},
  },
});

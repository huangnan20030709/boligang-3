<template>
  <div style="margin: 10px 20px 0px 20px">
    <a-card style="width: 100%; border-radius: 5px; margin: 0px auto" :bordered="false">
      <MyForm></MyForm>
    </a-card>
  </div>
</template>
<script setup lang="ts">
import { useRoute } from "vue-router";
import MyForm from "./components/MyForm.vue";

const route = useRoute();
//////////////////////////////////////////////////////////////////////////////////////////////////

useHead({
  title: "修改商品",
  meta: [
    { name: "keywords", content: "修改商品-arco design,nuxt3,ssr,小楠同学" },
    { name: "description", content: "修改商品-基于vue3的nuxt3框架的项目" },
  ],
});

definePageMeta({
  keepalive: true,
  middleware: ["user-auth"],
});
</script>

<style scoped></style>

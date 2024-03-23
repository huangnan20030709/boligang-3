<template>
  <div>
    <hasId v-if="queryHasId"></hasId>
    <noId v-else></noId>
  </div>
</template>
<script setup lang="ts">
import hasId from "./components/hasId.vue";
import noId from "./components/noId.vue";

const route = useRoute();
const router = useRouter();

const queryHasId = computed(() => {
  return route.query.hasOwnProperty("id");
});
//////////////////////////////////////////////////////////////////////////////////////////////////

useHead({
  title: "修改订单",
  meta: [
    { name: "keywords", content: "修改订单-arco design,nuxt3,ssr,小楠同学" },
    { name: "description", content: "修改订单-基于vue3的nuxt3框架的项目" },
  ],
});

definePageMeta({
  middleware: ["user-auth"],
});
</script>

<style scoped></style>

<template>
  <div style="margin: 10px 20px 0px 20px; text-align: left">
    <a-row class="grid-demo" :gutter="24">
      <a-col :span="6">
        <LiveChat></LiveChat>
      </a-col>

      <a-col :span="12">
        <PreViewCard></PreViewCard>
        <ControlCard></ControlCard>
      </a-col>

      <a-col :span="6" :gutter="24">
        <R1 style="margin-bottom: 10px"></R1>
        <R2 style="margin-bottom: 10px"></R2>
        <R3></R3>
      </a-col>
    </a-row>
  </div>
</template>
<script setup lang="ts">
import LiveChat from "./components/LiveChat.vue";

import PreViewCard from "./components/PreViewCard.vue";
import ControlCard from "./components/ControlCard.vue";

import R1 from "./components/R1.vue";
import R2 from "./components/R2.vue";
import R3 from "./components/R3.vue";

////////////////////////////////////////////////////////////////////////////////////////////
useHead({
  title: "直播分析",
  meta: [
    { name: "keywords", content: "直播分析-arco design,nuxt3,ssr,小楠同学" },
    { name: "description", content: "直播分析-基于vue3的nuxt3框架的项目" },
  ],
});

definePageMeta({
  middleware: ["user-auth"],
});
</script>

<style scoped></style>

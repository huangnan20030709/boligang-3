<template>
  <client-only>
    <div style="margin: 10px 20px 0px 20px; text-align: left" class="flex">
      <a-grid :cols="24" :col-gap="16" :row-gap="16" style="width: 100%">
        <a-grid-item :span="{ xs: 24, sm: 24, md: 24, lg: 18, xl: 18, xxl: 18 }">
          <DataOverview />
        </a-grid-item>

        <a-grid-item :span="{ xs: 24, sm: 24, md: 24, lg: 6, xl: 6, xxl: 6 }">
          <Today style="margin-bottom: 16px" />
          <ContentTypeDistribution />
        </a-grid-item>
      </a-grid>
    </div>

    <div class="flex justify-between" style="margin: 10px 20px 0px 20px; text-align: left">
      <centerCard1></centerCard1>
      <centerCard2></centerCard2>
      <centerCard3></centerCard3>
      <centerCard4></centerCard4>
    </div>

    <div style="margin: 10px 20px 0px 20px; text-align: left">
      <a-card style="width: 100%; border-radius: 5px; margin: 0px auto" :bordered="false">
        <h2 style="margin-top: 10px" class="text-xl font-normal">{{ $t("data.multiple.ContentPublishingSource") }}</h2>
        <div>
          <contentPublishingSourceChart></contentPublishingSourceChart>
        </div>
      </a-card>
    </div>
  </client-only>
</template>
<script setup lang="ts">
import DataOverview from "./components/DataOverview.vue";
import Today from "./components/Today.vue";
import ContentTypeDistribution from "./components/ContentTypeDistribution.vue";

import centerCard1 from "./components/centerCard1.vue";
import centerCard2 from "./components/centerCard2.vue";
import centerCard3 from "./components/centerCard3.vue";
import centerCard4 from "./components/centerCard4.vue";

import contentPublishingSourceChart from "./components/contentPublishingSourceChart.vue";

////////////////////////////////////////////////////////////////////////////////////////////
useHead({
  title: "多维分析",
  meta: [
    { name: "keywords", content: "多维分析-arco design,nuxt3,ssr,小楠同学" },
    { name: "description", content: "多维分析-基于vue3的nuxt3框架的项目" },
  ],
});

definePageMeta({
  middleware: ["user-auth"],
  ssr: false,
});
</script>

<style scoped></style>

<template>
  <a-card style="width: 100%; border-radius: 5px; margin: 0px auto" :bordered="false">
    <div class="flex items-center justify-between">
      <h2 class="text-lg font-bold">{{ $t("data.multiple.Dataoverview") }}</h2>
    </div>
    <a-space style="width: 100%; display: flex; margin-top: 20px; justify-content: space-around">
      <div v-for="item in list" :key="item.title">
        <div class="font-bold text-base" style="color: #000">{{ item.title }}</div>
        <div class="mt-2 flex items-center">
          <div
            style="
              display: inline-block;
              width: 40px;
              height: 40px;
              border-radius: 3px;
              background-color: rgb(232, 255, 251);
              text-align: center;
              line-height: 40px;
            ">
            <component :is="item.icon" />
          </div>

          <a-statistic class="ml-2 pt-2" :value="item.number" :value-from="0" animation show-group-separator />
        </div>
      </div>
    </a-space>

    <OverViewChart></OverViewChart>
  </a-card>
</template>
<script setup lang="ts">
import { IconUpload, IconThumbUpFill, IconStarFill, IconShareAlt } from "@arco-design/web-vue/es/icon";
import OverViewChart from "./OverViewChart.vue";
const { t } = useI18n();
const list = computed(() => {
  return [
    { title: t("data.multiple.uploadVolume"), number: 1902, icon: IconUpload },
    { title: t("data.multiple.ContentLikes"), number: 2445, icon: IconThumbUpFill },
    { title: t("data.multiple.collection"), number: 2034, icon: IconStarFill },
    { title: t("data.multiple.sharingVolume"), number: 275, icon: IconShareAlt },
  ];
});
</script>

<style scoped lang="scss"></style>

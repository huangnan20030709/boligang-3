<template>
  <div>
    <a-card :style="{ width: '310px', 'border-radius': '5px' }" :bordered="false">
      <div style="display: flex; color: black; font-size: 18px; justify-content: space-between">
        <span>{{ $t("home.quickOperation") }}</span>
        <a-link @click="manageCli">{{ $t("home.manage") }}</a-link>
      </div>

      <ul class="content">
        <li>
          <span class="icon"><icon-sync /></span>
          <p>{{ $t("home.ContentManagement") }}</p>
        </li>
        <li>
          <span class="icon"><icon-double-up /></span>
          <p>{{ $t("home.SeniorManagement") }}</p>
        </li>
        <li>
          <span class="icon"><icon-bar-chart /></span>
          <p>{{ $t("home.OnlinePromotion") }}</p>
        </li>

        <li>
          <span class="icon"><icon-bg-colors /></span>
          <p>{{ $t("home.contentPush") }}</p>
        </li>

        <li>
          <span class="icon"><icon-fire /></span>
          <p>{{ $t("home.ContentAnalysis") }}</p>
        </li>
      </ul>
      <a-divider />
      <div style="display: flex; color: black; font-size: 18px">{{ $t("home.recentlyVisited") }}</div>
      <ul class="content">
        <li>
          <span class="icon"><icon-align-left /></span>
          <p>{{ $t("home.ContentAnalysis") }}</p>
        </li>
        <li>
          <span class="icon"><icon-unordered-list /></span>
          <p>{{ $t("home.ContentManagement") }}</p>
        </li>
        <li>
          <span class="icon"><icon-settings /></span>
          <p>{{ $t("home.OnlinePromotion") }}</p>
        </li>
      </ul>
    </a-card>
  </div>
</template>
<script setup lang="ts">
import { Message } from "@arco-design/web-vue";
const manageCli = () => {
  Message.info({ content: "功能开发中" });
};
</script>

<style scoped lang="scss">
.content {
  display: flex;
  flex-wrap: wrap;
  li {
    width: 90px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-right: 2px;

    margin-top: 30px;
    font-size: 14px;
    .icon {
      margin-bottom: 15px;
    }
  }
  & > li:hover {
    color: rgb(22, 93, 255);
  }
}
</style>

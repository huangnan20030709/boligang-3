<template>
  <div>
    <a-card :style="{ width: '310px', 'border-radius': '5px' }" :bordered="false">
      <div style="display: flex; color: black; font-size: 18px; justify-content: space-between">
        <span>{{ $t("home.announcement") }}</span>
        <a-link @click="manageCli">{{ $t("home.viewMore") }}</a-link>
      </div>

      <ul class="content">
        <li v-for="item in tags" :key="item.text" class="line" @click="lineCli">
          <a-tag :color="item.tagColor">{{ $t(item.title) }}</a-tag>
          <p>{{ $t(item.text) }}</p>
        </li>
      </ul>
    </a-card>
  </div>
</template>
<script setup lang="ts">
import { Message, Notification } from "@arco-design/web-vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n();

const manageCli = () => {
  Message.info({ content: "功能开发中" });
};
const lineCli = () => {
  Notification.info({ title: "提示", content: "资讯页面开发中", closable: true });
};

const tags = [
  { tagColor: "lime", title: "home.announcement.huodong", text: "home.announcement.t1" },
  { tagColor: "gold", title: "home.announcement.tongzhi", text: "home.announcement.t2" },
  { tagColor: "gold", title: "home.announcement.tongzhi", text: "home.announcement.t3" },
  { tagColor: "green", title: "home.announcement.xiaoxi", text: "home.announcement.t4" },
  { tagColor: "green", title: "home.announcement.xiaoxi", text: "home.announcement.t5" },
];
</script>

<style scoped lang="scss">
.content {
  .line {
    display: flex;
    align-items: center;
    margin-top: 5px;
    font-size: 13px;
    p {
      text-align: left;
      width: 100%;
      text-wrap: nowrap;
      text-overflow: ellipsis;
      white-space-collapse: collapse;
      overflow: hidden;
      cursor: pointer;
    }
  }
}
</style>

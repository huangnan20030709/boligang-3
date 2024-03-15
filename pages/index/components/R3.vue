<template>
  <div>
    <a-card :style="{ width: '310px', 'border-radius': '5px' }" :bordered="false">
      <div style="display: flex; color: black; font-size: 18px; justify-content: space-between">
        <span>{{ $t("home.helpDocument") }}</span>
        <a-link @click="manageCli">{{ $t("home.viewMore") }}</a-link>
      </div>

      <ul class="content">
        <li class="line" v-for="item in tags" :key="item.key" @click="lineCli">
          <p>{{ $t(item.label) }}</p>
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
  Message.info({ content: "页面开发中" });
};
const lineCli = () => {
  Notification.info({ title: "提示", content: "帮助页面开发中", closable: true });
};

const tags = computed(() => {
  return [
    { label: t("home.ProductSummary"), key: 1 },
    { label: t("home.InterfaceGuide"), key: 2 },
    { label: t("home.AccessProcess"), key: 3 },
    { label: t("home.InterfaceDocument"), key: 4 },
  ];
});
</script>

<style scoped lang="scss">
.content {
  display: flex;
  flex-wrap: wrap;
  .line {
    width: 50%;
    height: 30px;
    text-align: center;
    margin-top: 20px;
    cursor: pointer;
  }
}
</style>

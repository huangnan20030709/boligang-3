<template>
  <div>
    <a-tooltip :content="$t('app.header.language')">
      <a-button class="nav-btn" type="outline" :shape="'circle'" @click="setDropDownVisible">
        <template #icon>
          <icon-language />
        </template>
      </a-button>
    </a-tooltip>

    <a-dropdown trigger="click" @select="changeLocale as any">
      <div ref="triggerBtn" class="trigger-btn"></div>
      <template #content>
        <a-doption
          v-for="item in [
            { value: 'en-US', label: 'English' },
            { value: 'zh-CN', label: '简体中文' },
          ]"
          :key="item.value"
          :value="item.value">
          <template #icon>
            <icon-check v-show="item.value === currentLocale" />
          </template>
          {{ item.label }}
        </a-doption>
      </template>
    </a-dropdown>
  </div>
</template>
<script setup lang="ts">
import useLocale from "@/hooks/locale";
import { onMounted } from "vue";

const { currentLocale, changeLocale, fetchLocale } = useLocale();

const triggerBtn = ref();
const setDropDownVisible = () => {
  const event = new MouseEvent("click", {
    view: window,
    bubbles: true,
    cancelable: true,
  });
  triggerBtn.value.dispatchEvent(event);
};

onMounted(() => {
  fetchLocale();
});
</script>

<style scoped>
.isHidden {
  visibility: hidden;
}
.demo-basic {
}
</style>

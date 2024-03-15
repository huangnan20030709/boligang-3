<template>
  <div>
    <a-card :style="{ width: '950px', 'border-radius': '5px' }" :bordered="false">
      <template #title>
        <div style="font-size: 25px; margin: 100px 0">{{ $t("home.welcome") + username }}</div>
      </template>
      <a-row style="width: 100%">
        <a-col :span="12">
          <a-space style="display: flex; align-items: center; margin-left: 43px; border-right: 1px solid #eee">
            <a-avatar :size="54" class="col-avatar" @click="test">
              <img alt="avatar" src="//p3-armor.byteimg.com/tos-cn-i-49unhts6dw/c8b36e26d2b9bb5dbf9b74dd6d7345af.svg~tplv-49unhts6dw-image.image" />
            </a-avatar>
            <a-statistic :title="$t('home.totalOnlineContent')" :value="2560" show-group-separator animation>
              <template #suffix>
                <span style="margin-left: 10px">{{ $t("home.pecs") }}</span>
              </template>
            </a-statistic>
          </a-space>
        </a-col>
        <a-col :span="12">
          <a-space style="display: flex; align-items: center; margin-left: 43px; border-right: 1px solid #eee">
            <a-avatar :size="54" class="col-avatar">
              <img alt="avatar" src="//p3-armor.byteimg.com/tos-cn-i-49unhts6dw/77d74c9a245adeae1ec7fb5d4539738d.svg~tplv-49unhts6dw-image.image" />
            </a-avatar>
            <a-statistic :title="$t('home.processContent')" :value="89" show-group-separator animation>
              <template #suffix>
                <span style="margin-left: 10px">{{ $t("home.pecs") }}</span>
              </template>
            </a-statistic></a-space
          >
        </a-col>
        <a-col :span="12" style="margin-top: 8px">
          <a-space style="display: flex; align-items: center; margin-left: 43px; border-right: 1px solid #eee">
            <a-avatar :size="54" class="col-avatar">
              <img alt="avatar" src="//p3-armor.byteimg.com/tos-cn-i-49unhts6dw/fdc66b07224cdf18843c6076c2587eb5.svg~tplv-49unhts6dw-image.image" />
            </a-avatar>
            <a-statistic :title="$t('home.newDailyComments')" :value="4506" show-group-separator :value-style="{ color: '#0fbf60' }" animation>
              <template #suffix>
                <icon-arrow-rise style="margin-left: 5px" />
              </template> </a-statistic
          ></a-space>
        </a-col>
        <a-col :span="12" style="margin-top: 8px">
          <a-space style="display: flex; align-items: center; margin-left: 43px; border-right: 1px solid #eee">
            <a-avatar :size="54" class="col-avatar">
              <img alt="avatar" src="//p3-armor.byteimg.com/tos-cn-i-49unhts6dw/288b89194e657603ff40db39e8072640.svg~tplv-49unhts6dw-image.image" />
            </a-avatar>
            <a-statistic
              :title="$t('home.newFromYesterday')"
              :value="2.87"
              :precision="2"
              show-group-separator
              :value-style="{ color: '#ee0000' }"
              animation>
              <template #suffix>
                %
                <icon-arrow-fall />
              </template> </a-statistic
          ></a-space>
        </a-col>
      </a-row>

      <a-divider />
      <ContentChart></ContentChart>
    </a-card>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import ContentChart from "./contentChart.vue";
const username = computed(() => {
  return "黄楠";
});

const test = () => {
  throw createError({ statusCode: 999, statusMessage: "test", fatal: true });
};
</script>

<style scoped lang="scss"></style>

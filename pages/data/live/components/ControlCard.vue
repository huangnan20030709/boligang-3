<template>
  <div>
    <a-card style="width: 100%; margin-top: 10px; min-height: 400px; border: none; border-radius: 5px" :border="false">
      <a-tabs default-active-key="2">
        <a-tab-pane key="1" :title="$t('data.live.liveMode')"> </a-tab-pane>
        <a-tab-pane key="2" :title="$t('data.live.onlinePopulation')"> </a-tab-pane>
      </a-tabs>

      <a-radio-group type="button">
        <a-radio value="top">{{ $t("data.live.ordinaryLiveBroadcast") }}</a-radio>
        <a-radio value="right">{{ $t("data.live.controlledliveStreaming") }}</a-radio>
        <a-radio value="bottom">{{ $t("data.live.liveVideoBroadcast") }}</a-radio>
        <a-radio value="left">{{ $t("data.live.webLaunch") }}</a-radio>
      </a-radio-group>

      <div class="flex justify-between mt-2">
        <a-button type="text">{{ $t("data.live.editingRotation") }}</a-button>
        <a-button disabled>{{ $t("data.live.startRotation") }}</a-button>
      </div>

      <myTable></myTable>
    </a-card>
  </div>
</template>
<script setup lang="ts">
import myTable from "./myTable.vue";
</script>

<style lang="scss">
.arco-card-header {
  border-bottom: none;
}

.arco-tabs-nav::before {
  height: 0.1px !important;
}
</style>

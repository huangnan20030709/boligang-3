<template>
  <div>
    <a-card style="width: 100%; height: 535px; border: none; border-radius: 5px" :border="false">
      <template #title>
        <h2 class="mt-4">{{ $t("data.live.livePreview") }}</h2>
      </template>
      <template #extra>
        <a-link class="font-bold">...</a-link>
      </template>

      <img src="/assets/images/live.jpg" mode="scaleToFill" style="border-radius: 3px" />

      <div class="flex justify-between">
        <div class="mt-5">
          <a-avatar style="cursor: pointer">
            <img
              alt="avatar"
              src="https://foruda.gitee.com/avatar/1710233832619936825/12452800_phoebe-amurensis_1710233832.png!avatar400"
              @click="cb" />
          </a-avatar>
          <span class="text-sm ml-3">{{ $t("data.live.xiaoNan'sStudio") }}</span>
        </div>

        <a-statistic class="mt-2" :title="$t('data.live.NumberOfPeople')" :value="36152" show-group-separator />
      </div>
    </a-card>
  </div>
</template>
<script setup lang="ts">
const cb = () => {
  window.open("https://gitee.com/phoebe-amurensis");
};
</script>

<style lang="scss">
.arco-card-header {
  border-bottom: none;
  justify-content: s;
}
</style>

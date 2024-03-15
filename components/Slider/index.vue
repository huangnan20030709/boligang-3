<template>
  <div class="menu-demo">
    <a-menu :showCollapseButton="false" :auto-open-selected="true" :default-selected-keys="defaultSelectedKeys" v-model:selected-keys="selectedKeys">
      <a-menu-item key="/" class="item singleMenu" @click="navigateHandler($event, '/')">
        <template #icon><icon-apps></icon-apps></template>
        {{ $t("app.slider.home") }}
      </a-menu-item>

      <a-menu-item key="/datascreen" class="item singleMenu" @click="navigateHandler($event, '/datascreen')">
        <template #icon><icon-apps></icon-apps></template>
        {{ $t("app.slider.largeScreen") }}
      </a-menu-item>

      <a-sub-menu class="item">
        <template #icon><icon-bug></icon-bug></template>
        <template #title>{{ $t("app.slider.dataInsight") }}</template>
        <a-menu-item key="/data/live" @click="navigateHandler($event, '/data/live')">{{ $t("app.slider.live") }}</a-menu-item>
        <a-menu-item key="/data/content" @click="navigateHandler($event, '/data/content')">{{ $t("app.slider.content") }}</a-menu-item>
        <a-menu-item key="/data/multiple" @click="navigateHandler($event, '/data/multiple')">{{ $t("app.slider.multiple") }}</a-menu-item>
      </a-sub-menu>

      <a-sub-menu class="item">
        <template #icon><icon-bulb></icon-bulb></template>
        <template #title>{{ $t("app.slider.orderManagement") }}</template>
        <a-menu-item key="/order/list" @click="navigateHandler($event, '/order/list')">{{ $t("app.slider.fullOrder") }}</a-menu-item>
        <a-menu-item key="/order/edit" @click="navigateHandler($event, '/order/edit')">{{ $t("app.slider.orderStatus") }}</a-menu-item>
      </a-sub-menu>

      <a-sub-menu class="item">
        <template #icon><icon-bulb></icon-bulb></template>
        <template #title>{{ $t("app.slider.goodsManagement") }}</template>
        <a-menu-item key="/spu/list" @click="navigateHandler($event, '/spu/list')">{{ $t("app.slider.availableGoods") }}</a-menu-item>
        <a-menu-item key="/spu/edit" @click="navigateHandler($event, '/spu/edit')">{{ $t("app.slider.modifyGoods") }}</a-menu-item>
        <a-menu-item key="/spu/detail/1548007" @click="Message.warning({ content: '请通过已有商品页点击跳转商品详情页' })">{{
          $t("app.slider.goodsDetail")
        }}</a-menu-item>
      </a-sub-menu>

      <a-sub-menu class="item">
        <template #icon><icon-bulb></icon-bulb></template>
        <template #title>{{ $t("app.slider.userCenter") }}</template>
        <a-menu-item key="/user/list" @click="navigateHandler($event, '/user/list')">{{ $t("app.slider.existingUsers") }}</a-menu-item>
        <a-menu-item key="/user/createuser" @click="navigateHandler($event, '/user/createuser')">{{ $t("app.slider.createUser") }}</a-menu-item>
        <a-menu-item key="/user/auth" @click="navigateHandler($event, '/user/auth')">{{ $t("app.slider.authorityManagement") }}</a-menu-item>
      </a-sub-menu>

      <!-- <a-menu-item key="/aboutus" class="item singleMenu" @click="navigateHandler($event, '/aboutus')">
        <template #icon><icon-fire></icon-fire></template>
        {{ $t("app.slider.aboutus") }}
      </a-menu-item> -->

      <a-menu-item key="/problem" class="item singleMenu" @click="navigateHandler($event, '/problem')">
        <template #icon><icon-safe></icon-safe></template>
        {{ $t("app.slider.problem") }}
      </a-menu-item>

      <a-menu-item key="/map" class="item singleMenu" @click="navigateHandler($event, '/map')">
        <template #icon><icon-fire></icon-fire></template>
        {{ $t("app.slider.map") }}
      </a-menu-item>
    </a-menu>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";
const router = useRouter();
const route = useRoute();

const navigateHandler = (event: any, path: string) => {
  event.stopPropagation();
  router.push(path);
};

const defaultSelectedKeys = [route.fullPath];
const selectedKeys = ref([route.fullPath]);

watch(
  () => route.fullPath,
  () => {
    selectedKeys.value = [route.fullPath.split("?")[0]];
  },
  { deep: true },
);
</script>

<style lang="scss">
.singleMenu {
  .arco-menu-item-inner {
    display: flex;
    justify-content: flex-start;
  }
}

.item {
  margin-top: 10px;
}
.menu-demo {
  width: 200px;
  box-sizing: border-box;
  background-color: var(--color-neutral-2);
  overflow: hidden;
}

.menu-demo .arco-menu {
  width: 200px;
  height: 100%;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.3);
}

.menu-demo .arco-menu :deep(.arco-menu-collapse-button) {
  width: 32px;
  height: 32px;
  border-radius: 50%;
}

.menu-demo .arco-menu:not(.arco-menu-collapsed) :deep(.arco-menu-collapse-button) {
  right: 0;
  bottom: 8px;
  transform: translateX(50%);
}

.menu-demo .arco-menu:not(.arco-menu-collapsed)::before {
  content: "";
  position: absolute;
  right: 0;
  bottom: 0;
  width: 48px;
  height: 48px;
  background-color: inherit;
  border-radius: 50%;
  box-shadow: -4px 0 2px var(--color-bg-2), 0 0 1px rgba(0, 0, 0, 0.3);
  transform: translateX(50%);
}

.menu-demo .arco-menu.arco-menu-collapsed {
  width: 48px;
  height: auto;
  padding-top: 24px;
  padding-bottom: 138px;
  border-radius: 22px;
}

.menu-demo .arco-menu.arco-menu-collapsed :deep(.arco-menu-collapse-button) {
  right: 8px;
  bottom: 8px;
}
</style>

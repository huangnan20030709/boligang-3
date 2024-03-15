<template>
  <div class="layout-demo">
    <a-layout>
      <a-layout-header style="height: 50px; position: fixed; top: 0; left: 0; z-index: 100; width: 100%; border-bottom: 1px solid #eee">
        <Header />
      </a-layout-header>

      <a-layout>
        <a-layout-sider style="position: fixed; top: 48px; left: 0; z-index: 99; height: 100%">
          <div class="slider">
            <Slider />
          </div>
        </a-layout-sider>

        <a-layout-content style="background-color: rgb(242, 243, 244); margin-left: 200px; margin-top: 50px">
          <!--  -->
          <a-breadcrumb style="font-size: 20px; margin: 5px 0 0px 20px; display: flex; display: flex; align-items: start; justify-content: start">
            <a-breadcrumb-item>
              <icon-home style="color: #f55; cursor: pointer" @click="$router.push('/')" />
            </a-breadcrumb-item>
            <a-breadcrumb-item v-for="route in routes" style="color: #f55">{{ route }}</a-breadcrumb-item>
          </a-breadcrumb>

          <slot />
        </a-layout-content>
      </a-layout>

      <a-layout-footer style="height: 350px; margin-left: 160px; margin-top: 20px"><Footer /></a-layout-footer>
    </a-layout>
  </div>
</template>
<script setup lang="ts">
const route = useRoute();

const routes: any = ref([]);

watch(
  () => route.path,
  () => {
    let arr = route.fullPath.slice(1).split("/");
    arr[arr.length - 1] = arr[arr.length - 1].split("?")[0];

    routes.value = arr;
  },
  { immediate: true, deep: true },
);
</script>

<style scoped>
.layout-demo :deep(.arco-layout-header),
.layout-demo :deep(.arco-layout-footer),
.layout-demo :deep(.arco-layout-sider-children),
.layout-demo :deep(.arco-layout-content) {
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  color: var(--color-white);
  font-size: 16px;
  font-stretch: condensed;
  text-align: center;
}

.layout-demo :deep(.arco-layout-header) {
  background-color: rgb(255, 255, 255);
}
.layout-demo :deep(.arco-layout-footer) {
  margin-top: 0;
  height: 64px;
  background-color: rgb(245, 246, 247);
}

.layout-demo :deep(.arco-layout-sider) {
  width: 206px;
  background-color: var(--color-primary-light-3);
}

.layout-demo :deep(.arco-layout-content) {
  background-color: rgb(var(--arcoblue-6));
  padding-bottom: 30px;
}
.slider {
  height: 100%;
  width: 100%;
  display: flex;
}
</style>

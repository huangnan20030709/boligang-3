<template>
  <client-only>
    <Transition mode="out-in">
      <Suspense>
        <template #fallback>
          <div style="height: 100%; display: flex; justify-content: center; align-items: center">
            <ASpin :size="120">
              <template #icon> <icon-sync /> </template>
            </ASpin>
          </div>
        </template>

        <Layout></Layout>
      </Suspense>
    </Transition>
  </client-only>
</template>
<script setup lang="ts">
import { defineAsyncComponent } from "vue";

const Layout = defineAsyncComponent(() => {
  return import("./components/layout.vue");
});
//////////////////////////////////////////////////////////////////////////////////////////////////

useHead({
  title: "已有用户",
  meta: [
    { name: "keywords", content: "已有用户-arco design,nuxt3,ssr,小楠同学" },
    { name: "description", content: "已有用户-基于vue3的nuxt3框架的项目" },
  ],
});

definePageMeta({
  keepalive: true,
});
</script>

<style lang="scss" scoped>
.aaaaa {
  width: 100px;
}
</style>
import type { ClientOnly } from "#build/components";

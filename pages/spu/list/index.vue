<template>
  <div style="margin: 10px 20px 0px 20px">
    <a-card style="width: 100%; border-radius: 5px; margin: 0px auto" :bordered="false">
      <div class="tabBar">
        <a-tabs size="large" @change="tabChangeHandler">
          <template #extra>
            <div style="margin-right: 20px">
              <svg
                t="1709534389413"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="1542"
                width="32"
                height="32">
                <path
                  d="M384 960c-47.104 0-85.312-36.48-85.312-81.472S336.896 797.12 384 797.12s85.312 36.48 85.312 81.408C469.312 923.52 431.104 960 384 960z m426.688 0c-47.168 0-85.376-36.48-85.376-81.472s38.208-81.408 85.376-81.408c47.104 0 85.312 36.48 85.312 81.408C896 923.52 857.792 960 810.688 960zM262.272 186.24H1024l-91.968 407.232h-577.92l13.12 58.56h554.112l-18.56 81.408H298.24l-31.552-139.968h-0.256l-59.52-265.6-41.152-182.4H0V64h234.752l27.52 122.24z m18.368 81.408L335.68 512h527.424l55.232-244.352H280.64z"
                  fill="#1296db"
                  p-id="1543"></path>
              </svg>
            </div>
          </template>

          <a-tab-pane :title="item.name" v-for="item in categoryList" :key="item.id"> </a-tab-pane>
        </a-tabs>

        <div style="margin-bottom: 40px">
          <div><h1 class="title">全部分类</h1></div>
          <a-anchor style="width: 100%" line-less boundary="center">
            <div>
              <ul style="display: flex; justify-content: flex-start">
                <li v-for="item in categoryInfo.children" :key="item.id" style="margin-left: 20px">
                  <a :href="'#' + item.id" :smooth="true" class="moveDown">
                    <img :src="item.picture" style="height: 120px; width: 120px" alt="" />
                    <p>{{ item.name }}</p>
                  </a>
                </li>
              </ul>
            </div>
          </a-anchor>
        </div>

        <section style="margin: 30px auto" v-for="item in categoryInfo.children" :key="item.id" :id="item.id">
          <a-card style="background-color: #eee">
            <div style="margin: 0 2.5% 0 0">
              <h2 style="margin: 40px 0px">{{ item.name }}</h2>
              <a-space style="width: 100%; display: flex; justify-content: center">
                <GoodsCard :goodInfo="goodInfo" v-for="goodInfo in item.goods"></GoodsCard>
              </a-space>
            </div>
          </a-card>
        </section>
        <!--  -->
      </div>
    </a-card>
  </div>
</template>
<script setup lang="ts">
import GoodsCard from "./components/GoodsCard.vue";
import useSpuStore from "@/store/modules/spu";
const spuStore = useSpuStore();

const categoryList = computed(() => {
  return spuStore.categoryList;
});

const tabChangeHandler = (id: string) => {
  spuStore.getCategoryById(id);
};

const categoryInfo = computed(() => {
  return spuStore.categoryInfo;
});

//////////////////////////////////////////////////////////////////////////////////////////////////
onMounted(() => {
  nextTick(async () => {
    await spuStore.getCategoryList();
    await spuStore.getCategoryById("1005000");
  });
});
useHead({
  title: "全部商品",
  meta: [
    { name: "keywords", content: "全部商品-arco design,nuxt3,ssr,小楠同学" },
    { name: "description", content: "全部商品-基于vue3的nuxt3框架的项目" },
  ],
});

definePageMeta({
  path: "/spu/list",
  key: "/spu/list",
  keepalive: true,
});
</script>

<style scoped lang="scss">
.moveDown {
  display: block;

  cursor: url("./img/down.png"), progress !important;
}
.allCategory {
  display: flex;
}
</style>

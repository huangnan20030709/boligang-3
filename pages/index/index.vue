<template>
  <div class="container">
    <div class="inner-box">
      <!--  -->
      <div class="left">
        <div class="top">
          <Welcome></Welcome>
        </div>

        <div class="bottom">
          <a-card :style="{ width: '465px', 'border-radius': '5px' }" :bordered="false">
            <template #title>
              <div style="display: flex; justify-content: space-between">
                {{ $t("home.onlineHotContent") }}
                <a-link>{{ $t("home.viewMore") }}</a-link>
              </div>
            </template>
            <div style="display: flex; flex-direction: column">
              <a-radio-group type="button" v-model="type">
                <a-radio value="text">{{ $t("home.text") }}</a-radio>
                <a-radio value="img">{{ $t("home.img") }}</a-radio>
                <a-radio value="video">{{ $t("home.video") }}</a-radio>
              </a-radio-group>
              <a-table :columns="columns" :data="data" :pagination="false" />
            </div>
          </a-card>
          <pie></pie>
        </div>
      </div>

      <div class="right">
        <a-space direction="vertical" fill>
          <R1></R1>
          <a-carousel
            indicator-type="slider"
            :style="{
              height: '240px',
            }"
            :default-current="2"
            @change="handleChange">
            <a-carousel-item v-for="image in images">
              <img
                :src="image"
                :style="{
                  width: '100%',
                }" />
            </a-carousel-item>
          </a-carousel>
          <R2></R2>
          <R3></R3>
        </a-space>
      </div>
      <!-- / -->
    </div>
  </div>
  <NuxtPage />
</template>
<script setup lang="ts">
import { ref, reactive } from "vue";
import { useI18n } from "vue-i18n";
import pie from "./components/pie.vue";
import Welcome from "./components/Welcome.vue";

import R1 from "./components/R1.vue";
import R2 from "./components/R2.vue";
import R3 from "./components/R3.vue";

const { t } = useI18n();

const type = ref("img");

const handleChange = () => {};
const images = ref([
  "//p3-armor.byteimg.com/tos-cn-i-49unhts6dw/5cc3cd1d994b7ef9db6a1f619a22addd.jpg~tplv-49unhts6dw-image.image",
  "//p3-armor.byteimg.com/tos-cn-i-49unhts6dw/f256cbcc287139e191fecea9d255a1f0.jpg~tplv-49unhts6dw-image.image",
  "//p3-armor.byteimg.com/tos-cn-i-49unhts6dw/b557ff0cd44146a2e471b477af2f30d0.jpg~tplv-49unhts6dw-image.image",
  "//p3-armor.byteimg.com/tos-cn-i-49unhts6dw/665106f4bbd2a2df96eaf7aec52f7bc3.jpg~tplv-49unhts6dw-image.image",
  "//p3-armor.byteimg.com/tos-cn-i-49unhts6dw/ea095a2c9c72b5d8f2f2818040db736d.jpg~tplv-49unhts6dw-image.image",
]);
const columns = ref([
  {
    title: t("home.ranking"),
    dataIndex: "key",
  },
  {
    title: t("home.contentTitle"),
    dataIndex: "salary",
  },
  {
    title: t("home.clickVolume"),
    dataIndex: "address",
  },
  {
    title: t("home.dailyIncrease"),
    dataIndex: "email",
  },
]);
const data = reactive([
  {
    key: "1",
    name: "Jane Doe",
    salary: 23000,
    address: "32  ",
    email: "jane.dom",
  },
  {
    key: "2",
    name: "Alisa Ross",
    salary: 25000,
    address: "35 n",
    email: "alisacom",
  },
  {
    key: "3",
    name: "Keandra",
    salary: 22000,
    address: "31 Paon",
    email: "kevixacom",
  },
  {
    key: "4",
    name: "Ed Hellen",
    salary: 17000,
    address: "42 don",
    email: "ed.@com",
  },
  {
    key: "5",
    name: "William Smith",
    salary: 27000,
    address: "62 don",
    email: "wile.com",
  },
]);
////////////////////////////////////////////////////////////////////////////////////////////
useHead({
  title: "首页",
  meta: [
    { name: "keywords", content: "首页-arco design,nuxt3,ssr,小楠同学" },
    { name: "description", content: "首页-基于vue3的nuxt3框架的项目" },
  ],
});
definePageMeta({ keepalive: true });
</script>

<style>
.arco-card-header {
  border-bottom: none;
  text-align: left;
}
</style>
<style scoped lang="scss">
.container {
  display: flex;
  width: 100%;
  height: 100%;
  background-color: rgb(242, 243, 244);
  .inner-box {
    margin: 10px 20px 0px 20px;
    display: flex;
    justify-content: space-between;
    .left {
      .top {
        margin-bottom: 20px;
      }
      .bottom {
        display: flex;
        justify-content: space-between;
      }
    }
    .right {
      margin-left: 20px;
      .top {
      }
      .carousel {
      }
      .ads {
      }
      .help {
      }
    }
  }
}
</style>

<template>
  <a-carousel
    :auto-play="true"
    :style="{
      width: '540px',
      height: '240px',
    }"
    :default-current="2">
    <a-carousel-item v-for="item in images">
      <div :key="item.img" class="carousel-item">
        <div class="carousel-title">{{ item.title }}</div>
        <div class="carousel-sub-title">{{ item.subtitle }}</div>
        <img class="carousel-image" :src="item.img" />
      </div>
    </a-carousel-item>
  </a-carousel>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n();

const images = ref([
  {
    title: t("login.banner.p1.title"),
    subtitle: t("login.banner.p1.subtitle"),
    img: "https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/cd7a1aaea8e1c5e3d26fe2591e561798.png~tplv-uwbnlip3yd-webp.webp",
  },
  {
    title: t("login.banner.p2.title"),
    subtitle: t("login.banner.p2.subtitle"),
    img: "https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/6480dbc69be1b5de95010289787d64f1.png~tplv-uwbnlip3yd-webp.webp",
  },
  {
    title: t("login.banner.p3.title"),
    subtitle: t("login.banner.p3.subtitle"),
    img: "https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/0265a04fddbd77a19602a15d9d55d797.png~tplv-uwbnlip3yd-webp.webp",
  },
]);
const indicatorType = "slider";
const indicatorPosition = "bottom";
</script>

<style lang="scss" scoped>
.carousel-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  .carousel-title {
    color: white;
    font-size: 20px;
    line-height: 22px;
  }
  .carousel-sub-title {
    margin-top: 12px;
    color: #777;
    font-size: 14px;
    line-height: 22px;
  }
  .carousel-image {
    margin-top: 12px;
  }
}
</style>

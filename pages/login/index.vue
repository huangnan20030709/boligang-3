<template>
  <div class="container">
    <!--  -->

    <div class="left">
      <div class="logo">
        <img alt="logo" src="//p3-armor.byteimg.com/tos-cn-i-49unhts6dw/dfdba5317c0c20ce20e64fac803d52bc.svg~tplv-49unhts6dw-image.image" />
        <div class="logo-text">Arco Design Pro</div>
      </div>

      <div class="carousel">
        <Banner></Banner>
      </div>
    </div>

    <div class="right">
      <div class="content"><Content></Content></div>
      <div class="footer"><Footer></Footer></div>
    </div>
  </div>
</template>
<script setup lang="ts">
import Footer from "./components/footer.vue";
import Content from "./components/content.vue";

import Banner from "./components/banner.vue";

definePageMeta({
  layout: "login",
  middleware(to, from) {
    const user = useUserInfo();

    if (user.value) {
      Message.info({ content: "已登录，请勿重复登录" });
      abortNavigation("已登录，请勿重复登录");
    }

    return true;
  },
});

onMounted(() => {
  const route = useRoute();
});
</script>

<style scoped lang="scss">
.container {
  display: flex;
  height: 100vh;
  .left {
    flex: 35;
    width: 550px;
    background: linear-gradient(235deg, #1d2129 0%, #00308f 100%);
    .logo {
      display: flex;
      font-size: 20px;
      align-items: center;
      position: fixed;
      top: 24px;
      left: 22px;

      .logo-text {
        color: white;
        margin-left: 7px;
      }
    }

    .carousel {
      margin-top: 235px;
    }
  }
  .right {
    flex: 65;
    display: flex;
    justify-content: center;
    align-items: center;
    .content {
      width: 340px;
    }
  }
}
</style>

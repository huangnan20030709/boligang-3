<template>
  <div class="container">
    <div class="inner">
      <img width="400" height="400" src="./assets/images/404.png" alt="" />
      <div>{{ error.statusCode }}</div>
      <div>{{ error.message }}</div>

      <a-button type="primary" @click="toHome">back to home</a-button>
    </div>
  </div>
</template>
<script setup lang="ts">
const error = useError() || {};

const toHome = () => {
  clearError({ redirect: "/" });
};
</script>

<style scoped lang="scss">
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  .inner {
    text-align: center;
    font-size: 30px;
    & > div {
      margin-bottom: 20px;
    }
  }
}
</style>

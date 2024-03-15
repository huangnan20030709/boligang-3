<template>
  <div class="header">
    <HeaderLeft class="header-left"></HeaderLeft>
    <HeaderRight class="header-right"></HeaderRight>
  </div>
</template>
<script setup lang="ts">
import HeaderLeft from "./Header-left/index.vue";
import HeaderRight from "./Header-right/index.vue";
</script>

<style scoped lang="scss">
.header {
  display: flex;
  justify-content: space-between;

  .header-right {
    margin-right: 50px;
  }
}
</style>

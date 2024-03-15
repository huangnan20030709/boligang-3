<template>
  <div class="top">
    <div class="left">
      <span class="btn1" @click="$router.push('/')">首页</span>
    </div>
    <div class="center">
      <div class="title">智慧旅游可视化大数据平台</div>
    </div>
    <div class="right">
      <span class="btn2" @click="fs">{{ isFullscreen ? "退出全屏" : "全屏" }}</span>
      <span class="time">当前日期 {{ time }}</span>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import moment from "moment";
const time = ref(moment().format("YYYY/MM/DD"));
import { useFullscreen } from "@vueuse/core";
const { toggle, isFullscreen } = useFullscreen();

const fs = () => {
  toggle();
};
</script>

<style scoped lang="scss">
.top {
  width: 100%;
  height: 40px;
  display: flex;

  .left {
    flex: 1.3;
    background: url(../images/dataScreen-header-left-bg.png) no-repeat;
    background-size: cover;

    .btn1 {
      width: 150px;
      height: 40px;
      float: right;
      background: url(../images/dataScreen-header-btn-bg-l.png);
      background-size: 100% 100%;
      text-align: center;
      line-height: 40px;
      color: aqua;
      font-size: 20px;
    }
  }
  .center {
    flex: 2;
    background-image: url(../images/dataScreen-header-center-bg.png);
    .title {
      width: 100%;
      height: 74px;
      background: url(../images//dataScreen-header-center-bg.png);
      background-size: 100% 100%;
      text-align: center;
      line-height: 74px;
      color: aqua;
      font-size: 30px;
    }
  }
  .right {
    flex: 1.3;
    background-image: url(../images/dataScreen-header-right-bg.png);
    background-size: 100% 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .btn2 {
      width: 150px;
      height: 40px;
      float: left;
      background: url(../images/dataScreen-header-btn-bg-r.png);
      background-size: 100% 100%;
      text-align: center;
      line-height: 40px;
      color: aqua;
      font-size: 20px;
    }
    .time {
      color: aqua;
      margin-right: 20px;
    }
  }
}
</style>

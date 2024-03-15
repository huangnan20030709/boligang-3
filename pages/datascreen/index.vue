<template>
  <div class="container">
    <div class="screen" ref="screen">
      <div class="top">
        <Top></Top>
      </div>
      <div class="buttom">
        <div class="left">
          <Tourist class="tourist"></Tourist>
          <Sex class="sex"></Sex>
          <Age class="age"></Age>
        </div>
        <div class="center">
          <Map class="map"></Map>
          <Line class="line"></Line>
        </div>
        <div class="right">
          <Rank class="rank"></Rank>
          <Year class="year"></Year>
          <Couter class="couter"></Couter>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from "vue";

import Top from "./components/Top.vue";
import Tourist from "./components/tourist.vue";
import Sex from "./components/Sex.vue";
import Age from "./components/Age.vue";

import Map from "./components/Map.vue";
import Line from "./components/Line.vue";

import Rank from "./components/Rank.vue";
import Year from "./components/Year.vue";
import Couter from "./components/Couter.vue";

const screen = ref();

const getScale = (w = 1920, h = 1080) => {
  const ww = window.innerWidth / w;
  const wh = window.innerHeight / h;
  return ww < wh ? ww : wh;

  //    ww 1920/1920     <script     wh  1080/1080
};
////////////////////////////////////////////////////////////////////////////////////////////
useHead({
  title: "数据大屏",
  meta: [
    { name: "keywords", content: "数据大屏-arco design,nuxt3,ssr,小楠同学" },
    { name: "description", content: "数据大屏-基于vue3的nuxt3框架的项目" },
  ],
});

definePageMeta({
  layout: "datascreen",
  middleware: ["user-auth"],
});

onMounted(() => {
  nextTick(() => {
    screen.value.style.transform = `scale(${getScale()}) translate(-50%,-50%)`;

    window.onresize = () => {
      screen.value.style.transform = `scale(${getScale()}) translate(-50%,-50%)`;
    };
  });
});
</script>

<style scoped lang="scss">
.container {
  width: 100vw;
  height: 100vh;
  background-image: url(./images/bg.png);
  background-size: cover;
  .screen {
    width: 1920px;
    height: 1080px;
    position: fixed;
    left: 50%;
    top: 50%;
    transform-origin: left top;
    transform: scale(0.9);
    .top {
      width: 100%;
      height: 40px;
    }
    .buttom {
      display: flex;
      .left {
        flex: 1;
        height: 1000px;
        display: flex;
        overflow: hidden;
        box-sizing: content-box;

        padding-bottom: 30px;
        flex-direction: column;
        .tourist {
          flex: 1.2;
        }
        .sex {
          flex: 1;
        }
        .age {
          flex: 1;
        }
      }
      .center {
        flex: 2;
        display: flex;
        flex-direction: column;
        margin-right: 40px;
        .map {
          flex: 4;
        }
        .line {
          flex: 1;
        }
      }
      .right {
        flex: 1;
        height: 1030px;
        display: flex;
        flex-direction: column;
        .rank {
          flex: 1.5;
        }
        .year {
          flex: 1;
        }
        .couter {
          flex: 1;
        }
      }
    }
  }
}
</style>

<template>
  <div class="box1">
    <div class="title">
      <p>男女比例</p>
      <img src="../images/dataScreen-title.png" alt="" />
    </div>
    <div class="sex">
      <div class="man"><img src="../images/man.png" alt="" /></div>
      <div class="woman"><img src="../images/woman.png" alt="" /></div>
    </div>
    <div class="rate">
      <p>男生58%</p>
      <p>女生42%</p>
    </div>
    <div class="charts" ref="charts"></div>
  </div>
</template>
<script setup lang="ts">
import * as echarts from "echarts";
import { ref, onMounted } from "vue";
let charts = ref();
onMounted(() => {
  let myChart = echarts.init(charts.value);
  myChart.setOption({
    title: {
      text: "男女比例",
      textStyle: {
        //主标题颜色
        color: "#bfa",
      },
      left: "40%",
    },
    xAxis: { show: false, min: 0, max: 100 },
    yAxis: { show: false, type: "category" },
    series: [
      {
        type: "bar",
        data: [58],
        barWidth: 20,
        z: 100,
        itemStyle: {
          color: "blue",
          borderRadius: 20,
        },
      },
      {
        type: "bar",
        data: [100],
        barWidth: 20,
        barGap: "-100%",
        itemStyle: {
          color: "pink",
          borderRadius: 20,
        },
      },
    ],
    gird: {
      left: 0,
      top: 0,
      right: 0,
      bottom: 0,
    },
  });
});
</script>

<style scoped lang="scss">
.box1 {
  margin-top: 20px;
  width: 100%;
  height: 100%;
  background: url(../images/dataScreen-main-cb.png) no-repeat;
  background-size: 100% 100%;
  .title {
    margin-left: 20px;
    p {
      color: white;
      font-size: 20px;
    }
  }
  .sex {
    display: flex;
    align-items: center;
    justify-content: space-around;
    .man {
      margin: 20px;
      width: 111px;
      height: 115px;
      background: url(../images/man-bg.png) no-repeat;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .woman {
      margin: 20px;
      width: 111px;
      height: 115px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: url(../images/woman-bg.png) no-repeat;
    }
  }
  .rate {
    color: white;
    font-size: 18px;
    display: flex;
    justify-content: space-around;
  }
  .charts {
    height: 100px;
  }
}
</style>

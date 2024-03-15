<template>
  <a-card style="width: 23.5%; height: 220px; border-radius: 5px" :bordered="false">
    <h2 class="text-base font-bold">{{ $t("data.multiple.UserRetentionTrend") }}</h2>
    <p class="mt-2">
      <span class="text-4xl font-bold">2,199</span>
      <span style="color: green"> 95.21% <icon-arrow-rise /></span>
    </p>
    <client-only>
      <Chart style="width: 100%; height: 130px" :option="option" />
    </client-only>
  </a-card>
</template>
<script setup lang="ts">
let option = {
  backgroundColor: "#fff",
  tooltip: {
    trigger: "axis",
  },
  grid: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  xAxis: {
    type: "category",
    boundaryGap: false, // 紧挨边缘
    axisTick: {
      // x轴上的小刻度
    },
    axisLabel: {
      // x轴样式
      margin: 20, // x轴距离文字距离
    },
    data: [
      {
        value: "o",
        textStyle: {
          fontSize: 8,
        },
      },
      {
        value: "t",
        textStyle: {
          fontSize: 8,
        },
      },
      {
        value: "t",
        textStyle: {
          fontSize: 8,
        },
      },
      {
        value: "f",
        textStyle: {
          fontSize: 8,
        },
      },
      {
        value: "f",
        textStyle: {
          fontSize: 8,
        },
      },
      {
        value: "s",
        textStyle: {
          fontSize: 8,
        },
      },
    ],
  },
  yAxis: {
    show: false,
  },

  series: [
    {
      data: [0, 7, 10, 3, 12, 5],
      type: "line",
      smooth: false, // 平滑过渡
      symbol: "none", // 拐点设置为实心圆点 默认是空心圆点 ECharts 提供的标记类型包括 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow', 'none' 可以通过 'image://url' 设置为图片，其中 URL 为图片的链接
      // symbolSize: 8, // 拐点圆的大小
      lineStyle: {
        //线条样式
        width: 2,
        color: "#50e3c2",
        type: "solid", //虚线  dotted 点线 solid 实线 dashed 虚线
      },
      //填充风格
      areaStyle: {
        color: "rgba(80, 227, 194, 0.3)",
      },
    },
  ],
};
</script>

<style scoped lang="scss"></style>

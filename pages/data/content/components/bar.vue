<template>
  <div style="width: 100%; height: 500px" ref="charts">
    <Chart :option="chartOption"></Chart>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from "vue";
const { t } = useI18n();
import useChartOption from "@/hooks/chart-option";
const { chartOption } = useChartOption((isDark) => {
  return {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
      },
      //formatter: '{a}<br />{c}'
    },

    color: ["#18f0fd", "#00c4fd", "#3f90ff"],
    legend: {
      show: true,
      top: "2%",
      icon: "rect",
      itemWidth: 15, // 图例标记的图形宽度。
      itemHeight: 15, //  图例标记的图形高度。
      textStyle: {
        color: "#000",
        fontSize: 14,
        padding: [0, 8, 0, 8],
      },
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: [
      {
        type: "category",
        axisLine: {
          //坐标轴轴线相关设置。数学上的x轴
          show: true,
          lineStyle: {
            color: "rgb(41,188,245)",
          },
        },
        axisLabel: {
          //坐标轴刻度标签的相关设置
          textStyle: {
            color: "#000",
            fontSize: 10,
          },
        },
        splitLine: {
          show: false,
          lineStyle: {
            color: "#233653",
          },
        },
        axisTick: {
          show: false,
        },
        data: ["2023年8月", "2023年9月", "2023年10月", "2023年11月", "2023年12月", "2024年1月", "2024年2月", "2024年3月", "2024年4月", "2024年5月"],
      },
    ],
    yAxis: [
      {
        name: t("data.content.quantity"),
        nameTextStyle: {
          color: "#000",
          fontSize: 12,
          padding: [0, 60, 0, 0],
        },
        // minInterval: 1,
        type: "value",
        splitLine: {
          show: true,
          lineStyle: {
            color: "#1160a0",
            type: "dashed",
          },
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: "#008de7",
          },
        },
        axisLabel: {
          show: true,
          textStyle: {
            color: "#000",
            fontSize: 14,
          },
        },
        axisTick: {
          show: false,
        },
      },
    ],
    series: [
      {
        name: t("data.content.plainText"),
        type: "bar",
        stack: "搜索引擎",
        barWidth: 40,
        label: {
          show: false,
        },
        data: [701, 734, 1090, 1130, 620, 732, 701, 734, 1090, 1130, 1120],
      },
      {
        name: t("data.content.graphicClass"),
        type: "bar",
        label: {
          show: false,
        },
        stack: "搜索引擎",
        data: [101, 134, 290, 230, 120, 132, 101, 134, 290, 230, 220],
      },
      {
        name: t("data.content.video"),
        type: "bar",

        label: {
          show: false,
        },
        stack: "搜索引擎",
        data: [101, 134, 290, 230, 120, 132, 101, 134, 290, 230, 220],
      },
    ],
  };
});

//引入echarts
</script>

<style scoped lang="scss"></style>

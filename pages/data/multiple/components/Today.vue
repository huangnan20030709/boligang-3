<template>
  <a-card style="width: 100%; border-radius: 5px; margin: 0px auto" :bordered="false">
    <div class="flex items-center justify-between">
      <h2 class="text-lg" style="color: #000">{{ $t("data.multiple.TodaysReviewStatistics") }}</h2>
    </div>
    <div style="width: 100%; height: 200px">
      <client-only>
        <Chart :option="option"></Chart>
      </client-only>
    </div>
  </a-card>
</template>
<script setup lang="ts">
import * as echarts from "echarts";
const { t } = useI18n();
const { option } = useOption(() => {
  return {
    backgroundColor: "#fff",
    grid: {
      top: 0,
      left: 0,
      right: 45,
      bottom: 0,
      containLabel: true,
    },
    xAxis: {
      type: "value",
      show: false,
      axisLine: {
        show: true,
        lineStyle: {
          color: "rgba(55, 55, 55, 1)",
        },
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        fontSize: 14,
        color: "rgba(211, 232, 255, 1)",
        formatter: function (param) {
          return param + "%";
        },
      },
      min: 0,
      max: 130,
      splitLine: {
        show: false,
      },
    },
    yAxis: {
      show: true,
      type: "category",
      axisLine: {
        show: false,
        lineStyle: {
          color: "rgba(55, 55, 55, 1)",
        },
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        fontSize: 14,
        color: "rgba(2, 2, 2, 1)",
      },
      data: [t("data.multiple.ContentLikes"), t("data.multiple.collection"), t("data.multiple.sharingVolume")],
    },
    series: [
      {
        type: "bar",
        barGap: "-65%",
        label: {
          normal: {
            distance: 20,
            show: true,
            position: "right",
            color: "rgba(22, 6, 185, 1)",
            fontSize: 14,
            formatter: function (param) {
              return [28, 42, 119][param.dataIndex];
            },
          },
        },
        barWidth: 12,
        itemStyle: {
          normal: {
            color: "RGBA(3, 43, 115, 1)",
          },
        },
        z: 1,
        data: [130, 130, 130, 130, 130],
      },
      {
        type: "bar",
        barGap: "-100%",
        barWidth: 12,
        itemStyle: {
          normal: {
            show: true,
            color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
              {
                offset: 0,
                color: "rgba(102, 72, 255, 1)",
              },
              {
                offset: 1,
                color: "rgba(22, 206, 185, 1)",
              },
            ]),
          },
        },
        max: 1,
        labelLine: {
          show: true,
        },
        z: 2,
        data: [28, 42, 119],
      },
    ],
  };
});
</script>

<style scoped lang="scss"></style>

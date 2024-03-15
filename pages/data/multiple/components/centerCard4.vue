<template>
  <a-card style="width: 23.5%; height: 220px; border-radius: 5px" :bordered="false">
    <h2 class="text-base font-bold">{{ $t("data.multiple.ContentConsumption") }}</h2>
    <p class="mt-2">
      <span class="text-4xl font-bold">2,199</span>
      <span style="color: red"> 95.21% <icon-arrow-fall /></span>
    </p>
    <client-only>
      <Chart style="width: 100%; height: 130px" :option="option" />
    </client-only>

    <client-only> </client-only>
  </a-card>
</template>

<script setup lang="ts">
import * as echarts from "echarts";
const { t } = useI18n();

const { option } = useOption(() => {
  return {
    grid: {
      top: "15%",
      left: "1%",
      right: "7%",
      bottom: "0%",
      containLabel: true,
    },
    legend: {
      top: "0%",
      right: "20%",
      itemGap: 50,
      data: [t("data.muitiple.yield")],
      textStyle: {
        color: "#27ffb3",
        borderColor: "#fff",
      },
    },
    xAxis: [
      {
        name: "年",
        nameGap: 5,
        type: "category",
        axisLine: {
          //坐标轴轴线相关设置。数学上的x轴
          show: true,
          lineStyle: {
            color: "#999",
          },
        },
        axisLabel: {
          //坐标轴刻度标签的相关设置
          color: "#999",
        },
        axisTick: {
          show: false,
        },
        data: ["2017", "2018", "2019", "2020", "2021", "2022", "2023"],
      },
    ],
    yAxis: [
      {
        type: "value",
        min: 0,
        // max: 140,
        splitNumber: 7,
        splitLine: {
          show: true,
          lineStyle: {
            color: "#0a3256",
          },
        },
        axisLine: {
          show: false,
        },
        axisLabel: {
          // margin: 20,
          color: "#999",
        },
        axisTick: {
          show: false,
        },
      },
    ],
    tooltip: {
      trigger: "axis",
    },
    series: [
      {
        name: t("data.multiple.yield"),
        type: "line",
        showAllSymbol: true,
        symbol: "emptyCircle",
        // symbolSize: 6,
        lineStyle: {
          color: "#28ffb3", // 线条颜色
          borderColor: "#f0f",
        },
        label: {
          show: false,
          position: "top",
          color: "#fff",
        },
        itemStyle: {
          color: "#28ffb3",
          lineStyle: {
            width: 1,
            type: "solid", //'dotted'虚线 'solid'实线
          },
        },
        areaStyle: {
          //区域填充样式
          //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
          color: new echarts.graphic.LinearGradient(
            0,
            0,
            0,
            1,
            [
              {
                offset: 0,
                color: "rgba(0,154,120,1)",
              },
              {
                offset: 1,
                color: "rgba(0,0,0, 0)",
              },
            ],
            false,
          ),
          shadowColor: "rgba(53,142,215, 0.9)", //阴影颜色
          shadowBlur: 20, //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
        },
        data: [393, 438, 485, 631, 689, 824, 987],
      },
      {
        name: t("data.multiple.OutputValue"),

        type: "bar",
        barWidth: 15,
        // tooltip: {
        //   show: false
        // },
        label: {
          show: false,
          position: "top",
          color: "#fff",
        },
        itemStyle: {
          color: "#1cfffb",
          lineStyle: {
            width: 1,
            type: "solid", //'dotted'虚线 'solid'实线
          },
          //  barBorderRadius: [30, 30, 0, 0],
        },
        data: [393, 438, 485, 631, 689, 824, 987],
      },
    ],
  };
});
</script>

<style scoped lang="scss"></style>

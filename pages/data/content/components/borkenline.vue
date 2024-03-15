<template>
  <div>
    <Chart style="width: 100%; height: 370px" :option="chartOption" />
  </div>
</template>
<script setup lang="ts">
const { t } = useI18n();
import useChartOption from "@/hooks/chart-option";

const xAxis = ["0:00", "2:00", "4:00", "6:00", "8:00", "10:00", "12:00", "14:00", "16:00", "18:00", "20:00", "22:00"];
const textChartsData = [75, 34, 56, 87, 85, 44, 73, 77, 49, 78, 81, 80];
const imgChartsData = [35, 53, 80, 71, 81, 54, 46, 55, 32, 80, 70, 35];
const videoChartsData = [65, 84, 45, 69, 58, 82, 52, 48, 53, 59, 49, 53];

const tooltipItemsHtmlString = (items: ToolTipFormatterParams[]) => {
  return items
    .map(
      (el) => `<div class="content-panel">
        <p>
          <span style="background-color: ${el.color}" class="tooltip-item-icon"></span>
          <span>${el.seriesName}</span>
        </p>
        <span class="tooltip-value">
        ${el.value}%
        </span>
      </div>`,
    )
    .join("");
};

const { chartOption } = useChartOption((isDark) => {
  return {
    grid: {
      left: "40",
      right: 0,
      top: "20",
      bottom: "100",
    },
    legend: {
      bottom: 0,
      icon: "circle",
      textStyle: {
        color: "#4E5969",
      },
    },
    xAxis: {
      type: "category",
      data: xAxis,
      boundaryGap: false,
      axisLine: {
        lineStyle: {
          color: isDark ? "#3f3f3f" : "#A9AEB8",
        },
      },
      axisTick: {
        show: true,
        alignWithLabel: true,
        lineStyle: {
          color: "#86909C",
        },
        interval(idx: number) {
          if (idx === 0) return false;
          if (idx === xAxis.length - 1) return false;
          return true;
        },
      },
      axisLabel: {
        color: "#86909C",
        formatter(value: number, idx: number) {
          if (idx === 0) return "";
          if (idx === xAxis.length - 1) return "";
          return `${value}`;
        },
      },
    },
    yAxis: {
      type: "value",
      axisLabel: {
        color: "#86909C",
        formatter: "{value}%",
      },
      splitLine: {
        lineStyle: {
          color: isDark ? "#3F3F3F" : "#E5E6EB",
        },
      },
    },
    tooltip: {
      show: true,
      trigger: "axis",
      formatter(params) {
        const [firstElement] = params as ToolTipFormatterParams[];
        return `<div>
            <p class="tooltip-title">${firstElement.axisValueLabel}</p>
            ${tooltipItemsHtmlString(params as ToolTipFormatterParams[])}
          </div>`;
      },
      className: "echarts-tooltip-diy",
    },
    series: [
      {
        name: t("data.content.plainText"),
        data: textChartsData,
        type: "line",
        smooth: true,
        showSymbol: false,
        color: isDark ? "#3D72F6" : "#246EFF",
        symbol: "circle",
        symbolSize: 10,
        emphasis: {
          focus: "series",
          itemStyle: {
            borderWidth: 2,
            borderColor: "#E0E3FF",
          },
        },
      },
      {
        name: t("data.content.graphicClass"),
        data: imgChartsData,
        type: "line",
        smooth: true,
        showSymbol: false,
        color: isDark ? "#A079DC" : "#00B2FF",
        symbol: "circle",
        symbolSize: 10,
        emphasis: {
          focus: "series",
          itemStyle: {
            borderWidth: 2,
            borderColor: "#E2F2FF",
          },
        },
      },
      {
        name: t("data.content.video"),
        data: videoChartsData,
        type: "line",
        smooth: true,
        showSymbol: false,
        color: isDark ? "#6CAAF5" : "#81E2FF",
        symbol: "circle",
        symbolSize: 10,
        emphasis: {
          focus: "series",
          itemStyle: {
            borderWidth: 2,
            borderColor: "#D9F6FF",
          },
        },
      },
    ],
    dataZoom: [
      {
        bottom: 40,
        type: "slider",
        left: 40,
        right: 14,
        height: 14,
        borderColor: "transparent",
        handleIcon: "image://http://p3-armor.byteimg.com/tos-cn-i-49unhts6dw/1ee5a8c6142b2bcf47d2a9f084096447.svg~tplv-49unhts6dw-image.image",
        handleSize: "40",
        handleStyle: {
          shadowColor: "rgba(0, 0, 0, 0.2)",
          shadowBlur: 4,
        },
        brushSelect: false,
        backgroundColor: isDark ? "#313132" : "#F2F3F5",
      },
    ],
  };
});
</script>

<style scoped lang="scss"></style>

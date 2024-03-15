<template>
  <client-only>
    <Chart style="width: 100%; height: 300px" :option="chartOption" />
  </client-only>
</template>

<script lang="ts" setup>
const { t } = useI18n();
import useChartOption from "@/hooks/chart-option";

const { chartOption } = useChartOption((isDark) => {
  const graphicElementStyle = {
    textAlign: "center",
    fill: isDark ? "rgba(255,255,255,0.7)" : "#4E5969",
    fontSize: 14,
    lineWidth: 10,
    fontWeight: "bold",
  };
  return {
    legend: {
      left: "center",
      data: [
        t("data.multiple.original"),
        t("data.multiple.abroad"),
        t("data.multiple.reship"),
        t("data.multiple.IndustryReport"),
        t("data.multiple.other"),
      ],
      bottom: 0,
      icon: "circle",
      itemWidth: 8,
      textStyle: {
        color: isDark ? "rgba(255,255,255,0.7)" : "#4E5969",
      },
      itemStyle: {
        borderWidth: 0,
      },
    },
    tooltip: {
      show: true,
      trigger: "item",
    },
    graphic: {
      elements: [
        {
          type: "text",
          left: "9.6%",
          top: "center",
          style: {
            text: t("data.multiple.PlainText"),
            ...graphicElementStyle,
          },
        },
        {
          type: "text",
          left: "center",
          top: "center",
          style: {
            text: t("data.multiple.video"),
            ...graphicElementStyle,
          },
        },
        {
          type: "text",
          left: "86.6%",
          top: "center",
          style: {
            text: t("data.multiple.GraphicClass"),
            ...graphicElementStyle,
          },
        },
      ],
    },
    series: [
      {
        type: "pie",
        radius: ["50%", "70%"],
        center: ["11%", "50%"],
        label: {
          formatter: "{d}% ",
          color: isDark ? "rgba(255, 255, 255, 0.7)" : "#4E5969",
        },
        itemStyle: {
          borderColor: isDark ? "#000" : "#fff",
          borderWidth: 1,
        },
        data: [
          {
            value: [224056],
            name: t("data.multiple.original"),
            itemStyle: {
              color: "#249EFF",
            },
          },
          {
            value: [134271],
            name: t("data.multiple.abroad"),
            itemStyle: {
              color: "#846BCE",
            },
          },
          {
            value: [345694],
            name: t("data.multiple.reship"),
            itemStyle: {
              color: "#21CCFF",
            },
          },
          {
            value: [540694],
            name: t("data.multiple.IndustryReport"),
            itemStyle: {
              color: "#0E42D2",
            },
          },
          {
            value: [330541],
            name: t("data.multiple.other"),
            itemStyle: {
              color: "#86DF6C",
            },
          },
        ],
      },
      {
        type: "pie",
        radius: ["50%", "70%"],
        center: ["50%", "50%"],
        label: {
          formatter: "{d}% ",
          color: isDark ? "rgba(255, 255, 255, 0.7)" : "#4E5969",
        },
        itemStyle: {
          borderColor: isDark ? "#000" : "#fff",
          borderWidth: 1,
        },
        data: [
          {
            value: [7051573],
            name: t("data.multiple.original"),
            itemStyle: {
              color: "#249EFF",
            },
          },
          {
            value: [755610],
            name: t("data.multiple.abroad"),
            itemStyle: {
              color: "#846BCE",
            },
          },
          {
            value: [543514],
            name: t("data.multiple.reship"),
            itemStyle: {
              color: "#21CCFF",
            },
          },
          {
            value: [796735],
            name: t("data.multiple.IndustryReport"),
            itemStyle: {
              color: "#0E42D2",
            },
          },
          {
            value: [735795],
            name: t("data.multiple.other"),
            itemStyle: {
              color: "#86DF6C",
            },
          },
        ],
      },
      {
        type: "pie",
        radius: ["50%", "70%"],
        center: ["88%", "50%"],
        label: {
          formatter: "{d}% ",
          color: isDark ? "rgba(255, 255, 255, 0.7)" : "#4E5969",
        },
        itemStyle: {
          borderColor: isDark ? "#000" : "#fff",
          borderWidth: 1,
        },
        data: [
          {
            value: [1245006],
            name: t("data.multiple.original"),
            itemStyle: {
              color: "#249EFF",
            },
          },
          {
            value: [6654052],
            name: t("data.multiple.abroad"),
            itemStyle: {
              color: "#846BCE",
            },
          },
          {
            value: [5446807],
            name: t("data.multiple.reship"),
            itemStyle: {
              color: "#21CCFF",
            },
          },
          {
            value: [22035312],
            name: t("data.multiple.IndustryReport"),
            itemStyle: {
              color: "#0E42D2",
            },
          },
          {
            value: [4456294],
            name: t("data.multiple.other"),
            itemStyle: {
              color: "#86DF6C",
            },
          },
        ],
      },
    ],
  };
});
</script>

<style scoped></style>

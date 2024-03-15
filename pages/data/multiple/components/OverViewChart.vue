<template>
  <div style="width: 100%; height: 380px; margin-top: 20px">
    <client-only>
      <Chart :option="option"></Chart>
    </client-only>
  </div>
</template>
<script setup lang="ts">
import * as echarts from "echarts";
const { t } = useI18n();
const chart = ref();
const names = computed(() => {
  return [t("data.multiple.production"), t("data.multiple.TransferVolume"), t("data.multiple.deletions"), t("data.multiple.Likes")];
});

var charts = {
  unit: "单位：个",
  names: names.value,
  lineX: [" 0时", " 2时", " 4时", " 6时", " 8时", " 10时", " 12时", " 14时", " 16时", " 18时", " 20时", " 22时"],
  value: [
    [51, 52, 55, 60, 66, 60, 55, 150, 48, 47, 50, 88],
    [45, 49, 44, 48, 50, 146, 41, 48, 55, 52, 55, 12],
    [33, 32, 80, 34, 34, 33, 36, 31, 36, 33, 33, 33],
    [24, 22, 17, 91, 22, 19, 27, 20, 25, 22, 23, 2],
  ],
};
var color = ["rgba(41, 197, 224", "rgba(28, 122, 194", "rgba(214, 151, 91", "rgba(0, 246, 3"];
var lineY = [];

for (var i = 0; i < names.value.length; i++) {
  var x = i;
  if (x > color.length - 1) {
    x = color.length - 1;
  }
  var data = {
    name: names.value[i],
    type: "line",
    //  stack: '总量',
    color: color[x] + ")",
    smooth: true,
    areaStyle: {
      normal: {
        color: new echarts.graphic.LinearGradient(
          0,
          0,
          0,
          1,
          [
            {
              offset: 0,
              color: color[x] + ", 0.3)",
            },
            {
              offset: 0.8,
              color: color[x] + ", 0)",
            },
          ],
          false,
        ),
        shadowColor: "rgba(0, 0, 0, 0.1)",
        shadowBlur: 10,
      },
    },
    symbol: "circle",
    symbolSize: 5,
    data: charts.value[x],
    // 添加 lineStyle 属性
    lineStyle: {
      width: 1, // 设置线的粗细
    },
  };
  lineY.push(data);
}

let option = {
  backgroundColor: "rgb(183, 183, 183,0)",
  tooltip: {
    trigger: "axis",
  },
  legend: {
    data: names.value,
    textStyle: {
      fontSize: 10,
      fontWeight: "200",
      color: "rgb(183, 183, 183,0.6)",
    },
    //right: 'center',
    type: "scroll",
    // 设置为 single
    align: "left",
    itemWidth: 15,
    itemHeight: 10,
  },
  grid: {
    top: "18%",
    left: "4%",
    right: "4%",
    bottom: "12%",
    containLabel: true,
  },
  xAxis: {
    type: "category",
    boundaryGap: false,
    data: charts.lineX,
    splitLine: {
      lineStyle: {
        color: "rgb(183, 183, 183)",
      },
    },
    axisLabel: {
      textStyle: {
        color: "rgba(183, 183, 183,0.8)",
      },
      formatter: function (params) {
        return params.split(" ")[0] + "\n" + params.split(" ")[1];
      },
    },
  },
  yAxis: {
    name: charts.unit,
    type: "value",
    axisLabel: {
      formatter: "{value}",
      textStyle: {
        color: "rgb(183, 183, 183,0.6)",
      },
    },
    splitLine: {
      lineStyle: {
        color: "rgba(183, 183, 183,0.3)",
        type: "dashed",
      },
    },
    axisLine: {
      lineStyle: {
        color: "rgba(183, 183, 183,0.3)",
      },
    },
  },
  series: lineY,
};

nextTick(() => {
  let myChart = 1;
});
</script>

<style scoped lang="scss"></style>

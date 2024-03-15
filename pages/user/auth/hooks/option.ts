import { xData, yData } from "./data";
export default function () {
  let option = {
    backgroundColor: "#00266b",
    tooltip: {
      show: true,
      trigger: "axis",
      backgroundColor: "rgba(17,95,182,0.5)", //设置背景颜色
      textStyle: {
        color: "#fff",
      },
      formatter: "{b}号：{c}人访问",
    },
    grid: {
      right: "4%",
      top: "8%",
      left: "2%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: {
      type: "category",
      boundaryGap: true,
      data: xData,
      axisLabel: {
        interval: 0,
        textStyle: {
          color: "rgba(255, 255, 255, 0.80)",
          fontSize: 16,
        },
      },
      axisTick: {
        //坐标轴刻度相关设置。
        show: false,
      },
      axisLine: {
        //坐标轴轴线相关设置
        lineStyle: {
          color: "#fff",
        },
      },
      splitLine: {
        //坐标轴在 grid 区域中的分隔线。
        show: false,
      },
    },
    yAxis: [
      {
        type: "value",
        splitNumber: 5,
        axisLabel: {
          show: true,
          textStyle: {
            color: "rgba(255, 255, 255, 0.80)",
            fontSize: 16,
          },
        },
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: "rgba(255, 255, 255, 0.60)",
            type: "dashed",
          },
        },
      },
    ],
    series: [
      {
        name: "从业人员",
        type: "pictorialBar",
        stack: "数量",
        label: {
          normal: {
            show: true,
            position: "top",
            textStyle: {
              color: "#FFFFFF",
              fontSize: 16,
            },
          },
        },
        itemStyle: {
          normal: {
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color: "#00C2FF", // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: "rgba(0, 194, 255,0)", // 100% 处的颜色
                },
              ],
              globalCoord: false, // 缺省为 false
            },
          },
        },
        symbol: "path://M48 0 L49 17 C52 72 68 125 96 173 H0 C25 125 41 73 46 19 L48 0Z",
        data: yData,
      },
    ],
  };

  const changeRangeValue = (val: string, start: number) => {
    if (val == "passMonth") {
      option.xAxis.data = xData;
      option.series.data = yData;
    } else if (val == "passWeek") {
      option.xAxis.data = xData.slice(start - 7, start);
      option.series.data = yData.slice(start - 7, start);
    } else if (val == "passDay") {
      option.xAxis.data = ["0时", "6时", "12时", "18时", "24时"];
      option.series.data = [100, 1000, 100, 400, 89];
    }
  };

  return {
    option,
    changeRangeValue,
  };
}

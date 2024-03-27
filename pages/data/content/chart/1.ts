const { option } = useOption((isdark) => {
  return {
    //你的代码

    color: ["#165DFF"],
    tooltip: {
      show: false,
      trigger: "axis",
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
      },
    },
    grid: {
      left: "0%",
      bottom: "0%",
      containLabel: true,
    },
    xAxis: [
      {
        show: false,
        type: "category",
      },
    ],
    yAxis: [
      {
        type: "value",
        show: false,
        //y右侧文字
        axisLabel: {
          color: "rgba(230, 247, 255, 0.50)",
          fontSize: 16,
        },
        // y轴的分割线
        splitLine: {
          show: true,
          lineStyle: {
            type: "dashed",
            color: "rgba(230, 247, 255, 0.20)",
          },
        },
      },
    ],
    series: [
      {
        name: "",
        type: "line",
        smooth: true,
        symbol: "none", // 不显示连接点
        tooltip: {
          trigger: "axis",
        },
        lineStyle: {
          width: 2,
          shadowColor: "#165DFF",
          shadowBlur: 20,
        },
        areaStyle: {
          opacity: 0.8,
          color: {
            y: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: "rgba(22, 93, 255, 0.5)",
              },
              {
                offset: 0.3,
                color: "rgba(22, 93, 255, 0.2)",
              },
              {
                offset: 1,
                color: "rgba(22, 93, 255, 0)",
              },
            ],
          },
        },
        data: [140, 232, 101, 264, 90, 340, 250, 232, 101, 264, 90, 340, 264, 90, 340, 250, 232],
      },
    ],
  };
});

<template>
  <div>
    <a-card
      :bordered="false"
      class="general-card"
      :header-style="{ paddingBottom: 0 }"
      :body-style="{
        paddingTop: '20px',
      }"
      :title="$t('home.contentData')">
      <template #extra>
        <a-link>{{ $t("home.viewMore") }}</a-link>
      </template>
    </a-card>
    <div class="contentDataChart" id="contentDataChart"></div>
  </div>
</template>
<script setup lang="ts">
import { ref, nextTick } from "vue";

import * as echarts from "echarts";
onMounted(() => {
  nextTick(() => {
    var myChart = echarts.init(document.getElementById("contentDataChart"));
    var option = {
      tooltip: {
        trigger: "axis",
      },
      xAxis: {
        type: "category",
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: "line",
          smooth: true,
        },
      ],
    };

    option && myChart.setOption(option);
  });
});
</script>

<style scoped lang="scss">
.contentDataChart {
  height: 252px;
}
</style>

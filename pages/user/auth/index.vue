<template>
  <div style="margin: 10px 20px 0px 20px">
    <CardList></CardList>

    <a-card style="width: 100%; border-radius: 5px; margin: 30px auto" :bordered="false">
      <div class="container">
        <div class="title">
          <div style="margin-left: 20px; font-size: 20px"><span>近期数据</span></div>
          <div style="margin-right: 20px" class="right">
            <a-Select placeholder="指定时间段" v-model="selectedValue" @change="changeRange" style="width: 150px">
              <a-option value="passDay">今天内</a-option>
              <a-option value="passWeek">过去一周内</a-option>
              <a-option value="passMonth">过去30天内</a-option>
            </a-Select>

            <a-range-picker
              style="width: 250px; margin: 0 10px; background-color: rgb(55, 180, 140)"
              format="YYYY-MM-DD"
              v-model="selectedRange"
              :disabledDate="(current) => dayjs(current).isAfter(dayjs())"
              :disabled="[false, true]"
              @change="rangePickerSelect"
              :day-start-of-week="1" />

            <a-button @click="viewRange"><icon-download></icon-download> 导出数据 </a-button>
          </div>
        </div>

        <div id="userAuthChart" style="width: 84%; height: 500px; margin-top: 20px; margin-left: 1%"></div>
      </div>
    </a-card>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick } from "vue";
import CardList from "./components/CardList.vue";
import getDayStr from "./hooks/getDayStr.ts";
import dayjs from "dayjs";
import useOption from "./hooks/option";
const { option, changeRangeValue } = useOption();

import * as echarts from "echarts";
var myChart;

const selectedValue = ref("");
const selectedRange = ref([getDayStr(), getDayStr()]);

const changeRange = (val: string) => {
  selectedValue.value = val;

  myChart.clear();
  changeRangeValue(val, 18);

  myChart.setOption(option);

  if (val == "passDay") {
    selectedRange.value = [getDayStr(), getDayStr()];
  } else if (val == "passWeek") {
    selectedRange.value = [getDayStr(7 * 24 * 60 * 60 * 1000), getDayStr()];
  } else {
    selectedRange.value = [getDayStr(30 * 24 * 60 * 60 * 1000), getDayStr()];
  }
};

const rangePickerSelect = () => {
  selectedValue.value = "";
};

const viewRange = () => {
  Message.info({ content: selectedValue.value || "-" });
  Message.info({ content: selectedRange.value.toString() || "-" });
};

const resizeHandler = () => {
  myChart.dispose();
  changeRangeValue(selectedValue.value, 18);

  var chartDom = document.getElementById("userAuthChart");
  myChart = echarts.init(chartDom);
  myChart.setOption(option);
};

onMounted(() => {
  var chartDom = document.getElementById("userAuthChart");
  myChart = echarts.init(chartDom);
  myChart.setOption(option);

  window.addEventListener("resize", resizeHandler);
});

onBeforeMount(() => {
  window.removeEventListener("resize", resizeHandler);
});
//////////////////////////////////////////////////////////////////////////////////////////////////
useHead({
  title: "权限管理",
  meta: [
    { name: "keywords", content: "权限管理-arco design,nuxt3,ssr,小楠同学" },
    { name: "description", content: "权限管理-基于vue3的nuxt3框架的项目" },
  ],
});

definePageMeta({
  keepalive: true,
  middleware: ["user-auth"],
});
</script>

<style scoped lang="scss">
.title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  .right {
    display: flex;
    align-items: center;
  }
}
</style>

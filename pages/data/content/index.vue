<template>

  <div style="margin: 10px 20px 0px 20px; text-align: left">
    <a-card style="width: 100%; border-radius: 5px; margin: 0px auto" :bordered="false">
      <h2>{{ $t("data.content.publicOpinionAnalysis") }}</h2>
      <div class="flex flex-wrap justify-around mt-5">
        <Card v-for="info in CardList" :info="info" :option="option"></Card>
      </div>
    </a-card>
  </div>

  <div style="margin: 10px 20px 0px 20px; text-align: left" class="flex">
    <div class="mr-3" style="width: 70%">
      <a-card style="width: 100%; border-radius: 5px; margin: 0px auto" :bordered="false">
        <div class="flex items-center justify-between">
          <h2 class="text-lg font-bold">{{ $t("data.content.contentPublishingRatio") }}</h2>
          <a-link> {{ $t("data.content.seeMore") }}</a-link>
        </div>
        <bar></bar>
      </a-card>
    </div>

    <div class=" " style="width: 30%">
      <a-card style="width: 100%; border-radius: 5px; margin: 0px auto" :bordered="false">
        <div class="flex items-center justify-between">
          <h2 class="text-base">{{ $t("data.content.popularAuthorList") }}</h2>
          <a-link> {{ $t("data.content.seeMore") }}</a-link>
        </div>
        <MyTable></MyTable>
      </a-card>
    </div>
  </div>

  <div style="margin: 10px 20px 0px 20px; text-align: left">
    <a-card style="width: 100%; border-radius: 5px; margin: 0px auto" :bordered="false">
      <template #title> {{ $t("data.content.contentIntervalAnalysis") }} </template>
      <borkenline></borkenline>
    </a-card>
  </div>
</template>
<script setup lang="ts">
const { t } = useI18n();
import Card from "./components/Card.vue";
import bar from "./components/bar.vue";
import MyTable from "./components/MyTable.vue";
import borkenline from "./components/borkenline.vue";

const form = reactive({})


const CardList = computed(() => {
  return [
    { color: "#F2F9FE", title: t("data.content.totalVisits"), number: 1216, compare: 121 },
    { color: "#E6FEEE", title: t("data.content.totalNumberOfComments"), number: 5723, compare: -281 },
    { color: "#F2F9FE", title: t("data.content.totalShare"), number: 2123, compare: 321 },
    { color: "#E6FEEE", title: t("data.content.comparedWithYesterday"), number: 775, compare: -21 },
  ];
});

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

////////////////////////////////////////////////////////////////////////////////////////////
useHead({
  title: "内容分析",
  meta: [
    { name: "keywords", content: "内容分析-arco design,nuxt3,ssr,小楠同学" },
    { name: "description", content: "内容分析-基于vue3的nuxt3框架的项目" },
  ],
});

definePageMeta({
  middleware: ["user-auth"],
});
</script>

<style scoped></style>

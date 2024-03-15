<template>
  <a-card :style="{ width: '465px', 'border-radius': '5px' }" :bordered="false">
    <template #title>
      <div style="display: flex; margin-left: 5px">{{ $t("home.categoriesPercent") }}</div>
    </template>

    <chart style="height: 270px" :option="option"></chart>
  </a-card>
</template>
<script setup lang="ts">
const { t } = useI18n();
const { option } = useOption(() => {
  return {
    tooltip: {
      trigger: "item",
    },
    legend: {
      top: "5%",
      left: "center",
    },
    series: [
      {
        name: "Access From",
        type: "pie",
        radius: ["40%", "70%"],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: "#fff",
          borderWidth: 2,
        },
        label: {
          show: false,
          position: "center",
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 40,
            fontWeight: "bold",
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: 735, name: t("home.text") },
          { value: 580, name: t("home.img") },
          { value: 300, name: t("home.video") },
        ],
      },
    ],
  };
});
onMounted(() => {});
</script>

<style scoped lang="scss"></style>

<template>
  <div :style="{ backgroundColor: prop.info.color }" class="h-36 rounded-md mt-4 w-1/5 min-w-40 flex">
    <div class="flex-2 flex flex-col justify-around mb-5 pl-2">
      <p class="text-lg">{{ prop.info.title }}</p>
      <p class="text-2xl font-bold" style="color: #000">{{ prop.info.number }}</p>
      <p v-if="prop.info.compare >= 0">
        {{ $t("data.content.comparedWithYesterday") }}<span style="color: green">{{ prop.info.compare }} <icon-arrow-rise /></span>
      </p>
      <p v-else>
        {{ $t("data.content.comparedWithYesterday") }}<span style="color: red">{{ prop.info.compare }} <icon-arrow-fall /></span>
      </p>
    </div>

    <div class="flex-3" ref="chart111" style="width: 59%; height: 90%"></div>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from "vue";
import * as echarts from "echarts";

const prop = defineProps(["info", "option"]);

const chart111 = ref();
onMounted(() => {
  let mychart = echarts.init(chart111.value);
  mychart.setOption(prop.option);
});
</script>

<style scoped lang="scss"></style>

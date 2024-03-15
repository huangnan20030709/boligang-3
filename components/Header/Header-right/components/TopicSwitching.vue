<template>
  <div>
    <a-select :placeholder="text" @change="onTopicStoreChange" style="width: 105px; border: 1px solid rgb(22, 93, 255); color: rgb(22, 93, 255)">
      <a-option value="day"><icon-check :class="{ isHidden: !isDay }" style="margin-right: 5px" />亮色模式</a-option>
      <a-option value="dark"> <icon-check :class="{ isHidden: isDay }" style="margin-right: 5px" />暗黑模式</a-option>
    </a-select>
  </div>
</template>
<script setup lang="ts">
import useTopicStore from "@/store/modules/Topic";
import { computed, onMounted } from "vue";

const topicStore = useTopicStore();

const onTopicStoreChange: any = (a: string) => {
  //@ts-ignore
  topicStore.changeTopic(a);
};

const text = computed(() => {
  return topicStore.currentTopic == "day" ? "亮色模式" : "暗黑模式";
});
const isDay = computed(() => {
  return topicStore.$state.currentTopic == "day";
});

onMounted(() => {
  nextTick(() => {
    topicStore.fetchLocalStorage();
  });
});
</script>

<style scoped>
.isHidden {
  visibility: hidden;
}
</style>

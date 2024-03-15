<template>
  <a-form :model="form">
    <a-row style="display: flex; justify-content: flex-start; align-items: center; margin-top: 10px">
      <a-col :span="8">
        <a-form-item field="value1" label="集合编号" label-col-flex="80px">
          <a-input v-model="form.value1" placeholder="please enter..." />
        </a-form-item>
      </a-col>

      <a-col :span="8">
        <a-form-item field="value2" label="集合名称" label-col-flex="80px">
          <a-input v-model="form.value2" placeholder="please enter..." />
        </a-form-item>
      </a-col>

      <a-col :span="8">
        <a-form-item field="value3" label="内容载体" label-col-flex="80px">
          <a-input v-model="form.value3" placeholder="please enter..." />
        </a-form-item>
      </a-col>

      <a-col :span="8">
        <a-form-item field="value3" label="筛选方式" label-col-flex="80px">
          <a-select :style="{ width: '320px' }" placeholder="请选择" v-model="$props.value4" @change="onValue4Change">
            <a-option value="img">图文</a-option>
            <a-option value="horizontalVideo">横版短视频</a-option>
            <a-option value="verticalVideo">竖版短视频</a-option>
          </a-select>
        </a-form-item>
      </a-col>

      <a-col :span="8">
        <a-form-item field="value3" label="状态" label-col-flex="80px">
          <a-select :style="{ width: '320px' }" placeholder="请选择" v-model="$props.value5" @change="onValue5Change">
            <a-option value="artificial">人工筛选</a-option>
            <a-option value="rules">规则筛选</a-option>
          </a-select>
        </a-form-item>
      </a-col>

      <a-col :span="8">
        <a-form-item field="value6" label="创建时间" label-col-flex="80px">
          <a-range-picker :time-picker-props="{ defaultValue: ['00:00:00', '09:09:06'] }" format="YYYY-MM-DD HH:mm" />
        </a-form-item>
      </a-col>
    </a-row>
  </a-form>
</template>
<script setup lang="ts">
import { reactive, computed } from "vue";
const props = defineProps({ value4: String, value5: String });
const $props = computed(() => {
  return { value4: props.value4, value5: props.value5 };
});
const emit = defineEmits(["update:value4", "update:value5"]);
const form = reactive({
  value1: "",
  value2: "",
  value3: "",
  value4: props.value4,
  value5: props.value5,
  value6: "",
});

const onValue4Change = (val: any) => {
  emit("update:value4", val);
};
const onValue5Change = (val: any) => {
  emit("update:value5", val);
};
</script>

<style scoped lang="scss"></style>

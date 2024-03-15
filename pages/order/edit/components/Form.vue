<template>
  <div class="selector">
    <!--  -->
    <div class="left">
      <a-form :model="form">
        <a-row style="display: flex; justify-content: flex-start; align-items: center; margin-top: 10px">
          <a-col :span="8">
            <a-form-item field="value1" label="集合编号" label-col-flex="80px">
              <a-input placeholder="please enter..." v-model="form.value1" />
            </a-form-item>
          </a-col>

          <a-col :span="8">
            <a-form-item field="value2" label="集合名称" label-col-flex="80px">
              <a-input v-model="form.value2" placeholder="" />
            </a-form-item>
          </a-col>

          <a-col :span="8">
            <a-form-item field="value3" label="状态" label-col-flex="80px">
              <a-input v-model="form.value3" placeholder="" />
            </a-form-item>
          </a-col>

          <a-col :span="8">
            <a-form-item field="value3" label="内容载体" label-col-flex="80px">
              <a-select :style="{ width: '320px' }" placeholder="请选择" v-model="form.value4" @change="onValue4Change">
                <a-option value="img">图文</a-option>
                <a-option value="horizontalVideo">横版短视频</a-option>
                <a-option value="verticalVideo">竖版短视频</a-option>
              </a-select>
            </a-form-item>
          </a-col>

          <a-col :span="8">
            <a-form-item field="value3" label="筛选方式" label-col-flex="80px">
              <a-select :style="{ width: '320px' }" placeholder="请选择" v-model="form.value5" @change="onValue5Change">
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
    </div>

    <div class="right">
      <a-button @click="refreshClk"><icon-refresh style="margin-right: 10px; font-size: 18px" /> 重置</a-button>
      <a-button type="primary" style="margin-top: 20px" @click="searchCli">
        <icon-search style="margin-right: 10px; font-size: 18px" />
        查询
      </a-button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { reactive } from "vue";

import useOrderStore from "@/store/modules/order";
const orderStore = useOrderStore();
const emit = defineEmits(["updateObj"]);

const onValue4Change = (val: any) => {};
const onValue5Change = (val: any) => {};

const form = reactive({
  value1: "",
  value2: "",
  value3: "",
  value4: "",
  value5: "",
  value6: "",
});

const refreshClk = () => {
  form.value1 = "";
  form.value4 = "";
  form.value5 = "";
};

const searchCli = () => {
  if (form.value1 == "") {
    Message.info({ content: "请输入集合编号" });
    return;
  }

  try {
    let orderObj = orderStore.orderList.find((item: any) => {
      return item.number == form.value1;
    });
    if (orderObj == undefined) {
      throw new Error("未找到改集合编号对应的订单");
    }
    emit("updateObj", orderObj);
  } catch (error: any) {
    Message.error({ content: error.message });
  }
};
</script>

<style scoped lang="scss">
.selector {
  display: flex;
}
.left {
  border-right: 1px solid #ccc;
  padding-right: 20px;
  flex: 9;
}
.right {
  flex: 1.1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-left: 20px;
  margin-top: 10px;
}
</style>

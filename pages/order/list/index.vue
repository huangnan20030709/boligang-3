<template>
  <div style="display: flex; justify-content: center; margin: 10px 20px 0px 20px">
    <a-card style="width: 100%; border-radius: 5px" :bordered="false">
      <template #title> <div style="display: flex">查询表格</div> </template>

      <div class="selector">
        <div class="left">
          <Form v-model:value4="value4" v-model:value5="value5"></Form>
        </div>

        <div class="right">
          <a-button @click="refreshCli"><icon-refresh style="margin-right: 10px; font-size: 18px" /> 重置</a-button>

          <a-button type="primary" style="margin-top: 20px" @click="searchCli">
            <icon-search style="margin-right: 10px; font-size: 18px" />
            查询
          </a-button>
        </div>
      </div>

      <a-divider />

      <div class="table"><Table></Table></div>
    </a-card>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import Form from "./components/Form.vue";
import Table from "./components/Table.vue";
import useOrderStore from "@/store/modules/order";
const orderStore = useOrderStore();

const refreshCli = () => {
  orderStore.setShowOrderList(orderStore.orderList);
  value4.value = "";
  value5.value = "";
};

const searchCli = () => {
  if (value4.value == "" && value5.value == "") return;
  orderStore.setShowOrderList(
    orderStore.orderList.filter((item: any) => {
      //@ts-ignore
      return pipeiValue4(item.contentType) && pipeiValue5(item.filterType);
    }),
  );
};

const pipeiValue4 = (val: string) => {
  if (value4.value == "") return true;
  return val == value4.value;
};
const pipeiValue5 = (val: string) => {
  if (value5.value == "") return true;
  return val == value5.value;
};

const value4 = ref("");
const value5 = ref("");

//////////////////////////////////////////////////////////////////////////////////////////////////

useHead({
  title: "全部订单",
  meta: [
    { name: "keywords", content: "全部订单-arco design,nuxt3,ssr,小楠同学" },
    { name: "description", content: "全部订单-基于vue3的nuxt3框架的项目" },
  ],
});

definePageMeta({});
</script>

<style scoped lang="scss">
.selector {
  display: flex;
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
}
</style>

<style>
.arco-card-header {
  border-bottom: none;
}
</style>

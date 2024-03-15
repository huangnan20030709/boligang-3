<template>
  <div style="display: flex; justify-content: center; margin: 10px 20px 0px 20px">
    <a-card style="width: 100%; border-radius: 5px" :bordered="false">
      <template #title> <div style="display: flex">查询表格</div> </template>
      <!--  -->
      <Form @updateObj="searchObj"></Form>

      <a-divider />

      <div class="content">
        <div class="title">订单参数</div>
        <div class="body"><FormButtom ref="formButtom" :orderObj="orderObj"></FormButtom></div>
      </div>
    </a-card>
  </div>
</template>
<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";

import { ref, onMounted } from "vue";
import Form from "./Form.vue";
import FormButtom from "./FormButtom.vue";

import useOrderStore from "@/store/modules/order";
const route = useRoute();
onMounted(() => {
  formButtom.value.searchCliWithQuery(route.query.id);
});

const orderStore = useOrderStore();

const formButtom = ref();

let res = await useFetch("/api/order/orderList");
orderStore.setOrderList(res.data.value);

const orderObj: any = ref({});

const searchObj = (val: any) => {
  orderObj.value = val;
  formButtom.value.proptoReactive();
};
</script>

<style scoped lang="scss">
.content {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  .title {
    font-size: 25px;
    font-weight: bold;
    margin-bottom: 5px;
  }
  .body {
    width: 100%;
  }
}
</style>

<style>
.arco-card-header {
  border-bottom: none;
}
</style>

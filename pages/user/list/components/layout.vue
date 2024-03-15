<template>
  <div style="display: flex; justify-content: center; margin: 10px 20px 0px 20px">
    <a-card style="width: 100%; border-radius: 5px" :bordered="false">
      <template #title>
        <div style="display: flex; color: #000; font-size: 23px; margin-top: 20px">关键词相关用户</div>
      </template>

      <a-row style="display: flex; justify-content: space-between; align-items: center">
        <a-col :span="24">
          <a-tabs default-active-key="1">
            <a-tab-pane key="1">
              <template #title><icon-user /> 全部</template>
              <MaleCard></MaleCard>
              <a-divider />
              <FemaleCard></FemaleCard>
            </a-tab-pane>

            <a-tab-pane key="2">
              <template #title>
                <span style="color: blue"><icon-man /></span> 男
              </template>
              <MaleCard></MaleCard>
            </a-tab-pane>

            <a-tab-pane key="3" class="women">
              <template #title>
                <span style="color: red"><icon-woman /></span> 女
              </template>
              <FemaleCard></FemaleCard>
            </a-tab-pane>
          </a-tabs>
        </a-col>
        <a-col :span="4" style="position: absolute; right: 18%; top: 68px">
          <a-button type="primary" status="success" @click="createUser"><icon-plus style="margin-right: 10px" /> 新建用户</a-button>
        </a-col>
        <a-col :span="4" style="position: absolute; right: 15px; top: 68px">
          <a-input-search placeholder="搜索用户" v-model="keyword" @search="searchUser" />
        </a-col>
      </a-row>
    </a-card>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted, defineAsyncComponent } from "vue";
import MaleCard from "./Male.vue";
// import FemaleCard from "./components/Female.vue";
import useUserStore from "@/store/modules/user";
import { useRouter } from "vue-router";
const router = useRouter();

const FemaleCard = defineAsyncComponent(() => {
  return import("./Female.vue");
});
 

const keyword = ref("");

const userStore = useUserStore();
await userStore.reqUserList(keyword.value);

const searchUser = () => {
  userStore.reqUserList(keyword.value);
  setTimeout(() => {}, 2000);
};

const createUser = () => {
  router.push("/user/createuser");
};

onMounted(() => {});
</script>

<style scoped></style>
<style>
.arco-card-header {
  border-bottom: none;
}
.arco-divider-horizontal {
  border-bottom: 3px solid red;
  margin: 40px 0 40px 0;
}
</style>

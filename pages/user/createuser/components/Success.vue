<template>
  <div>
    <a-result status="success" title="添加用户成功">
      <template #subtitle>
        <div>
          <a-avatar>
            <img alt="avatar" :src="prop.newUser.avatar" />
          </a-avatar>
          <span style="margin-left: 5px">{{ prop.newUser.name }}</span>
        </div>
      </template>
      <template #extra>
        <a-space>
          <a-button type="primary" @click="navigatetoUserList">返回已有用户查看</a-button>
        </a-space>
      </template>
    </a-result>
  </div>
</template>
<script setup lang="ts">
import { useRouter } from "vue-router";
import useUserStore from "@/store/modules/user";

const userStore = useUserStore();
const router = useRouter();

const prop = defineProps(["newUser"]);

const navigatetoUserList = () => {
  userStore.userList.unshift({
    html_url: "https://gitee.com/phoebe-amurensis",
    avatar_url: prop.newUser.avatar,
    login: prop.newUser.name,
    id: prop.newUser.postbox,
    fullAddress: prop.newUser.address + prop.newUser.detailAddress,
  });

  router.push("/user/list");
};
</script>

<style scoped lang="scss"></style>

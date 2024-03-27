<template>
  <div style="display: flex; justify-content: center; margin: 10px 20px 0px 20px">
    <a-card style="width: 100%; border-radius: 5px" :bordered="false">
      <div style="display: flex; justify-content: center; margin-top: 30px">
        <ASteps type="arrow" :current="currentStep" style="width: 80%">
          <AStep description="输入详细的个人信息">输入信息</AStep>
          <AStep description="前往邮箱查看验证码">邮箱验证</AStep>
          <AStep description="返回已有用户页面查看">完成注册</AStep>
        </ASteps>
      </div>
      <div style="display: flex; justify-content: center; margin-top: 45px">
        <Info v-if="currentStep == 1" @changeStep="changeStep" @updateNewUser="updateNewUser"></Info>
        <MailboxVerification v-else-if="currentStep == 2" @changeStep="changeStep" :newUser="newUser">
        </MailboxVerification>
        <Success v-else :newUser="newUser"></Success>
      </div>
    </a-card>
  </div>
</template>

<script setup lang="ts">
import Info from "./components/Info.vue";
import MailboxVerification from "./components/MailboxVerification.vue";
import Success from "./components/Success.vue";

const currentStep = ref(1);

const changeStep = (step: number) => {
  currentStep.value = step;
};

let newUser = ref({});
const updateNewUser = (val: number) => {
  newUser.value = val;
};
//////////////////////////////////////////////////////////////////////////////////////////////////
useHead({
  title: "新增用户",
  meta: [
    { name: "keywords", content: "新增用户-arco design,nuxt3,ssr,小楠同学" },
    { name: "description", content: "新增用户-基于vue3的nuxt3框架的项目" },
  ],
});

definePageMeta({
  keepalive: true,
  middleware: ["user-auth"],
});
</script>

<style scoped lang="scss"></style>

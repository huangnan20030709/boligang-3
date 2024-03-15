<template>
  <div style="height: 578px; margin-top: 45px; font-size: 17px">
    <a-space>
      <a-typography-text style="width: 120px">
        邮箱验证码
        <a-tooltip :content="`请输入邮箱为：${prop.newUser.postbox}收到的验证码`" style="width: 470px"><icon-question-circle-fill /></a-tooltip> :
      </a-typography-text>
      <a-verification-code v-model="inputValue" style="width: 300px" @finish="onFinish" id="verification" />
      <iconDelete @click="inputValue = ''"></iconDelete>
    </a-space>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from "vue";
import { Message } from "@arco-design/web-vue";
const prop = defineProps(["newUser"]);
const emit = defineEmits(["changeStep"]);

const inputValue = ref("");

const onFinish = (value: any) => {
  if (value == "031216") {
    Message.success({ content: "保存新用户成功" });
    emit("changeStep", 3);
  } else {
    Message.error({ content: "验证码错误，正确的为031216" });
  }
};

onMounted(() => {
  document.getElementById("verification").children[0].children[0].focus();
});
</script>

<style scoped lang="scss"></style>

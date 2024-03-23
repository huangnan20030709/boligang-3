<template>
  <div>
    <div class="login-form-title">{{ $t("login.form.title") }}</div>
    <div class="login-form-error-msg">{{ errMessage }}</div>
    <a-form :model="form" :layout="layout" @submit="onFormSubmit">
      <a-form-item field="name">
        <a-input v-model="form.name" :placeholder="$t('login.form.username.placeholder')">
          <template #prefix> <icon-user /> </template></a-input>
      </a-form-item>

      <a-form-item field="post">
        <a-input-password v-model="form.post" placeholder="Please enter something" :defaultVisibility="true"
          allow-clear>
          <template #prefix> <icon-lock /> </template></a-input-password>
      </a-form-item>

      <a-form-item field="remmemberPassword">
        <div style="display: flex; width: 100%; justify-content: space-between; align-items: center; line-height: 30px">
          <a-checkbox v-model="form.remmemberPassword"> {{ $t("login.form.remmemberPassword") }} </a-checkbox>
          <a-link @click="noDevforgetPassword">忘记密码</a-link>
        </div>
      </a-form-item>

      <a-form-item style="margin-bottom: 8px">
        <a-button style="width: 100%" type="primary" html-type="submit">登录账号</a-button>
      </a-form-item>

      <a-form-item>
        <a-button style="width: 100%" @click="noDev">注册账号</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import { Message } from "@arco-design/web-vue";

const router = useRouter();
const route = useRoute();
const layout = ref<any>("vertical");

const form = reactive({
  name: "huangnan",
  post: "20030709",
  remmemberPassword: true,
});

let user1 = {
  name: "huangnan0709",
  avatar: "https://foruda.gitee.com/avatar/1710233832619936825/12452800_phoebe-amurensis_1710233832.png",
};
let user2 = {
  name: "daiyunhong1216",
  avatar: "https://avatars.githubusercontent.com/u/113844132?v=4",
};

const errMessage = ref("");
const onFormSubmit = () => {
  const user = useState("user");

  if (form.name != "huangnan") {
    errMessage.value = "账号错误，应为‘huangnan’";
    return;
  }
  if (form.post != "20030709") {
    errMessage.value = "密码错误，应为‘20030709’";
    return;
  }

  if (Math.random() > 0.5) {
    user.value = user1;
    window.localStorage.setItem("user", JSON.stringify(user1));
  } else {
    user.value = user2;
    window.localStorage.setItem("user", JSON.stringify(user2));
  }
  const token = useCookie("token");
  token.value = "dyh1216";

  router.push(route.query.from ? route.query.from : "/");

  Message.success({
    id: "loginSuccess",
    content: "登录成功，感谢您使用Arco Design Pro",
  });
};

useEnterEvent(() => {
  onFormSubmit();
});

const noDev = () => {
  Message.info({
    id: "noDev",
    content: "客官请稍等，模块开发中...",
  });
};
const noDevforgetPassword = () => {
  Message.info({
    id: "noDevforgetPassword",
    content: "模块开发中...",
  });
};
</script>

<style scoped lang="scss">
.login-form-title {
  font-size: 24px;
  margin-bottom: 35px;
}

.login-form-error-msg {
  color: red;
  margin-bottom: 15px;
  height: 15px;
}
</style>

<template>
  <div class="bar">
    <TopicSwitching></TopicSwitching>

    <LocaleSwitching></LocaleSwitching>

    <a-button class="nav-btn" type="outline" :shape="'circle'" @click="toggleFullScreen">
      <template #icon>
        <icon-fullscreen-exit v-if="isFullscreen" />
        <icon-fullscreen v-else />
      </template>
    </a-button>

    <a-tooltip content="功能开发中" position="bottom">
      <a-button class="nav-btn" type="outline" :shape="'circle'" @click="settingBtnHandler">
        <template #icon>
          <icon-settings />
        </template>
      </a-button>
    </a-tooltip>

    <a-tooltip content="打开该项目仓库" position="bottom">
      <icon-github @click="githubCli" class="githubicon" style="color: rgb(0, 0, 0); font-size: 32px" />
    </a-tooltip>

    <a-tooltip v-if="!user?.name" content="点击跳转登录页" position="bottom">
      <a-avatar @click="$router.push('/login')" style="cursor: pointer">未登录</a-avatar>
    </a-tooltip>
    <a-dropdown trigger="hover" v-else>
      <a-avatar :size="35" style="cursor: pointer">
        <img alt="avatar" :src="user.avatar" @click="cb" />
      </a-avatar>
      <template #content>
        <a-doption @click="logout"><icon-undo style="color: red; margin-right: 5px" size="18" /> 退出登录</a-doption>
        <a-doption @click="editUserInfo">修改个人信息</a-doption>
      </template>
    </a-dropdown>
    <!--  -->
  </div>
</template>
<script setup lang="ts">
import { h } from "vue";
import { Modal, Input, Tag } from "@arco-design/web-vue";
import TopicSwitching from "./components/TopicSwitching.vue";
import LocaleSwitching from "./components/LocaleSwitching.vue";
import { useDark, useToggle, useFullscreen } from "@vueuse/core";
const { isFullscreen, toggle: toggleFullScreen } = useFullscreen();
//

const user = useState("user");

const settingBtnHandler = () => {};

const githubCli = () => {
  window.open("https://gitee.com/phoebe-amurensis/boligang");
};

const cb = () => {
  window.open("https://gitee.com/phoebe-amurensis");
};
const router = useRouter();
const route = useRoute();

const logout = () => {
  user.value = null;
  window.localStorage.removeItem("user");

  router.push(route.path + "#" + Date.now());
};

let cacheUserName = ref("");
let cacheUserAvatar = ref("");
const editUserInfo = () => {
  cacheUserName.value = user.value.name;
  cacheUserAvatar.value = user.value.avatar;
  Modal.warning({
    title: "修改用户信息",
    content: () => {
      const ModalContent = {
        setup() {
          return () =>
            h("div", { style: { width: "6000px" } }, [
              h(
                Input,
                {
                  style: "margin-bottom: 10px;",
                  modelValue: cacheUserName.value,
                  onInput: (val) => {
                    cacheUserName.value = val;
                  },
                },
                "This is an info message",
              ),
              h(
                Tag,
                { color: "red", style: { marginTop: "8px", marginBottom: "18px" } },
                "例如：https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png",
              ),
              h(
                Input,
                {
                  style: "margin-bottom: 10px;",
                  modelValue: cacheUserAvatar.value,
                  onInput: (val) => {
                    cacheUserAvatar.value = val;
                  },
                },
                "This is an info message",
              ),
            ]);
        },
      };
      return h(ModalContent);
    },
    onOk: () => {
      user.value = { avatar: cacheUserAvatar.value, name: cacheUserName.value };
    },
  });
};
</script>

<style scoped>
.bar {
  display: flex;
  align-items: center;
  line-height: 25px;
  font-size: 25px;
  justify-content: space-around;
  width: 400px;
}
.githubicon {
  cursor: pointer;
  cursor: pointer;
}
</style>

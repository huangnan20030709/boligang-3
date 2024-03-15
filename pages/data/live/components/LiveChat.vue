<template>
  <div>
    <a-card
      style="width: 100%; height: 580px; border: none; border-radius: 5px"
      :border="false"
      :body-style="{
        height: '100%',
        paddingTop: '16px',
        display: 'flex',
        flexFlow: 'column',
      }">
      <template #title>
        <h2 class="mt-4">{{ $t("monitor.title.chatPanel") }}</h2>
      </template>
      <a-space>
        <a-dropdown @select="handleSelect" :popup-max-height="false">
          <a-button style="width: 5vw">{{ map[type] }}<icon-down style="margin-left: 10px" :size="12" /></a-button>
          <template #content>
            <a-doption value="All">{{ $t("data.live.All") }}</a-doption>
            <a-doption value="VIP">{{ $t("data.live.VIP") }}</a-doption>
            <a-doption value="Fans">{{ $t("data.live.Fans") }}</a-doption>
            <a-doption value="NotFans">{{ $t("data.live.NotFans") }}</a-doption>
          </template>
        </a-dropdown>

        <a-input-search :style="{ width: '7vw' }" :placeholder="$t('data.live.searchRant')" />

        <a-button style="color: rgb(22, 93, 255); width: 3vw" class="btn">
          <template #icon>
            <icon-download />
          </template>
        </a-button>
      </a-space>

      <chatlist :renderList="renderList"></chatlist>

      <div class="mt-10">
        <a-space :size="8">
          <a-Input>
            <template #suffix>
              <icon-face-smile-fill />
            </template>
          </a-Input>
          <a-button type="primary">{{ $t("data.live.send") }}</a-button>
        </a-space>
      </div>
    </a-card>
  </div>
</template>
<script setup lang="ts">
const { t } = useI18n();
import chatlist from "./chatlist.vue";

let map = computed(() => {
  return {
    All: t("data.live.All"),
    VIP: t("data.live.VIP"),
    Fans: t("data.live.Fans"),
    NotFans: t("data.live.NotFans"),
  };
});

const type = ref("All");
const handleSelect = (val: string) => {
  type.value = val;
};

const renderList = ref([
  { id: 1, username: "用户3335772", content: "马上就开始了，好激动！", time: "13:09:12", isCollect: true },
  { id: 2, username: "用户5735772", content: "马上handleSelect了，好激动！", time: "13:09:12", isCollect: false },
  { id: 3, username: "用户5735772", content: "马上就开始了，好激动！", time: "13:09:12", isCollect: false },
  { id: 4, username: "用户1735277", content: "马username始了，好激动！", time: "13:09:12", isCollect: true },
  { id: 5, username: "用户5673522", content: "马上就搜索，好是激动！", time: "13:09:12", isCollect: false },
  { id: 6, username: "用户7527687", content: "马13:09:12了，好激动！", time: "13:09:12", isCollect: true },
  { id: 7, username: "用户7355472", content: "马上就开始了，好激动！", time: "13:09:12", isCollect: false },
  { id: 8, username: "用户7352672", content: "马上上网始了，好激动！", time: "13:09:12", isCollect: true },
]);
</script>

<style lang="scss">
.arco-card-header {
  border-bottom: none;
}

.arco-btn-secondary.btn:hover {
  background-color: rgb(242, 243, 245) !important;
}
.arco-btn-secondary.btn {
  background-color: transparent !important;
}
</style>

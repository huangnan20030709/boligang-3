<template>
  <a-image-preview :src="viewImgUrl" v-model:visible="visible" />
  <a-modal v-model:visible="formVisible" @ok="handleOk" @cancel="handleCancel">
    <template #title> Title </template>
    <a-image
      :src="form.avatar"
      width="210"
      :preview-visible="visible1"
      @preview-visible-change="
        () => {
          visible1 = false;
        }
      ">
      <template #extra>
        <div style="display: flex; justify-content: space-around; width: 200px">
          <span
            class="action"
            @click="
              () => {
                visible1 = true;
              }
            ">
            <icon-eye
          /></span>
          <span class="action" @click="onDownLoad"><icon-download @click="fileDown(form.avatar)" /></span>
          <a-tooltip content="A user’s avatar">
            <span class="action"><icon-info-circle /></span>
          </a-tooltip>
        </div>
      </template>
    </a-image>

    <div style="display: flex; flex-direction: column; justify-content: space-around; height: 200px">
      <p>
        name
        <a-input v-model="form.name" allow-clear />
      </p>
      <p>
        id
        <a-input v-model="form.id" disabled />
      </p>
      <p>
        address
        <a-input v-model="form.address" />
      </p>
    </div>
  </a-modal>
  <div>
    <a-row class="grid-demo" :gutter="42">
      <a-col :span="6" v-for="item in maleList" :key="item.id">
        <a-card style="margin-bottom: 20px; border-radius: 8px" hoverable>
          <div class="title">
            <a-link :href="item.html_url">
              <a-avatar>
                <img alt="avatar" :src="item.avatar_url" />
              </a-avatar>
            </a-link>

            <a-button @click="handleClick(item)" style="margin-left: 5px" status="warning"><icon-edit></icon-edit>修改用户</a-button>
            <a-button @click="viewImg(item.avatar_url)" style="margin-left: 15px">查看图片</a-button>
          </div>
          <div class="content">
            <a-descriptions style="margin-top: 20px" :data="formatData(item)" title="用户信息" :column="1" size="small" />
          </div>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>
<script setup lang="ts">
import useUserStore from "@/store/modules/user";
const userStore = useUserStore();

const maleList = computed(() => {
  return userStore.maleList;
});

const visible = ref(false);
const viewImgUrl = ref("");
const viewImg = (url: string) => {
  viewImgUrl.value = url;
  visible.value = true;
};

const formatData = (item: any) => {
  let arr = [
    {
      label: "Name",
      value: item.login,
    },
    {
      label: "ID",
      value: item.id,
    },
    {
      label: "Address",
      value: item.fullAddress ? item.fullAddress : "Yingdu Building, Zhichun Road, Beijing",
    },
  ];
  return arr;
};

const form = reactive({
  avatar: "",
  name: "",
  id: "",
  address: "",
});

const formVisible = ref(false);
const handleClick = (item: any) => {
  formVisible.value = true;

  form.avatar = item.avatar_url;
  form.name = item.login;
  form.id = item.id + "";
  form.address = item.fullAddress ? item.fullAddress : "江西省九江市共青城市和熙家园4号楼";
};

const visible1 = ref(false);

const handleOk = () => {
  formVisible.value = false;
};
const handleCancel = () => {
  formVisible.value = false;
};

const fileDown = (url) => {
  window.open(url);
};
</script>

<style scoped lang="scss">
.title {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
</style>
<style>
.arco-descriptions-title {
  text-align: left;
  font-weight: bold;
  font-size: 18px;
}
</style>

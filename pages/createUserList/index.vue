<template>
  <div class="box">
    <a-button type="primary" style="margin-bottom: 10px;" @click="$router.push('/login')">
      <template #icon> <icon-backward /> </template>
      <template #default>Back</template>
    </a-button>
    <a-table :columns="columns" :data="data">
      <template #Avatar="{ record }">
        <a-image width="120" :src="record.avatarUrl" />

      </template>
    </a-table>
  </div>
</template>
<script setup lang='ts'>
const columns = [
  {
    title: 'Avatar',
    dataIndex: 'avatarUrl',
    slotName: 'Avatar'
  },
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Postbox',
    dataIndex: 'postbox',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },

];
const data: any = ref([]);

onNuxtReady(async () => {

  let res = await getCreateUserList()
  data.value = res.data.value?.data
  console.log(res.data.value?.data);
})


definePageMeta({
  layout: "login",
  middleware(to, from) {
    const user = useState("user")

    if (user.value) {
      Message.info({ content: "已登录，不可访问该页面-" });
      abortNavigation("-已登录");
    }

    return true;
  },
});
</script>

<style scoped lang='scss'>
.box {
  height: 100vh;
  width: 100vw;
  padding: 50px;
}
</style>

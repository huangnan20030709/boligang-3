<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
import { onMounted } from "vue";

onMounted(() => {
  nextTick(async () => {
    // let res = await useGetGithubUserList();
    // console.log(ress);

    const user = useUserInfo();
    let res = window.localStorage.getItem("user");
    user.value = JSON.parse(res);
  });
});
</script>

<style lang="scss"></style>

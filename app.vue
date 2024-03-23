<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
const router = useRouter();

onMounted(() => {
  nextTick(async () => {
    // let res = await useGetGithubUserList();

    const user = useState("user");
    let res = window.localStorage.getItem("user") || {};
    user.value = JSON.parse(res);
  });
});
</script>

<style lang="scss"></style>

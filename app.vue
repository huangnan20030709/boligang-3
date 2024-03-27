<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
const router = useRouter();
console.time('1')
onMounted(() => {
  nextTick(async () => {
    // let res = await useGetGithubUserList();
    console.timeEnd('1')

    const user = useState("user");
    let res = window.localStorage.getItem("user") || {};
    user.value = JSON.parse(res);

    const token = useCookie("token");
    token.value = window.localStorage.getItem('token') ?? null
  });


});
</script>

<style lang="scss"></style>

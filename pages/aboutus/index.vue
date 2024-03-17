<template>
  <div style="text-align: left; padding: 20px 350px 20px 50px">
    <a-typography :style="{ marginTop: '-40px' }">
      <a-typography-title :heading="2"> {{ $t("about.1-title") }} </a-typography-title>
      <a-typography-paragraph> {{ $t("about.1-subTitle1") }} </a-typography-paragraph>

      <a-divider margin="20" style="background-color: white" />

      <a-typography-title :heading="3"> {{ $t("about.2-title") }} </a-typography-title>
      <a-typography-paragraph>{{ $t("about.2-subTitle") }} </a-typography-paragraph>
      <a-typography-paragraph blockquote> {{ $t("about.2-text1") }} </a-typography-paragraph>
      <a-typography-paragraph blockquote> {{ $t("about.2-text2") }} </a-typography-paragraph>

      <a-typography-title :heading="3"> {{ $t("about.3-title") }} </a-typography-title>
      <div>
        <img width="500px" src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/f50ceefbbf0946c894d492c961e9da8d~tplv-uwbnlip3yd-image.image" />
      </div>

      <a-typography-title :heading="4"> {{ $t("about.4-title") }} </a-typography-title>
      <a-typography-paragraph> {{ $t("about.4-subTitle") }} </a-typography-paragraph>
      <a-typography-paragraph blockquote>
        {{ $t("about.4-text1") }}
      </a-typography-paragraph>

      <a-typography-paragraph blockquote>
        {{ $t("about.4-text2") }}
      </a-typography-paragraph>

      <a-typography-paragraph blockquote>
        {{ $t("about.4-text3") }}
      </a-typography-paragraph>
    </a-typography>
    <hr />
    <p>{{ comp }}</p>
    <p>{{ num }}</p>
    <p>{{ a }}</p>
  </div>
</template>

<script setup lang="ts">
//////////////////////////////////////////////////////////////////////////////////////
useHead({
  title: "关于我们",
});

// definePageMeta({});

const comp = computed(() => {
  try {
    // await useHttpGet("/list");
  } catch (e) {}
  return 1;
});
// console.log(comp.value);

let num = ref(21);
onNuxtReady(() => {
  // setInterval(() => {
  // num.value++;
  // }, 500);
});

// watch(num, (n) => {
//   console.log(n + "---");
// });

watchEffect(() => {
  console.log(num.value, 7778);
});

let prop = withDefaults(defineProps<{ a?: string }>(), {
  a: "7",
});
console.log(prop);
</script>

<style scoped>
blockquote::before {
  content: "·";
}
blockquote {
  background-color: rgb(242, 243, 244);
  color: #444;
}
.arco-divider-horizontal {
  border-bottom: 3px solid #ccc;
}
</style>

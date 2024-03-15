<template>
  <div style="text-align: left">
    <a-form :model="form" layout="vertical">
      <a-form-item field="name" label="商品id">
        <a-input v-model="form.id" placeholder="" disabled style="width: 150px" />
      </a-form-item>

      <a-form-item field="mainPictures" label="商品主图">
        <a-upload v-if="form.mainPictures.length != 0" action="/" :default-file-list="form.mainPictures" image-preview list-type="picture-card" />
      </a-form-item>

      <a-form-item field="name" label="商品标题">
        <a-input v-model="form.name" placeholder="" />
      </a-form-item>

      <a-form-item field="name" label="商品售价">
        <a-input v-model="form.price" placeholder="" />
      </a-form-item>

      <a-form-item field="desc" label="商品描述">
        <a-input v-model="form.desc" placeholder="" />
      </a-form-item>

      <a-form-item field="sku" label="sku">
        <a-input v-model="form.sku" placeholder="please enter sku" />
      </a-form-item>

      <a-form-item>
        <div style="text-align: right; width: 90%">
          <a-button style="margin-right: 40px" @click="btnCli('cancel')">取消</a-button>
          <a-button @click="btnCli" type="primary">确认修改</a-button>
        </div>
      </a-form-item>
    </a-form>
  </div>
</template>
<script setup lang="ts">
import { reactive } from "vue";
import useSpuStore from "@/store/modules/spu";
import { useRoute, useRouter } from "vue-router";
const { getDetail } = useSpuStore();
const route = useRoute();
const router = useRouter();

const form: any = reactive({
  mainPictures: [],
  name: "",
  price: "0",
  desc: "",
});

const fetchFormData = (goodsDetail: any) => {
  form.mainPictures = goodsDetail.mainPictures.map((url: any, index: number) => {
    return { uid: "-" + index, name: index, url };
  });

  form.name = goodsDetail.name;
  form.price = goodsDetail.price;
  form.id = goodsDetail.id;
  form.desc = goodsDetail.desc;
};

const btnCli = (str: any) => {
  if (str == "cancel") {
    Message.info({
      content: "取消了此次修改",
    });
    router.back();
  } else {
    Message.warning({
      content: "功能开发中...",
    });
  }
};

let goodsDetail = await getDetail(route.params.id);

fetchFormData(goodsDetail);

////////////////////////////////////////////////////////////////////////////////////////////

useHead({
  title: form.name,
  tilteTemplate: "",
  meta: [
    { name: "keywords", content: "商品详情" },
    { name: "description", content: "的商品详情" },
  ],
});
definePageMeta({
  // layout: "login",
  middleware: ["login-auth"],
});
</script>

<style scoped lang="scss"></style>

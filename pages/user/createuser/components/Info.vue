<template>
  <div style="width: 400px; display: flex">
    <a-form :model="form" ref="formRef" layout="vertical" :rules="rules" @submit="handleSubmit">
      <a-form-item field="avatar" label="用户照片">
        <a-upload list-type="picture-card" action="/" image-preview @progress="onProgress" />
      </a-form-item>

      <a-form-item field="name" label="用户名">
        <a-input v-model="form.name" placeholder="请输入" />
      </a-form-item>

      <a-form-item field="postbox" label="邮箱">
        <a-input v-model="form.postbox" placeholder="请输入邮箱..." />
      </a-form-item>

      <a-form-item field="address" label="省市区">
        <a-cascader
          :options="addressData"
          v-model="form.address"
          :field-names="{ value: 'name', label: 'name' }"
          placeholder="请选择省市区"
          allow-clear />
      </a-form-item>

      <a-form-item field="detailAddress" label="详细地址">
        <a-input v-model="form.detailAddress" placeholder="请输入详细地址..." />
      </a-form-item>

      <a-form-item field="isRead">
        <a-checkbox v-model="form.isRead"> </a-checkbox>
        <span style="margin-left: 5px">
          我已阅读并服从此 <a-link target="_blank" href="https://reg.163.com/agreement_mobile_wap.shtml?v=20171127"> 《协议条款》</a-link>
        </span>
      </a-form-item>

      <a-form-item>
        <div style="width: 100%; display: flex; justify-content: flex-end">
          <a-button @click="$refs.formRef.resetFields()">清除提醒</a-button>
          <a-button type="primary" style="margin: 0 20px 0 10px; width: 100px" html-type="submit">提交</a-button>
        </div>
      </a-form-item>
    </a-form>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from "vue";
import { Message } from "@arco-design/web-vue";
import addressData from "../data/index.ts";
const emit = defineEmits(["changeStep", "updateNewUser"]);

const formRef = ref();

const form = reactive({
  avatar: "",
  name: "",
  postbox: "",
  address: "",
  detailAddress: "",
  isRead: false,
});

const rules = {
  avatar: [
    {
      required: true,
      message: "请上传照片",
    },
  ],
  postbox: [
    {
      required: true,
      message: "请输入电子邮箱地址",
    },
    {
      validator: (value, cb) => {
        if (/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(value)) {
          cb();
        } else {
          cb("请输入正确的邮箱地址");
        }
      },
    },
  ],
  name: [
    {
      required: true,
      message: "请输入用户名",
    },
    {
      validator: (value, cb) => {
        if (value.length < 2) {
          cb("请输入不少于2个字符的用户名");
        } else {
          cb();
        }
      },
    },
  ],
  address: [
    {
      required: true,
      message: "请选择省市区...",
    },
  ],
  detailAddress: [
    {
      required: true,
      message: "请填写详细地址...",
    },
  ],
  isRead: [
    {
      validator: (value, cb) => {
        if (!value) {
          cb("请勾选");
        } else {
          cb();
        }
      },
    },
  ],
};

const onProgress = (currentFile) => {
  form.avatar = currentFile.url;
};

const handleSubmit = ({ values, errors }) => {
  if (!errors) {
    emit("changeStep", 2);
    emit("updateNewUser", form);
    Message.success({ content: "缓存新用户成功" });
  }
};
</script>

<style scoped lang="scss"></style>

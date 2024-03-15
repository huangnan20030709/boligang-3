<template>
  <div class="container">
    <a-card class="general-card" style="width: 100%">
      <a-form ref="formRef" layout="vertical" :model="formData">
        <a-space direction="vertical" :size="16">
          <a-row :gutter="80">
            <a-col :span="8">
              <a-form-item label="序号" field="video.mode">
                <a-input placeholder="序号" v-model="formData.xuhao"> </a-input>
              </a-form-item>
            </a-col>

            <a-col :span="8">
              <a-form-item label="集合编号" field="video.acquisition.resolution">
                <a-input placeholder="集合编号" v-model="formData.jihebianhao" disabled> </a-input>
              </a-form-item>
            </a-col>

            <a-col :span="8">
              <a-form-item label="集合名称" field="video.acquisition.frameRate">
                <a-input placeholder="集合名称" v-model="formData.jihemingcheng"> </a-input>
              </a-form-item>
            </a-col>
          </a-row>
          <a-row :gutter="80">
            <a-col :span="8">
              <a-form-item label="内容体裁" field="video.encoding.resolution">
                <a-select placeholder="内容体裁" v-model="formData.neirongticai">
                  <a-option value="img">图文</a-option>
                  <a-option value="verticalVideo">竖版短视频</a-option>
                  <a-option value="horizontalVideo">横版短视频</a-option>
                </a-select>
              </a-form-item>
            </a-col>

            <a-col :span="8">
              <a-form-item label="筛选方式" field="video.encoding.rate.min">
                <a-select placeholder="筛选方式" v-model="formData.shaixuanfangshi">
                  <a-option value="artificial">人工筛选</a-option>
                  <a-option value="rules">规则筛选</a-option>
                </a-select>
              </a-form-item>
            </a-col>

            <a-col :span="8">
              <a-form-item label="内容量" field="video.encoding.rate.max">
                <a-input placeholder="内容量" v-model="formData.neirongliang"> </a-input>
              </a-form-item>
            </a-col>
          </a-row>
          <a-row :gutter="80">
            <a-col :span="8">
              <a-form-item label="创建时间" field="video.encoding.rate.default">
                <a-date-picker
                  style="width: 100%"
                  show-time
                  disabled
                  v-model="formData.chuangjianshijian"
                  format="YYYY-MM-DD HH:mm:ss"
                  @change="onPickerChange"
                  @select="onPickerSelect"
                  @ok="onPickerOk" />
              </a-form-item>
            </a-col>

            <a-col :span="8">
              <a-form-item label="状态" field="video.encoding.frameRate">
                <a-select placeholder="状态" v-model="formData.zhuangtai">
                  <a-option value="online">已上线</a-option>
                  <a-option value="offline">已下线</a-option>
                </a-select>
              </a-form-item>
            </a-col>

            <a-col :span="8">
              <a-form-item field="video.encoding.profile">
                <a-space style="width: 100%; margin-top: 22px; display: flex; justify-content: space-between">
                  <a-button style="width: 150px" @click="chongzhi"> 重置 </a-button>
                  <a-button style="width: 150px" type="primary" @click="onSubmitClick"> 确认修改 </a-button>
                </a-space>
              </a-form-item>
            </a-col>
            <!--  -->
          </a-row>
        </a-space>
        <div class="actions"></div>
      </a-form>
    </a-card>
  </div>
</template>
<script setup lang="ts">
import { ref, reactive, onMounted } from "vue";
import type { FormInstance } from "@arco-design/web-vue/es/form";
import useOrderStore from "@/store/modules/order";
const orderStore = useOrderStore();
const prop: any = defineProps({ orderObj: Object });
const proptoReactive = () => {
  formData.xuhao = prop.orderObj.index;
  formData.jihebianhao = prop.orderObj.number;
  formData.jihemingcheng = prop.orderObj.name;

  formData.neirongticai = prop.orderObj.contentType;
  formData.shaixuanfangshi = prop.orderObj.filterType;
  formData.neirongliang = prop.orderObj.count;

  formData.chuangjianshijian = prop.orderObj.createdTime;
  formData.zhuangtai = prop.orderObj.status;
};
const searchCliWithQuery = (id: string) => {
  let orderObj = orderStore.orderList.find((item: any) => {
    return item.index == id;
  });
  formData.xuhao = orderObj.index;
  formData.jihebianhao = orderObj.number;
  formData.jihemingcheng = orderObj.name;

  formData.neirongticai = orderObj.contentType;
  formData.shaixuanfangshi = orderObj.filterType;
  formData.neirongliang = orderObj.count;

  formData.chuangjianshijian = orderObj.createdTime;
  formData.zhuangtai = orderObj.status;
};
defineExpose({ proptoReactive, searchCliWithQuery });

watch(
  () => prop.orderObj,
  () => {
    proptoReactive();
  },
);

const route = useRoute();

const formData = reactive({
  xuhao: "",
  jihebianhao: "",
  jihemingcheng: "",

  neirongticai: "",
  shaixuanfangshi: "",
  neirongliang: "",

  chuangjianshijian: "",
  zhuangtai: "",
});
const formRef = ref<FormInstance>();

const onPickerChange = () => {};
const onPickerSelect = () => {};
const onPickerOk = () => {};

const onSubmitClick = () => {
  if (formData.jihebianhao == "") {
    Message.info({ content: "当前表单为空，请在查询表格输入集合编号" });
    return;
  } else {
    Message.success({ content: `集合编号-${formData.jihebianhao}-修改成功` });
    formData.xuhao = "";
    formData.jihebianhao = "";
    formData.jihemingcheng = "";

    formData.neirongticai = "";
    formData.shaixuanfangshi = "";
    formData.neirongliang = "";

    formData.chuangjianshijian = "";
    formData.zhuangtai = "";
  }
};

const chongzhi = () => {
  formData.xuhao = prop.orderObj.index;
  formData.jihemingcheng = prop.orderObj.name;

  formData.neirongticai = prop.orderObj.contentType;
  formData.shaixuanfangshi = prop.orderObj.filterType;
  formData.neirongliang = prop.orderObj.count;

  formData.zhuangtai = prop.orderObj.status;
};

onMounted(() => {});
</script>

<style scoped lang="scss"></style>

<template>
  <div style="display: flex; align-items: center; justify-content: space-between; margin-left: 20px">
    <div style="display: flex; align-items: center; margin-bottom: 15px">
      <a-button type="primary" style="padding: 0 20px 0 20px; margin-right: 10px"> <icon-plus style="margin-right: 10px" /> 新建 </a-button>
      <a-button style="padding: 0 20px 0 20px"> 批量导入</a-button>
    </div>

    <div style="display: flex; justify-content: center; align-items: center; margin-right: 20px; margin-bottom: 15px">
      <a-button @click="downloadCli" style="margin-right: 20px"><icon-download style="margin-right: 10px" /> 下载</a-button>

      <a-tooltip content="刷新" position="top">
        <icon-refresh style="margin-right: 20px; font-size: 20px; cursor: pointer" @click="refreshCli" />
      </a-tooltip>

      <a-dropdown @select="handleSizeSelect">
        <a-tooltip content="表格密度" position="top">
          <icon-line-height style="margin-right: 20px; font-size: 20px; cursor: pointer" />
        </a-tooltip>

        <template #content>
          <a-doption value="small" :class="{ dropdownActive: tableSize == 'small' }">small</a-doption>
          <a-doption value="medium" :class="{ dropdownActive: tableSize == 'medium' }">medium</a-doption>
          <a-doption value="large" :class="{ dropdownActive: tableSize == 'large' }">large</a-doption>
        </template>
      </a-dropdown>

      <a-tooltip content="列设置" position="top">
        <a-popover position="bottom" trigger="click">
          <icon-settings style="font-size: 20px; cursor: pointer" />

          <template #content>
            <div>功能开发中</div>
          </template>
        </a-popover>
      </a-tooltip>
    </div>
  </div>

  <a-table
    :data="res.data.value"
    :columns="columns"
    style="padding: 0 20px 0 20px; margin-bottom: 15px"
    :pagination="true"
    :loading="loading"
    :size="tableSize">
    <!--  -->
    <template #contentType="{ record }">
      <div v-if="record.contentType == 'img'" class="contentType">
        <img src="//p3-armor.byteimg.com/tos-cn-i-49unhts6dw/581b17753093199839f2e327e726b157.svg~tplv-49unhts6dw-image.image" alt="" />
        <span>图文</span>
      </div>

      <div v-else-if="record.contentType == 'verticalVideo'" class="contentType">
        <img src="//p3-armor.byteimg.com/tos-cn-i-49unhts6dw/ea8b09190046da0ea7e070d83c5d1731.svg~tplv-49unhts6dw-image.image" alt="" />
        <span>竖版短视频</span>
      </div>

      <div v-else class="contentType">
        <img src="//p3-armor.byteimg.com/tos-cn-i-49unhts6dw/77721e365eb2ab786c889682cbc721c1.svg~tplv-49unhts6dw-image.image" alt="" />
        <span>横版短视频</span>
      </div>
    </template>

    <template #filterType="{ record }">
      <span :style="{ color: record.filterType == 'artificial' ? 'red' : '#100' }"
        >{{ record.filterType == "artificial" ? "人工筛选" : "规则筛选" }}
      </span>
    </template>

    <template #status="{ record }">
      <span v-if="record.status === 'offline'" class="circle"> </span>
      <span v-else class="circle pass"> </span>
      {{ record.status === "offline" ? "已下线" : "已上线" }}
    </template>

    <template #operations="{ record }">
      <a-button type="primary" status="warning" @click="editCli(record)">
        <template #icon>
          <icon-edit />
        </template>
        操作
      </a-button>
    </template>
  </a-table>
</template>
<script setup lang="ts">
import type { TableColumnData } from "@arco-design/web-vue";
import { Message } from "@arco-design/web-vue";
import { ref, onMounted, computed } from "vue";
import useOrderStore from "@/store/modules/order";

import { useRouter } from "vue-router";

const router = useRouter();

const orderStore = useOrderStore();

const columns = ref<TableColumnData[]>([
  { dataIndex: "index", title: "序号" },
  { dataIndex: "number", title: "集合编号" },
  { dataIndex: "name", title: "集合名称" },
  { dataIndex: "contentType", title: "内容体裁 (contentType)", slotName: "contentType" },
  { dataIndex: "filterType", title: "筛选方式", slotName: "filterType" },
  { dataIndex: "count", title: "内容量" },
  { dataIndex: "createdTime", title: "创建时间" },
  { dataIndex: "status", title: "状态", slotName: "status" },
  { dataIndex: "operations", title: "操作", slotName: "operations" },
]);
const data: any = ref([]);

watch(
  () => orderStore.showOrderList,
  () => {
    data.value = orderStore.showOrderList;
  },
  { immediate: true },
);

let res = await useFetch("/api/order/orderList");
// data
// orderStore.setOrderList(res.data.value);

const downloadCli = () => {
  Message.info({ content: "下载功能开发中" });
};

const loading = ref(false);
const refreshCli = () => {
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
  }, 700);
};

const tableSize: any = ref("medium");

const handleSizeSelect = (val: any) => {
  tableSize.value = val;
};
const editCli = (record: any) => {
  router.push("/order/edit?id=" + record.index);
};
</script>

<style scoped lang="scss">
.circle {
  display: inline-block;
  height: 6px;
  width: 6px;
  border-radius: 50%;
  margin-right: 5px;
  background-color: #baf;
}
.pass {
  background-color: #f55;
}

.contentType {
  span {
    margin-left: 8px;
  }
  display: flex;
}
.dropdownActive {
  background-color: #ccc;
}
</style>

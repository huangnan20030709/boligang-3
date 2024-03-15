<template>
  <div style="text-align: left">
    <a-input-search :style="{ width: '320px' }" placeholder="标题关键词或SpuId" search-button @search="headerSearchHandler">
      <template #button-icon>
        <icon-search />
      </template>
      <template #button-default>点击搜索</template>
    </a-input-search>
    <a-tabs size="large" @change="tabChangeHandler">
      <a-tab-pane :title="item.name" v-for="item in categoryList" :key="item.id"> </a-tab-pane>
    </a-tabs>
    <div style="text-align: right">
      <a-button @click="updateBtnCli" status="success" type="primary" style="margin-right: 50px"
        ><iconUpload style="margin-right: 5px"></iconUpload> 更新商品数据</a-button
      >
    </div>

    <a-table :columns="columns" :data="showTableData" style="margin-top: 20px">
      <template #picture="{ record, rowIndex }">
        <a-image style="border-radius: 10px; cursor: zoom-in" width="65" :src="record.picture" />
      </template>

      <template #name="{ record, rowIndex }">
        <a-input v-model="record.name" />
      </template>

      <template #id="{ record, rowIndex }">
        <template v-if="searchKeyword && (record.id + '').indexOf(searchKeyword) != -1">
          <!-- <span :class="{ blink: isSearch }">{{ record.id }}</span> -->

          <template v-for="item in getHtml(record.id + '', searchKeyword)">
            <span v-html="item"></span>
          </template>
        </template>

        <template v-else>
          <span>{{ record.id }}</span>
        </template>
      </template>

      <template #price="{ record, rowIndex }">
        <a-input-number v-model="record.price" />
      </template>

      <template #desc="{ record, rowIndex }">
        <a-input v-model="record.desc" />
      </template>

      <template #btns="{ record, rowIndex }">
        <a-button type="primary" status="warning" @click="$router.push('/spu/edit/' + record.id)">
          <iconEdit style="margin-right: 5px"></iconEdit> 在修改页修改
        </a-button>
      </template>
    </a-table>
  </div>
</template>
<script setup lang="ts">
import { useRouter } from "vue-router";
import useSpuStore from "@/store/modules/spu";
import findItem from "../hooks/findItem.ts";
const spuStore = useSpuStore();
const categoryList = computed(() => {
  return spuStore.categoryList;
});

let searchKeyword = "";
let isSearch = ref(false);

const headerSearchHandler = (keyword: string) => {
  searchKeyword = keyword;
  if (keyword == "") {
    showTableData.value = [...tableData.value];
    return;
  }
  showTableData.value = findItem([...tableData.value], keyword, ["name", "id"]);

  isSearch.value = true;
  setTimeout(() => {
    isSearch.value = false;
  }, 1000);
};

const updateBtnCli = () => {
  Message.success({ content: "更新数据成功" });
};

const tabChangeHandler = async (id: string) => {
  await spuStore.getCategoryById(id);

  tableData.value = spuStore.categoryInfo.children.reduce((arr, item) => {
    let arr1 = item.goods.reduce((initArr, ele) => {
      ele.price = parseFloat(ele.price);
      initArr.push(ele);
      return initArr;
    }, []);
    arr = [...arr, ...arr1];
    return arr;
  }, []);
};

const columns = [
  {
    title: "主图",
    dataIndex: "picture",
    slotName: "picture",
    width: 150,
  },
  {
    title: "标题",
    dataIndex: "name",
    slotName: "name",
    align: "center",
    width: 300,
  },
  {
    title: "SpuId",
    dataIndex: "id",
    slotName: "id",
    align: "center",
    width: 100,
    bodyCellStyle: {
      cursor: "not-allowed",
      textShadow: "h-shadow v-shadow blur red",
    },
  },
  {
    title: "OrderNum",
    dataIndex: "orderNum",
    align: "center",
    width: 100,
    bodyCellStyle: {
      cursor: "not-allowed",
    },
  },
  {
    title: "当前价格",
    dataIndex: "price",
    slotName: "price",
    align: "center",
    width: 140,
  },

  {
    title: "商品描述",
    dataIndex: "desc",
    slotName: "desc",
    ellipsis: true,
  },
  {
    title: "操作按钮",
    slotName: "btns",
    align: "center",
  },
];

const tableData = ref([]);
const showTableData = ref([]);

watch(tableData, (newValue, oldValue) => {
  showTableData.value = [...newValue];
});

const getHtml = (str, char) => {
  let arr = str.split(char);
  let res = [];

  let test = "";
  arr.forEach((s) => {
    res.push(`<span>${s}</span>`);
    test += s;
    if (test.length < str.length) {
      res.push(`<span class="blink">${char}</span>`);
    }
    test += char;
  });

  return res;
};

onMounted(async () => {
  if (spuStore.categoryList.length == 0) {
    await spuStore.getCategoryList();
  }
  await spuStore.getCategoryById("1005000");
  tableData.value = spuStore.categoryInfo.children.reduce((arr, item) => {
    let arr1 = item.goods.reduce((initArr, ele) => {
      ele.price = parseFloat(ele.price);
      initArr.push(ele);
      return initArr;
    }, []);
    arr = [...arr, ...arr1];
    return arr;
  }, []);
  showTableData.value = [...tableData.value];
});
</script>

<style>
.blink {
  color: #000;
  animation: changeshadow 1s ease-in;
  /* 其它浏览器兼容性前缀 */
  -webkit-animation: changeshadow 1s linear infinite;
  -moz-animation: changeshadow 1s linear;
  -ms-animation: changeshadow 1s linear infinite;
  -o-animation: changeshadow 1s linear;
  animation-iteration-count: 1;
}
@keyframes changeshadow {
  0% {
    font-size: 14px;
    color: red;
  }
  50% {
    font-size: 16px;
    color: red;
  }
  100% {
    font-size: 14px;
    color: red;
  }
}
</style>

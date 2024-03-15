import { ref } from "vue";
import { defineStore } from "pinia";

export default defineStore("spu", () => {
  // 导航列表的数据管理
  // state 导航列表数据
  const categoryList = ref([]);

  // action 获取所有导航数据的方法
  const getCategoryList = async () => {
    const res: any = await useFetch("/api/spu/categoryList");

    categoryList.value = res.data.value.result;
  };

  //
  // 正在展示的单个菜单的数据
  const categoryInfo = ref([]);
  const getCategoryById = async (id: string) => {
    const res: any = await useFetch("/api/spu/getCategoryById", { query: { id } });

    categoryInfo.value = res.data.value.result;
  };

  //获取根据id商品详情信息
  const getDetail = async (id: string) => {
    let res = await useHttpGet("spu.detail", "/goods", {
      query: { id },
      server: false,
    });
    return res;
  };

  return {
    categoryList,
    getCategoryList,

    categoryInfo,
    getCategoryById,

    getDetail,
  };
});

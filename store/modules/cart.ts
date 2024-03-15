import { defineStore } from "pinia";
import { computed, ref } from "vue";
export default defineStore("cart", () => {
  // 1. 定义state - cartList
  const cartList: any = ref([]);
  // 获取最新购物车列表action

  // 2. 定义action - addCart
  const addCart = async (goods: any) => {
    const { skuId, count } = goods;

    // 添加购物车操作
    // 已添加过 - count + 1
    // 没有添加过 - 直接push
    // 思路：通过匹配传递过来的商品对象中的skuId能不能在cartList中找到，找到了就是添加过
    const item: any = cartList.value.find((item: any) => goods.skuId === item.skuId);
    if (item) {
      // 找到了
      item.count++;
    } else {
      // 没找到
      cartList.value.push(goods);
    }
  };

  // 删除购物车

  // 清除购物车
  const clearCart = () => {
    cartList.value = [];
  };

  // 计算属性
  // 1. 总的数量 所有项的count之和
  const allCount: any = computed(() => cartList.value.reduce((a: any, c: any) => a + c.count, 0));
  // 2. 总价 所有项的count*price之和
  const allPrice = computed(() => cartList.value.reduce((a: any, c: any) => a + c.count * c.price, 0));

  // 3. 已选择数量
  const selectedCount = computed(() => cartList.value.filter((item: any) => item.selected).reduce((a: any, c: any) => a + c.count, 0));
  // 4. 已选择商品价钱合计
  const selectedPrice = computed(() => cartList.value.filter((item: any) => item.selected).reduce((a: any, c: any) => a + c.count * c.price, 0));

  // 是否全选
  const isAll = computed(() => cartList.value.every((item: any) => item.selected));

  return {
    cartList,
    allCount,
    allPrice,
    isAll,
    selectedCount,
    selectedPrice,

    clearCart,
    addCart,
  };
});

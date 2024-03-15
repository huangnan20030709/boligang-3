<script setup>
// 以24小时热榜获取数据渲染模版
import { computed } from "vue";
import { onMounted, ref } from "vue";
// 设计props参数 适配不同的title和数据

const props = defineProps({
  hotType: {
    type: Number,
  },
});

// 适配title 1 - 24小时热榜  2-周热榜
const TYPEMAP = {
  1: "24小时热榜",
  2: "周热榜",
};
const title = computed(() => TYPEMAP[props.hotType]);

// 1. 封装接口
// 2. 调用接口渲染模版
const hotList = ref([]);
const getHotList = async () => {
  hotList.value = props.hotType == 1 ? list1 : list2;
};
onMounted(() => getHotList());

let list1 = [
  {
    id: "4023745",
    name: "21秋季新品，棉毛布基础款哈衣59-90cm",
    desc: "全新印花，不一样的萌趣世界",
    price: "52.00",
    picture: "https://yanxuan-item.nosdn.127.net/8f75c65cb650579df03b1997913949ff.jpg",
    orderNum: 1895,
  },
  {
    id: "4023751",
    name: "释放可爱天性，棉毛布造型领哈衣59-90cm",
    desc: "A类婴幼儿标准，安全放心",
    price: "62.00",
    picture: "https://yanxuan-item.nosdn.127.net/5e2b5629af983dadbceed483dd677eeb.jpg",
    orderNum: 1933,
  },
  {
    id: "3995845",
    name: "温暖拥抱新生，婴童杜邦棉爬服0-3岁",
    desc: "杜邦科技棉填充，保暖舒适",
    price: "129.00",
    picture: "https://yanxuan-item.nosdn.127.net/5be7e8d6177ef0d2755a5d8887e1e475.png",
    orderNum: 326,
  },
  {
    id: "3505001",
    name: "新生儿双层纱连体衣0-3岁",
    desc: "轻柔双层纱，前开襟连体哈衣",
    price: "69.00",
    picture: "https://yanxuan-item.nosdn.127.net/c898b10329bbffaa29ee448fcd3d8b29.png",
    orderNum: 373,
  },
];

let list2 = [
  {
    id: "4023745",
    name: "21秋季新品，棉毛布基础款哈衣59-90cm",
    desc: "全新印花，不一样的萌趣世界",
    price: "52.00",
    picture: "https://yanxuan-item.nosdn.127.net/8f75c65cb650579df03b1997913949ff.jpg",
    orderNum: 1895,
  },
  {
    id: "4023751",
    name: "释放可爱天性，棉毛布造型领哈衣59-90cm",
    desc: "A类婴幼儿标准，安全放心",
    price: "62.00",
    picture: "https://yanxuan-item.nosdn.127.net/5e2b5629af983dadbceed483dd677eeb.jpg",
    orderNum: 1933,
  },
  {
    id: "4007970",
    name: "舒适条纹，纯棉凉爽无袖连体衣59-90cm",
    desc: "个性条纹元素，趣味小象图案，3色可选",
    price: "79.00",
    picture: "https://yanxuan-item.nosdn.127.net/1457b3631892a975c8a8f6dbaabea8e8.jpg",
    orderNum: 332,
  },
  {
    id: "3995845",
    name: "温暖拥抱新生，婴童杜邦棉爬服0-3岁",
    desc: "杜邦科技棉填充，保暖舒适",
    price: "129.00",
    picture: "https://yanxuan-item.nosdn.127.net/5be7e8d6177ef0d2755a5d8887e1e475.png",
    orderNum: 326,
  },
];
</script>

<template>
  <div class="goods-hot">
    <h3>{{ title }}</h3>
    <!-- 商品区块 -->
    <RouterLink to="/" class="goods-item" v-for="item in hotList" :key="item.id">
      <img :src="item.picture" alt="" />
      <p class="name ellipsis">{{ item.name }}</p>
      <p class="desc ellipsis">{{ item.desc }}</p>
      <p class="price">&yen;{{ item.price }}</p>
    </RouterLink>
  </div>
</template>

<style scoped lang="scss">
.goods-hot {
  h3 {
    height: 70px;
    background: rgb(255, 100, 150);
    color: #fff;
    font-size: 18px;
    line-height: 70px;
    padding-left: 25px;
    margin-bottom: 10px;
    font-weight: normal;
  }

  .goods-item {
    display: block;
    padding: 20px 30px;
    text-align: center;
    background: #fff;

    img {
      width: 160px;
      height: 160px;
    }

    p {
      padding-top: 10px;
    }
    .name {
      font-size: 16px;
    }
    .desc {
      color: #999;
      height: 29px;
    }
    .price {
      color: red;
      font-size: 20px;
    }
  }
}
</style>

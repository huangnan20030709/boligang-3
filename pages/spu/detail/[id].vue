<template>
  <div style="margin: 10px 20px 0px 20px; text-align: left">
    <a-card style="width: 100%; border-radius: 5px; margin: 0px auto" :bordered="false">
      <div class="xtx-goods-page">
        <div class="container" v-if="goods.details">
          <!-- 商品信息 -->
          <a-button type="primary" @click="$router.back()"><icon-arrow-left /></a-button>
          <div class="info-container">
            <div>
              <div class="goods-info">
                <div class="media">
                  <!-- 图片预览区 -->
                  <XtxImageView :imageList="goods.mainPictures" />
                  <!-- 统计数量 -->
                  <ul class="goods-sales">
                    <li>
                      <p>销量人气</p>
                      <p>{{ goods.salesCount }}+</p>
                      <p>销量人气</p>
                    </li>
                    <li>
                      <p>商品评价</p>
                      <p>{{ goods.commentCount }}+</p>
                      <p>查看评价</p>
                    </li>
                    <li>
                      <p>收藏人气</p>
                      <p>{{ goods.collectCount }}+</p>
                      <p>收藏商品</p>
                    </li>
                    <li>
                      <p>品牌信息</p>
                      <p>{{ goods.brand.name }}</p>
                      <p>品牌主页</p>
                    </li>
                  </ul>
                </div>
                <div class="spec" style="margin-top: 40px; text-align: left">
                  <!-- 商品信息区 -->
                  <p class="g-name">{{ goods.name }}</p>
                  <p class="g-desc">{{ goods.desc }}</p>
                  <p class="g-price">
                    <span>{{ goods.oldPrice }}</span>
                    <span> {{ goods.price }}</span>
                  </p>
                  <div class="g-service">
                    <dl>
                      <dt>促销</dt>
                      <dd>12月好物放送，App领券购买直降120元</dd>
                    </dl>
                    <dl>
                      <dt>服务</dt>
                      <dd>
                        <span>无忧退货</span>
                        <span>快速退款</span>
                        <span>免费包邮</span>
                        <a href="javascript:;">了解详情</a>
                      </dd>
                    </dl>
                  </div>
                  <!-- sku组件 -->
                  <XtxSku :goods="goods" @change="skuChange" />
                  <!-- 数据组件 -->
                  <a-input-number v-model="count" style="width: 200px" :min="0" />
                  <!-- 按钮组件 -->
                  <div>
                    <a-button size="large" type="primary" class="btn" @click="addCart"> 加入购物车 </a-button>
                  </div>
                </div>
              </div>
              <div class="goods-footer">
                <div class="goods-article">
                  <!-- 商品详情 -->
                  <div class="goods-tabs">
                    <nav>
                      <a>商品详情</a>
                    </nav>
                    <div class="goods-detail">
                      <!-- 属性 -->
                      <ul class="attrs">
                        <li v-for="item in goods.details.properties" :key="item.value">
                          <span class="dt">{{ item.name }}</span>
                          <span class="dd">{{ item.value }}</span>
                        </li>
                      </ul>
                      <!-- 图片 -->
                      <img v-for="img in goods.details.pictures" :src="img" :key="img" alt="" />
                    </div>
                  </div>
                </div>
                <!-- 24热榜+专题推荐 -->
                <div class="goods-aside">
                  <!-- 24小时 -->
                  <DetailHot :hot-type="1" />
                  <!-- 周 -->
                  <DetailHot :hot-type="2" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <a-empty style="margin-top: 500px" v-else />
      </div>
    </a-card>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

import DetailHot from "./components/DetailHot";
import XtxImageView from "./components/ImageView/index.vue";
import XtxSku from "./components/XtxSku/index.vue";

import useSpuStore from "@/store/modules/spu";
const { getDetail } = useSpuStore();

import useCartStore from "@/store/modules/cart";
const cartStore = useCartStore();
const goods = ref({});
const route = useRoute();

const getGoods = async () => {
  goods.value = await getDetail(route.params.id);
};
// onMounted(() => {
//   setTimeout(() => {}, 0);
// });
await getGoods();
// sku规格被操作时
let skuObj = {};
const skuChange = (sku) => {
  skuObj = sku;
};

// count
const count = ref(1);

// 添加购物车
const addCart = () => {
  if (count.value < 1) {
    Message.warning({ content: "数量不能小于1" });
    return;
  }

  if (skuObj.skuId) {
    // 规则已经选择  触发action
    cartStore.addCart({
      id: goods.value.id,
      name: goods.value.name,
      picture: goods.value.mainPictures[0],
      price: goods.value.price,
      count: count.value,
      skuId: skuObj.skuId,
      attrsText: skuObj.specsText,
      selected: true,
    });
    Message.success({ content: "添加购物车成功" });
  } else {
    // 规格没有选择 提示用户
    Message.warning("请选择规格");
  }
};
////////////////////////////////////////////////////////////////////////////////////////////

useHead({
  title: goods.value.name,
  tilteTemplate: "",
  meta: [
    { name: "keywords", content: "商品详情" },
    { name: "description", content: "的商品详情" },
  ],
});

definePageMeta({
  keepalive: true,
});
</script>

<style scoped lang="scss">
.xtx-goods-page {
  .goods-info {
    min-height: 600px;
    background: #fff;
    display: flex;

    .media {
      width: 580px;
      height: 600px;
      padding: 30px 50px;
    }

    .spec {
      flex: 1;
    }
  }

  .goods-footer {
    display: flex;
    margin-top: 20px;

    .goods-article {
      width: 940px;
      margin-right: 20px;
    }

    .goods-aside {
      width: 280px;
      min-height: 1000px;
    }
  }

  .goods-tabs {
    min-height: 600px;
    background: #fff;
  }

  .goods-warn {
    min-height: 600px;
    background: #fff;
    margin-top: 20px;
  }

  .number-box {
    display: flex;
    align-items: center;

    .label {
      width: 60px;
      color: #999;
      padding-left: 10px;
    }
  }

  .g-name {
    font-size: 22px;
    text-align: left;
  }

  .g-desc {
    color: #999;
    margin-top: 10px;
    text-align: left;
  }

  .g-price {
    margin-top: 10px;
    text-align: left;
    span {
      &::before {
        content: "¥";
        font-size: 14px;
      }

      &:first-child {
        color: red;
        margin-right: 10px;
        font-size: 22px;
      }

      &:last-child {
        color: #999;
        text-decoration: line-through;
        font-size: 16px;
      }
    }
  }

  .g-service {
    background: #f5f5f5;
    width: 500px;
    padding: 20px 10px 0 10px;
    margin-top: 10px;

    dl {
      padding-bottom: 20px;
      display: flex;
      align-items: center;

      dt {
        width: 50px;
        color: #999;
      }

      dd {
        color: #666;

        &:last-child {
          span {
            margin-right: 10px;

            &::before {
              content: "•";
              color: green;
              margin-right: 2px;
            }
          }

          a {
            color: green;
          }
        }
      }
    }
  }

  .goods-sales {
    display: flex;
    width: 400px;
    align-items: center;
    text-align: center;
    height: 140px;

    li {
      flex: 1;
      position: relative;

      ~ li::after {
        position: absolute;
        top: 10px;
        left: 0;
        height: 60px;
        border-left: 1px solid #e4e4e4;
        content: "";
      }

      p {
        &:first-child {
          color: #999;
        }

        &:nth-child(2) {
          color: red;
          margin-top: 10px;
        }

        &:last-child {
          color: #666;
          margin-top: 10px;

          i {
            color: green;
            font-size: 14px;
            margin-right: 2px;
          }

          &:hover {
            color: green;
            cursor: pointer;
          }
        }
      }
    }
  }
}

.goods-tabs {
  min-height: 600px;
  background: #fff;

  nav {
    height: 70px;
    line-height: 70px;
    display: flex;
    border-bottom: 1px solid #f5f5f5;

    a {
      padding: 0 40px;
      font-size: 18px;
      position: relative;

      > span {
        color: red;
        font-size: 16px;
        margin-left: 10px;
      }
    }
  }
}

.goods-detail {
  padding: 40px;

  .attrs {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 30px;

    li {
      display: flex;
      margin-bottom: 10px;
      width: 50%;

      .dt {
        width: 100px;
        color: #999;
      }

      .dd {
        flex: 1;
        color: #666;
      }
    }
  }

  > img {
    width: 100%;
  }
}

.btn {
  margin-top: 20px;
}

.bread-container {
  padding: 25px 0;
}
</style>

<template>
  <a-card class="card-demo" hoverable>
    <div class="container">
      <a-image :src="goodInfo.picture" width="180" height="180" class="viewPic"> </a-image>
      <div class="container" @click="$router.push('/spu/detail/' + goodInfo.id)" style="cursor: pointer; margin-top: 5px; width: 180px">
        <h2
          style="
            font-weight: normal;
            font-size: 17px;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
            width: 70%;
            margin-bottom: 10px;
            text-align: center;
          ">
          {{ goodInfo.name }}
        </h2>
        <h3
          style="
            font-weight: normal;
            font-size: 14px;
            color: #aaa;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
            width: 100%;
            text-align: center;
            margin-bottom: 10px;
          ">
          {{ goodInfo.desc }}
        </h3>
        <p style="display: flex; justify-content: space-between">
          <span>
            <span style="text-decoration: line-through; font-size: 10px">
              原价:{{ Number((goodInfo.price + "").split(".")[0]) + 53 + "." + "00" }}
            </span>
          </span>
          <span style="color: red; font-size: 20px; margin-left: 5px">￥{{ goodInfo.price }}</span>
        </p>
      </div>
    </div>
  </a-card>
</template>
<script setup lang="ts">
const { goodInfo } = defineProps(["goodInfo"]);
</script>

<style scoped lang="scss">
.viewPic {
  cursor: url("../img/view.png"), pointer;
}
.card-demo {
  width: 200px;
  margin-left: 24px;
  transition-property: all;
}
.card-demo:hover {
  transform: translateY(-4px);
}
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>

<template>
  <div class="container">
    <div class="content">
      <div class="logo">
        <img @click="imgcli" style="cursor: pointer"
          src="https://ydlunacommon-cdn.nosdn.127.net/1ed7a7858eabd4d407370a83d9209838.png" alt="" width="90px" />
      </div>

      <div class="info first">
        <div class="top">
          <div class="title">教育</div>
          <ul class="text">
            <li>有道智慧教育</li>
            <li>中国大学MOOC</li>
            <li>网易有道校企合作</li>
          </ul>
        </div>
        <div class="bottom">
          <div class="title">企业</div>
          <ul class="text">
            <li>有道智云</li>
            <li>有道智选</li>
            <li>Youdao Ads</li>
            <li>有道人工翻译</li>
          </ul>
        </div>
      </div>

      <div class="info">
        <div class="title">关于有道</div>
        <ul class="text">
          <li>有道介绍</li>
          <li>投资者关系</li>
          <li>社会责任</li>
          <li>同道计划</li>
          <li>廉正举报</li>
          <li>联系我们</li>
        </ul>
      </div>

      <div class="info">
        <div class="title">加入有道</div>
        <ul class="text">
          <li>校园招聘</li>
          <li>社会招聘</li>
        </ul>
      </div>

      <div class="info">
        <div class="title">相关资质</div>
        <ul class="text">
          <li>营业执照</li>
          <li>出版物经营许可证</li>
          <li>广播电视节目</li>
          <li>制作许可证</li>
        </ul>
      </div>

      <div class="info">
        <div class="title">用户资质</div>
        <ul class="text">
          <li>隐私政策</li>
          <li>服务条款</li>
        </ul>
      </div>
    </div>
    <div class="footer">
      <li>©2024网易公司 京ICP证080268号 京ICP备10005211号 京公网安备 11010802020092号</li>
      <li>
        不良信息举报 网上有害信息举报专区 网易廉政举报：jb@rd.netease.com 违法和不良信息举报电话：4006666696
        举报邮箱（涉未成年人）：youdao_jubao@rd.netease.com
      </li>
    </div>
  </div>
</template>
<script setup lang="ts">
const imgcli = () => {
  window.open("https://fanyi.youdao.com/index.html#/");
};
</script>

<style scoped lang="scss">
.container {
  background-color: var(--color-bg-1);

  .content {
    height: 230px;
    display: flex;
    justify-content: space-between;
    margin-top: 38px;

    .logo {
      height: 100%;
      flex: 2;
      margin-left: 200px;
    }

    .info {
      height: 100%;
      flex: 1;

      .title {
        color: rgb(56, 56, 56);
        font-size: 14px;
        font-weight: bold;
        margin-bottom: 15px;
        text-align: left;
      }

      .text>li {
        color: rgb(160, 160, 160);
        font-size: 12px;
        margin-top: 5px;
        text-align: left;
      }
    }

    .first>.top {
      margin-bottom: 20px;
    }
  }

  .footer {
    margin-top: 10px;

    li {
      color: #777;
      margin-top: 2px;
      font-size: 12px;
      list-style: none;
    }
  }
}
</style>

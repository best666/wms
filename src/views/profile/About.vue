<template>
  <div class="about">
    <!-- 顶部导航 -->
    <div class="nav">
      <h1 class="title">发现</h1>
    </div>
    <!-- 我的信息 -->
    <div class="me">
      <div class="icon">
        <img src="@/assets/img/best.jpg"
             alt="头像">
        <div class="info">
          <h4>best</h4>
          <p>啥也没有~</p>
        </div>
      </div>
    </div>
    <!-- 设置相关 -->
    <div class="site">
      <div class="s-li">搜索</div>
      <div class="s-li">我的仓库</div>
      <div class="s-li">报表统计</div>
      <div class="s-li">用户管理</div>
      <div class="s-li">设置·关于</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'About',
  components: {

  }
}
</script>

<style scoped>
.about {
  background: #fafafa;
}
/* 顶部导航栏 */
.about .nav {
  height: 44px;
  width: 100%;
  background-color: #fff;
  border-bottom: 1px solid #eee;
  box-shadow: 0 1px 0 0 #eee;
}
.about .title {
  font-size: 18px;
  line-height: 44px;
  text-align: center;
}
/* 信息 */
.me .icon {
  display: flex;
  height: 72px;
  /* flex-direction: column; */
  justify-content: space-around;
  align-items: center;
  border-radius: 20px;
  overflow: hidden;
  background: #fff;
  border-bottom: 1px solid #eee;
}
.me .icon > img {
  width: 56px;
  height: 56px;
  background-repeat: no-repeat;
  border-radius: 5px;
}
.me .icon .info {
  text-align: center;
}
.me .icon .info > p {
  font-size: 14px;
  color: #ccc;
}
/* 设置 */
.site{
  margin-top: 20px;
  background: #fff;
}
.site .s-li{
  height: 44px;
  line-height: 44px;
  margin: 10px 30px;
  text-align: center;
  border: 1px solid #eee;
  border-radius: 5px;
  box-shadow: 2px 1px 2px #eee;
}
</style>
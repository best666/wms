<template>
  <tab-bar>
<!--    设置点击后的颜色：activeColor="blue"-->
    <tab-bar-item path="/home">
      <img slot="item-icon" src="@/assets/img/tabbar/home.svg" alt="">
      <img slot="item-icon-active" src="@/assets/img/tabbar/home_active.svg" alt="">
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/stores">
      <img slot="item-icon" src="@/assets/img/tabbar/stores.svg" alt="">
      <img slot="item-icon-active" src="@/assets/img/tabbar/stores_active.svg" alt="">
      <div slot="item-text">仓库</div>
    </tab-bar-item>
    <tab-bar-item path="/about">
      <img slot="item-icon" src="@/assets/img/tabbar/profile.svg" alt="">
      <img slot="item-icon-active" src="@/assets/img/tabbar/profile_active.svg" alt="">
      <div slot="item-text">发现</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from "@/components/common/tabbar/TabBar";
import TabBarItem from "@/components/common/tabbar/TabBarItem";

export default {
  name: "MainTabBar",
  components:{
    TabBarItem,
    TabBar
  }
}
</script>

<style scoped>

</style>
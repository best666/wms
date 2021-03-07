<template>
  <div id="app">
    <div>
      <main-tab-bar></main-tab-bar>
    </div>
<!--    <div>-->
<!--      <router-link to="/home">首页</router-link>-->
<!--      <router-link to="/stores">仓库</router-link>-->
<!--      <router-link to="/about">我的</router-link>-->
<!--    </div>-->

<!--  路由匹配到的组件将显示在这里-->
    <router-view/>
  </div>
</template>

<script>

import MainTabBar from "@/components/content/mainTabbar/MainTabBar";

export default {
  name:'App',
  components: {
    MainTabBar
  }
}
</script>

<style>

</style>

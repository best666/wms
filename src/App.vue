<template>
  <div id="app">
    <div>
      <main-tab-bar></main-tab-bar>
    </div>
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

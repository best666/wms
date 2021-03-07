<template>
  <div>
    <h1>我是首页</h1>
    <nav-bar class="home-nav"></nav-bar>
    <p>我是首页内容，哈哈哈哈</p>
  </div>
<!--  <router-view/>-->
</template>

<script>

import NavBar from "@/components/common/navbar/NavBar";
export default {
  name: 'Home',
  components: {
    NavBar

  }
}
</script>

<style>
.home-nav {
  background-color: var(--color-tint);
  color: #fff;

  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}

</style>
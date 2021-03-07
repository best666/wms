<template>
  <div id="app">
    <div>
      <router-link to="/home">首页</router-link>
      <router-link to="/stores">仓库</router-link>
      <router-link to="/about">关于</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>

export default {
  name:'App'
}
</script>

<style>

</style>

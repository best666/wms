<template>
  <div class="store">
    <!-- 顶部导航 -->
    <div class="nav">
      <h1 class="title">仓库</h1>
    </div>
    <div class="exist">
      <div class="e-ware">
        <div class="tit">现有仓库</div>
        <div class="e-goods">对应物品</div>
      </div>
    </div>
    <div class="operate">
      <div v-for="(item,index) in mgArr" :key="index" class="o-tit">
        {{item}}</div>
    </div>
  </div>
</template>

<script>
export default {
name: "Stores",
data(){
  return{
    exArr:['现有仓库'],
    mgArr:['仓库管理','物品管理'],
  }
},
methods:{

},
}
</script>

<style scoped>
.store {
  background: #fafafa;
}
/* 顶部导航栏 */
.store .nav {
  height: 44px;
  width: 100%;
  background-color: #fff;
  border-bottom: 1px solid #eee;
  box-shadow: 0 1px 0 0 #eee;
}
.store .title {
  font-size: 18px;
  line-height: 44px;
  text-align: center;
}
/* 现有仓库和物品 */
  .exist{
    background: #fff
  }
  .e-ware{
    height: 44px;
  }
  /* 操作 */
  .operate{
    background: #fff;
  }
</style>
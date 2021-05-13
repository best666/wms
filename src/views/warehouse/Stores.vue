<template>
  <div class="store">
    <!-- 顶部导航 -->
    <div class="nav">
      <h1 class="title">仓库</h1>
    </div>
    <div class="exist">
      <div class="e-ware">
        <div class="tit">现有仓库</div>
        <div v-for="(index,item) in wareArr"
             :key="index"
             class="i-ware">
          <img src=""
               alt="">
          <div class="w-item">{{item}}</div>
        </div>
        <div v-if="false" class="e-goods">对应物品</div>
      </div>
    </div>
    <div class="operate">
      <div v-for="(item,index) in mgArr"
           :key="index"
           class="o-tit">
        {{item}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Stores",
  data () {
    return {
      exArr: ['现有仓库'],
      mgArr: ['仓库管理', '物品管理'],
      wareArr: { 1: '仓库1', 2: '仓库2', 3: '仓库3', 4: '仓库4' },
    }
  },
  methods: {

  },
}
</script>

<style lang="scss" scoped>
.store {
  background: #fafafa;
  /* 顶部导航栏 */
  .nav {
    height: 44px;
    width: 100%;
    background-color: #fff;
    border-bottom: 1px solid #eee;
    box-shadow: 0 1px 0 0 #eee;
    .title {
      font-size: 18px;
      line-height: 44px;
      text-align: center;
    }
  }
  /* 现有仓库和物品 */
  .exist {
    background: #fff;
    border-bottom: 1px solid #eee;
    .e-ware {
      display: flex;
      line-height: 44px;
      text-align: center;
      .tit {
        font-weight: 500;
      }
      .i-ware {
        flex: 1;
        .w-item {
          height: 44px;
        }
      }
    }
  }
  /* 操作 */
  .operate {
    max-width: 20px auto;
    background: #fff;
    display: flex;
    .o-tit {
      flex: 1;
      height: 44px;
      line-height: 44px;
      text-align: center;
    }
  }
}
</style>
<template>
  <div class="home">
    <div class="nav">
    <h1 class="title">首页</h1>
    </div>
    <div class="select">
      <div :class="['btn',{'active':active === index}]" v-for="(item,index) in tabArr" :key="index" @click="onActive(index)">
        {{item}}</div>
    </div>
    <div class="content">
      <div v-if="active === 0" class="ruku">w我是入库</div>
      <div v-if="active === 1" class="chuku">w我是出库</div>
      <div v-if="active === 2" class="diaoku">w我是调库</div>
    </div>
  </div>

</template>

<script>

// import NavBar from "@/components/common/navbar/NavBar"

export default {
  // name: 'Home',
  components: {
    // NavBar,
  },
  data(){
    return{
      tabArr:['入库','出库','调库'],//导航条
      active: 0,//选中的导航条
    }
  },
  methods:{
    onActive(index){
      this.active = index;
    },
  },
}
</script>

<style>
  .home{
    background: #FAFAFA;
  }
  /* 顶部导航栏 */
  .home .nav{
    height: 44px;
    width: 100%;
    background-color: #fff;
    border-bottom: 1px solid #eee;
    box-shadow:0 1px 0 0 #eee;
  }
  .home .title{
    font-size: 18px;
    line-height: 44px;
    text-align: center;
  }
/* 导航条区域 */
  .select{
    display: flex;
    justify-items: center;
    align-items: center;
    border-bottom: 1px solid #eee;
    background-color: #fff;
    }
  .select .btn{
    position: relative;
    width: 120px;
    height: 44px;
    font-weight: 500;
    text-align: center;
    line-height: 44px;
  }
  .select .active{
    color: #32c2ee;
  }
  .select .active::after{
    position: absolute;
    content: " ";
    height: 2px;
    width: 40px;
    left:50%;
    bottom: 0;
    transform: translate(-50%);
    background-color: #32c2ee;
  }
  .select .active::before{
    position: absolute;
    content: "";
    width: 10px;   
    height: 10px;
    left: 54px;
    bottom: -6px;
    transform: translate(-50%);
    border-top: 2px solid #32c2ee;
    border-right: 2px solid #32c2ee;
    transform: rotate(135deg);
    z-index: 1;
    background: #fff;
  }
  /* 内容区域 */
  .content{
    margin: 20px auto;
  }
  .content .ruku{
    text-align: center;
  }
  .content .chuku{
    text-align: center;
  } 
  .content .diaoku{
    text-align: center;
  }
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
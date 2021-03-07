<template>
  <div class="tab-bar-item" @click="itemClick">
<!-- 放置图标和文字-->
<!-- 判断是否active-->
    <div v-if="!isActive" slot="item-icon">
      <slot name="item-icon"></slot>
    </div>

    <div v-else slot="item-icon-active">
      <slot name="item-icon-active"></slot>
    </div>
<!--    放文字-->
    <div slot="item-text" :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    props:{
      //接受MainTabBar传来的path和activeColor两个参数
      path:String,
      //设置点击后的颜色
      activeColor:{
        type:String,
        default:"red"
      }
    },
    data(){
      return{

      }
    },
    computed:{
      //判断是否被激活
      isActive(){
        return this.$route.path.indexOf(this.path) !== -1;
      },
      //被激活则修改样式
      activeStyle(){
        return this.isActive ? {color:this.activeColor}:{}
      }
    },
    methods:{
      itemClick(){
        this.$router.replace(this.path)
      }
    }
}
</script>

<style scoped>
  .tab-bar-item{
    flex: 1;
    text-align: center;
    height: 49px;

    font-size: 14px;
  }
  .tab-bar-item img{
    margin-top: 3px;
    width: 24px;
    height: 24px;
  /*  去掉图片与文字间的空隙*/
    vertical-align: middle;
    margin-bottom: 2px;
  }
</style>
<template>
<div id="tab-bar">
  <slot></slot>
</div>
</template>

<script>
import TabBarItem from "@/components/common/tabbar/TabBarItem";
export default {
name: "TabBar",
  components: {
  TabBarItem
}
}
</script>

<style scoped>
/*组件布局*/
  #tab-bar{
    display: flex; /* 以flex方式布局*/
    background-color: #f6f6f6;
    /*绝对布局*/
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;

    box-shadow: 0 -3px 10px rgba(100,100,100,.2);

    /*height: 50px;*/
  }
</style>
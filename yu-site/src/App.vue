<template>
  <div id="app">
    <div id="nav">
        <bubble></bubble>
        <!-- 这事一个起始页面，包含了所有窗口的对接路由通道。 -->
        <transition name="fade">
        <router-view></router-view>
        <!-- 这是一个其副页面展示窗口 -->
        </transition> 
    </div>
  </div>
</template>

<script>
import bubble from '@/components/Bubble.vue';
export default {
  components:{
    bubble,
  }
}
</script>

<style lang="scss" scoped>
.fade{
     &-enter {
       opacity: 0;
    transform: translateX(100%);
    &-to {
      transform: translateX(0);
      opacity: 1;
    }
    &-active {
      transition: all .5s ease;
    }
  }

  &-leave {
    transform: translateX(0);
    opacity: 1;
    &-to {
      transform: translateX(100%);
      opacity: 0;
    }
    &-active {
      transition: all .5s ease;
    }
  }
}
</style>

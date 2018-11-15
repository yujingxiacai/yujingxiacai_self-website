<template>
  <div id="app">
    <div id="nav">
        <transition name="fade">
        <router-view></router-view>
        <!-- 一切皆是view。这里就是一个空壳子，主题内容需要自己去填充。 -->
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

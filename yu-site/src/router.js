import Vue from 'vue';
import Router from 'vue-router';
// import Home from './views/Home.vue';
import Bubble from './components/Bubble.vue';
import Life from './views/Life.vue';
import Contact from '@/components/Contact.vue';

Vue.use(Router);
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: 'bubble',
    },
    // {
    //   path: '/bubble',
    //   name: 'bubble',
    //   component: Bubble,
    // },//这里加着你会发现bubble中在App.vue中的动画效果有重影，这里猜测这个路由和上面默认路由重叠了！！。
    {
      path: '/life',
      name: 'life',
      component: Life,
    }, {
      path: '/contact',
      name: 'contact',
      component: Contact,
    },
  ],
});

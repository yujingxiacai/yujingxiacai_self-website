import Vue from 'vue';
import Router from 'vue-router';
// import Home from './views/Home.vue';
import Bubble from './components/Bubble.vue';
import Life from './views/Life.vue';
import Contact from '@/components/Contact.vue';
import Blog from '@/components/Blog.vue'
import Err from '@/components/Errorindex.vue'
Vue.use(Router);
export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: 'bubble',
    },
    {
      path: '/bubble',
      name: 'bubble',
      component: Bubble,
    },
    {
      path: '/life',
      name: 'life',
      component: Life,
    }, {
      path: '/contact',
      name: 'contact',
      component: Contact,
    }, {
      path: '/blog',
      name: 'blog',
      component: Blog,
    }, {
      path: '/*',
      name:'Err',
      component: Err,
    }
  ],
});

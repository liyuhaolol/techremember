import { createRouter, createWebHistory } from 'vue-router'
import Index from '../views/index.vue'
import Layoutdemo from "@/views/layoutdemo.vue";
import Lunbodemo from "@/views/lunbodemo.vue";
import Paginationdemo from "@/views/paginationdemo.vue";
import Pageloadbyindex from "@/views/pageloadbyindex.vue";
import Pageloadbyloadmore from "@/views/pageloadbyloadmore.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path:'/index',
      name:'index',
      component:Index
    },
    {
      path:'/layout',
      name:'layout',
      component:Layoutdemo
    },
    {
      path:'/lunbo',
      name:'lunbo',
      component:Lunbodemo
    },
    {
      path:'/pagination',
      name:'pagination',
      component:Paginationdemo
    },
    {
      path:'/pageloadbyindex',
      name:'pageloadbyindex',
      component:Pageloadbyindex
    },
    {
      path:'/pageloadbyloadmore',
      name:'pageloadbyloadmore',
      component:Pageloadbyloadmore
    },
/*    {//异步加载
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },*/
  ],
})

export default router

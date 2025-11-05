import { createRouter, createWebHistory } from 'vue-router'
import Index from '../views/index.vue'
import Layoutdemo from "@/views/layoutdemo.vue";
import Lunbodemo from "@/views/lunbodemo.vue";
import Paginationdemo from "@/views/paginationdemo.vue";
import Pageloadbyindex from "@/views/pageloadbyindex.vue";
import Pageloadbyloadmore from "@/views/pageloadbyloadmore.vue";
import Menudemo from "@/views/menu/menudemo.vue";
import Home from "@/views/menu/pages/home.vue";
import Setting from "@/views/menu/pages/setting.vue";
import Function from "@/views/menu/pages/function.vue";
import Home2 from "@/views/menu/pages/home2.vue";
import Home3 from "@/views/menu/pages/home3.vue";
import Home4 from "@/views/menu/pages/home4.vue";
import Datademo from "@/views/datademo.vue";

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
    {
      path:'/menu',
      name:'menu',
      component:Menudemo,
      children:[
        {
          path:'home',
          name:'home',
          component:Home,
          meta: { menuIndex: '1-1' }
        },
        {
          path:'home2',
          name:'home2',
          component:Home2,
          meta: { menuIndex: '1-2' }
        },
        {
          path:'home3',
          name:'home3',
          component:Home3,
          meta: { menuIndex: '1-3' }
        },
        {
          path:'home4',
          name:'home4',
          component:Home4,
          meta: { menuIndex: '1-4-1' }
        },
        {
          path:'setting',
          name:'setting',
          component:Setting,
          meta: { menuIndex: '4' }
        },
        {
          path:'function/:name',
          name:'function',
          component:Function,
          meta: { menuIndex: '2' }
        },
      ]
    },
    {
      path:'/data',
      name:'data',
      component:Datademo
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

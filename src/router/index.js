import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '@/Pages/HomePage.vue';
import IndexPage from '@/Pages/IndexPage'

Vue.use(VueRouter)

const router = new VueRouter({  
  mode: 'history',
  routes: 
    [
      {
        path: '/',
        component: HomePage,
      },
      {
        path: '/slide',
        component: IndexPage,
      },
    ]
  }
)
export default router
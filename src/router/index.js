import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '@/Pages/HomePage.vue';

Vue.use(VueRouter)

const router = new VueRouter({  
  routes: 
    [
      {
        path: '/',
        name: HomePage,
        component: HomePage,
      },
    ]
  }
)
export default router
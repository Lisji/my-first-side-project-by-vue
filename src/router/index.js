import Vue from 'vue'
import VueRouter from 'vue-router'
import IndexPage from '@/Pages/IndexPage'


Vue.use(VueRouter)

const router = new VueRouter({  
  mode: 'history',
  routes: 
    [
      {
        path: '/',
        component: IndexPage,
      },
    ]
  }
)
export default router
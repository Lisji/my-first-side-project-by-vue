import Vue from 'vue'
import VueRouter from 'vue-router'
import IndexPage from '@/Pages/IndexPage'
import blog from '@/Pages/BlogArticlePage'


Vue.use(VueRouter)

const router = new VueRouter({  
  mode: 'history',
  routes: 
    [
      {
        path: '/',
        component: IndexPage,
      },
      {
        path: '/blog',
        component: blog,
      },
      {
        path: '/blog/weather',
        component: blog,
      },
    ]
  }
)
export default router
import Vue from 'vue'
import VueRouter from 'vue-router'
import IndexPage from '@/Pages/IndexPage'
import blog from '@/Pages/BlogArticlePage'
import weather from '@/Pages/WeatherPage'
import article from '@/components/articleComponent'


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
        path: '/blog/article/:articleId',
        component: article,
      },
      {
        path: '/blog/weather',
        component: weather,
      },
    ],
    scrollBehavior() {
      if (window.location.pathname != '/'){
        return {x: 0, y: 0}
      }
    }
  },
)
export default router
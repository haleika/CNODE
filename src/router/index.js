import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home'
import content from '@/pages/Content'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      redirect: {
        path: "/all"
      }
    },
    {
      path: '/:tab',
      name: 'home',
      component: home
    },
    {
      path: '/topic/content"',
      name: 'content',
      component: content
    }
  ]
})

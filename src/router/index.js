import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Issue from '@/components/issue/Issue'
import My from '@/components/my/My'
import About from '@/components/about/About'
import Details from '@/components/details/Details'

Vue.use(Router)

export default new Router({
  mode:"history",
  linkActiveClass:"active",
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Index
    },
    {
      path: '/issue',
      name: 'Issue',
      component: Issue,
      // beforeEnter: (to, from, next) => {
      //   // ...
      // }
    },
    {
      path: '/my',
      name: 'My',
      component: My
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/details',
      name: 'Details',
      component: Details
    }
  ]
})

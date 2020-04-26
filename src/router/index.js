import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Issue from '@/components/issue/Issue'
import My from '@/components/my/My'
import About from '@/components/about/About'
import Details from '@/components/details/Details'
import Classify from '@/components/classify/Classify'
import Pigeonhole from '@/components/pigeonhole/Pigeonhole'

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
      path: '/classify',
      name: 'Classify',
      component: Classify
    },
    {
      path: '/pigeonhole',
      name: 'Pigeonhole',
      component: Pigeonhole
    },
    {
      path: '/details',
      name: 'Details',
      component: Details
    }
  ]
})

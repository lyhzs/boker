import Vue from 'vue'
import Router from 'vue-router'
// import Index from '@/components/Index'
// import Issue from '@/components/issue/Issue'
// import My from '@/components/my/My'
// import About from '@/components/about/About'
// import Details from '@/components/details/Details'
// import Classify from '@/components/classify/Classify'
// import Pigeonhole from '@/components/pigeonhole/Pigeonhole'

Vue.use(Router)

export default new Router({
  mode:"history",
  linkActiveClass:"active",
  routes: [
    {
      path: '/',
      name: 'Home',
      component: ()=>import('@/components/Index')
    },
    {
      path: '/issue',
      name: 'Issue',
      component: ()=>import('@/components/issue/Issue')
    },
    {
      path: '/classify',
      name: 'Classify',
      component: ()=>import('@/components/classify/Classify')
    },
    {
      path: '/pigeonhole',
      name: 'Pigeonhole',
      component: ()=>import('@/components/pigeonhole/Pigeonhole')
    },
    {
      path: '/details/:id',
      name: 'Details',
      component: ()=>import('@/components/details/Details')
    },
    {
      path: '/interaction',
      name: 'Interaction',
      component: ()=>import('@/components/interaction/Interaction')
    },
    {
      path: '/search',
      name: 'Search',
      component: ()=>import('@/components/search/Search')
    },
    {
      path: '/login',
      name: 'Login',
      component: ()=>import('@/components/login/Login')
    },
    {
      path: '/about',
      name: 'About',
      component: ()=>import('@/components/about/About')
    },
    {
      path: '/label',
      name: 'Label',
      component: ()=>import('@/components/label/Label')
    }
  ]
})

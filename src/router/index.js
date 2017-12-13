import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Classify from '@/components/Classify'
import Shopping from '@/components/Shopping'
import Self from '@/components/Self'

import Settlement from '@/components/Settlement'
import Data from '@/components/Data'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/classify',
      name: 'classify',
      component: Classify
    },
    {
      path: '/shopping',
      name: 'shopping',
      component: Shopping
    },
    {
      path: '/self',
      name: 'self',
      component: Self
    },
    {
<<<<<<< HEAD
      path: '/settlement',
      name: 'settlement',
      component: Settlement
=======
      path: '/data',
      name: 'data',
      component: Data
>>>>>>> 3e5d677633927eadd9ebbe5bce5ebd18e02867fc
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Classify from '@/components/Classify'
import Shopping from '@/components/Shopping'
import Self from '@/components/Self'
import Data from '@/components/Data'
import Address from '@/components/Address'


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
      path: '/data',
      name: 'data',
      component: Data
    },
	  {
	  path: '/address',
	  name: 'address',
	  component: Address
	}
  ]
})

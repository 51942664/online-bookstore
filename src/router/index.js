import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Classify from '@/components/Classify'
import Shopping from '@/components/Shopping'
import Self from '@/components/Self'

import Settlement from '@/components/Settlement'

import ReceAddress from '@/components/Rece-address'
import PerData from '@/components/PerData'

import Address from '@/components/Address'
import DetailsPage from '@/components/DetailsPage'

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
      component: Shopping,
      meta:{
        requiresAuth:true
      }
    },
    {
      path: '/self',
      name: 'self',
      component: Self
    },
    {
      path: '/settlement',
      name: 'settlement',
      component: Settlement
    },
    {
       path: '/rece-address',
      name: 'rece-address',
      component: ReceAddress
    },
    {
      path: '/perData',
      name: 'perData',
      component: PerData

    },
	  {
	  path: '/address',
	  name: 'address',
	  component: Address
  },
  {
	  path: '/detailsPage',
	  name: 'detailsPage',
	  component: DetailsPage
	}
  ]
})

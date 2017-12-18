import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Classify from '@/components/Classify'
import Shopping from '@/components/Shopping'
import Self from '@/components/Self'

import Settlement from '@/components/Settlement'
import PerData from '@/components/PerData'

import ModifyAddress from '@/components/ModifyAddress'
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
      path: '/perData',
      name: 'perData',
      component: PerData

    },
	  {
	  path: '/ModifyAddress',
	  name: 'ModifyAddress',
	  component: ModifyAddress
  },
  {
	  path: '/detailsPage',
	  name: 'detailsPage',
	  component: DetailsPage
	}
  ]
})

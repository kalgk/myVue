import Vue from 'vue'
import Router from 'vue-router'
import home from '@/modules/home/home'
import login from '@/modules/user/login'
import reg from '@/modules/user/reg'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      component: home
    },
	{
      path: '/',
      component: login
    },
	{
      path: '/reg',
      component: reg
    }
  ]
})

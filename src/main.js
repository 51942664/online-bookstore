// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import bootstrapCss from 'bootstrap-css'
import fontCss from './styles/fonts/font-awesome.css'
Vue.config.productionTip = false

// router.beforeEach((to, from, next) => {  
//   //to即将进入的目标路由对象，from当前导航正要离开的路由， next : 下一步执行的函数钩子
//   if(to.path === '/Login') { next() } // 如果即将进入登录路由，则直接放行
//    else {   //进入的不是登录路由
//        if(to.meta.requiresAuth && !sessionStorage.getItem('accessToken')) {next({ path: '/Login' })} 
//      //下一跳路由需要登录验证，并且还未登录，则路由定向到 登录路由
//      else { next() }} 
//     //如果不需要登录验证，或者已经登录成功，则直接放行
//   });    
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
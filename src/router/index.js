import Vue from 'vue'
import Router from 'vue-router'
import Content from '@/components/Content'
import Cart from '@/components/Cart'
import LoginPage from '@/components/LoginPage'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Content',
      component: Content
    },
    {
      path: '/cart',
      name : 'Cart',
      component : Cart
    },
    {
      path : '/login',
      name : 'Login',
      component : LoginPage
    }
  ]
})

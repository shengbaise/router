import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import home from './views/home.vue'
import customer from './views/customer.vue'
import order from './views/order.vue'
import supplier from './views/supplier.vue'

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
      children: [{
        path: '/home/customer',
        component: customer
      }, {
        path: '/home/order',
        component: order
      }]
    },
    {
      path: '/supplier',
      component: supplier
    }
  ]
})

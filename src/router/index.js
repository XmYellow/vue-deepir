import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import UserList from '@/components/UserList'
import test from '@/components/test'
import chart from '@/components/LineChart'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/userList',
      name: 'UserList',
      component: UserList
    },
    {
      path: '/test',
      name: 'test',
      component: test
    },
    {
      path: '/chart',
      name: 'chart',
      component: chart
    }
  ]
})

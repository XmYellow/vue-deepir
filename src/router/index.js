import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import test from '@/components/test'
import chart from '@/components/LineChart'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
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

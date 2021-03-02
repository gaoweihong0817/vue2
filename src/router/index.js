import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/Home',
    name: 'Home',
    component: Home,
    meta: {
      keepAlive: true,
      // 自定义路由的级别
      level: 2
    },

  },
  {
    path: "/",
    redirect: "/Home"
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/edt',
    name: 'edt',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/edt.vue'),
    meta: {

      // 自定义路由的级别
      level: 12
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
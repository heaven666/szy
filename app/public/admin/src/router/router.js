import Vue from 'vue'
import localforage from 'localforage'
import VueRouter from 'vue-router'
import getRoutes from './routes'

Vue.use(VueRouter)

let router = null

export const initialRouter = () => {
  router = new VueRouter({
    routes: getRoutes(),
    scrollBehavior (to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition
      } else {
        return { x: 0, y: 0 }
      }
    }
  })

  router.beforeEach((to, from, next) => {
    console.log(to.path)
    if (to.path === '/') {
      next('/login')
      return
    }

    if (to.path.startsWith('/login')) {
      next()
      return
    }
    if (to.path.startsWith('/main')) {
      localforage.getItem('isLogin').then(res => {
        if (res === 'true') {
          next()
        } else {
          next('/login')
        }
      })
    }
  })

  return router
}

export const getRouter = () => {
  console.log(1111)
  return router
}

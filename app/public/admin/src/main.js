import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/components/_globals'
import $http from '@/api'

Vue.config.productionTip = false
Vue.prototype.$http = $http

Vue.use(ElementUI)
new Vue({
  router: router.initialRouter(),
  store,
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import * as modules from './modules'

Vue.use(Vuex)

const isProduction = process.env.NODE_ENV === 'production'

const store = new Vuex.Store({
  modules,
  // 记录状态的快照，仅在开发环境使用
  plugins: !isProduction ? [createLogger()] : []
})

export default store

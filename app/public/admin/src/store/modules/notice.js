// import applicationApi from '@/api/application/index'
// import Vue from 'vue'
const notice = {
  /**
   * 初始化state
   */
  state: {
    // notice: []
  },

  /**
   * 用来获取state
   */
  getters: {
    // notice: state => state.notice
  },

  /**
   * 用来更改state
   */
  mutations: {
    // SET_NOTICE: (state, notice) => {
    //   state.notice = notice
    // }
  },
  /**
   * 用来发起action，可以是异步的，可以是同步的
   */
  actions: {
    // getNotice ({ commit, state }) {
    //   return new Promise((resolve, reject) => {
    //     Vue.prototype.$http.request(applicationApi.qryRemind).then(response => {
    //       commit('SET_NOTICE', response.data.data)
    //       resolve(response)
    //     }).catch(error => {
    //       reject(error)
    //     })
    //   })
    // }
  }
}
export default notice
